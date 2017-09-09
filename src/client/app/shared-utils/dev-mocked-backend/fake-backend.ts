import { Http, BaseRequestOptions, Response, ResponseOptions,
         ResponseType, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';

class MockError extends Response implements Error {
    name:any;
    message:any;
}


export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    // array in local storage for registered users
    let products: any[] = JSON.parse(localStorage.getItem('products')) || [];

    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {

            // updateProduct
            if (connection.request.url.match(/\/api\/products\/update\/\d+$/) && connection.request.method === RequestMethod.Post) {
                // get new user object from post body

                let urlParts = connection.request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                let updateProduct = JSON.parse(connection.request.getBody());
                let completeProductUpdate;
                let updatedProducts = products.map(product => {
                              if(product.id === id){
                                  product = Object.assign({}, product, updateProduct);
                                  completeProductUpdate = product;
                              }
                       });

                localStorage.setItem('products', JSON.stringify(updatedProducts));
                let productReturn = { status: 200,
                    updateProduct:{
                        product:completeProductUpdate
                    }
                };
                // respond 200 OK
                connection.mockRespond(new Response(
                    new ResponseOptions({ status: 200,   body:productReturn }  )
                ));

                return;
            }

            // create New Product
            if (connection.request.url.endsWith('/api/products/add') && connection.request.method === RequestMethod.Post) {
                // get new user object from post body
                let  newProduct = JSON.parse(connection.request.getBody());
                // validation
                let duplicateProduct = products.filter(product => { return product.name === product.name; }).length;
                if (duplicateProduct) {
                    return connection.mockError(new Error('Product Named "' + newProduct.name + '" is already taken'));
                }

                // save new user
                newProduct.id = newProduct.length + Math.floor(Math.random() * (100 - 1)) +1;
                products.push(newProduct);
                localStorage.setItem('products', JSON.stringify(products));
                 let productReturn = { status: 200,
                                   account:{
                                             product:newProduct
                                           }
                                 };
                // respond 200 OK
                connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200,   body:productReturn }  )
                        ));

                return;
            }

            // delete Product
            if (connection.request.url.match(/\/api\/Products\/\d+$/) &&
                connection.request.method === RequestMethod.Delete) {
                // check for fake auth token in header and return user if valid, this
                // security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find Product by id in products array
                    let urlParts = connection.request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < products.length; i++) {
                        let product = products[i];
                        if (product.id === id) {
                            // delete user
                            products.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(products));
                            break;
                        }
                    }

                    // respond 200 OK
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }

                return;
            }

            // pass through any requests not handled above
            let realHttp = new Http(realBackend, options);
            let requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });

        }, 500);

    });

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};