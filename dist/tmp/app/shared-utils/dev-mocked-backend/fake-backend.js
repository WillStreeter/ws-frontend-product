import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
class MockError extends Response {
}
export function fakeBackendFactory(backend, options, realBackend) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    backend.connections.subscribe((connection) => {
        setTimeout(() => {
            if (connection.request.url.endsWith('/api/products/update') && connection.request.method === RequestMethod.Post) {
                let urlParts = connection.request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                let updateProduct = JSON.parse(connection.request.getBody());
                let completeProductUpdate;
                let updatedProducts = products.map(product => {
                    if (product.id === updateProduct.id) {
                        product = Object.assign({}, product, updateProduct);
                        completeProductUpdate = product;
                    }
                });
                localStorage.setItem('products', JSON.stringify(updatedProducts));
                let productReturn = { status: 200,
                    updateProduct: {
                        product: completeProductUpdate
                    }
                };
                connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: {
                        product: completeProductUpdate
                    } })));
                return;
            }
            if (connection.request.url.endsWith('/api/products/add') && connection.request.method === RequestMethod.Post) {
                let newProduct = JSON.parse(connection.request.getBody());
                console.log(' newProduct =', newProduct);
                console.log('   newProduct.id =', newProduct.id);
                products = [...products, newProduct];
                localStorage.setItem('products', JSON.stringify(products));
                console.log(' newProduct =', newProduct);
                connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: {
                        product: newProduct
                    } })));
                return;
            }
            if (connection.request.url.match(/\/api\/products\/\d+$/) &&
                connection.request.method === RequestMethod.Delete) {
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    let urlParts = connection.request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < products.length; i++) {
                        let product = products[i];
                        if (product.id === id) {
                            products.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(products));
                            break;
                        }
                    }
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                }
                else {
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }
                return;
            }
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
                .subscribe((response) => {
                connection.mockRespond(response);
            }, (error) => {
                connection.mockError(error);
            });
        }, 500);
    });
    return new Http(backend, options);
}
export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
