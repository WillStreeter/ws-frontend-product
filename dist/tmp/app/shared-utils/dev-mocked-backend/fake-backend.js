"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var index_1 = require("@angular/http/testing/index");
var MockError = (function (_super) {
    __extends(MockError, _super);
    function MockError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MockError;
}(http_1.Response));
function fakeBackendFactory(backend, options, realBackend) {
    var products = JSON.parse(localStorage.getItem('products')) || [];
    backend.connections.subscribe(function (connection) {
        setTimeout(function () {
            if (connection.request.url.endsWith('/api/products/update') && connection.request.method === http_1.RequestMethod.Post) {
                var urlParts = connection.request.url.split('/');
                var id = parseInt(urlParts[urlParts.length - 1]);
                var updateProduct_1 = JSON.parse(connection.request.getBody());
                var completeProductUpdate_1;
                var updatedProducts = products.map(function (product) {
                    if (product.id === updateProduct_1.id) {
                        product = Object.assign({}, product, updateProduct_1);
                        completeProductUpdate_1 = product;
                    }
                });
                localStorage.setItem('products', JSON.stringify(updatedProducts));
                var productReturn = { status: 200,
                    updateProduct: {
                        product: completeProductUpdate_1
                    }
                };
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: {
                        product: completeProductUpdate_1
                    } })));
                return;
            }
            if (connection.request.url.endsWith('/api/products/add') && connection.request.method === http_1.RequestMethod.Post) {
                var newProduct = JSON.parse(connection.request.getBody());
                console.log(' newProduct =', newProduct);
                console.log('   newProduct.id =', newProduct.id);
                products = products.concat([newProduct]);
                localStorage.setItem('products', JSON.stringify(products));
                console.log(' newProduct =', newProduct);
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: {
                        product: newProduct
                    } })));
                return;
            }
            if (connection.request.url.match(/\/api\/products\/\d+$/) &&
                connection.request.method === http_1.RequestMethod.Delete) {
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    var urlParts = connection.request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < products.length; i++) {
                        var product = products[i];
                        if (product.id === id) {
                            products.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(products));
                            break;
                        }
                    }
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200 })));
                }
                else {
                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 401 })));
                }
                return;
            }
            var realHttp = new http_1.Http(realBackend, options);
            var requestOptions = new http_1.RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe(function (response) {
                connection.mockRespond(response);
            }, function (error) {
                connection.mockError(error);
            });
        }, 500);
    });
    return new http_1.Http(backend, options);
}
exports.fakeBackendFactory = fakeBackendFactory;
exports.fakeBackendProvider = {
    provide: http_1.Http,
    useFactory: fakeBackendFactory,
    deps: [index_1.MockBackend, http_1.BaseRequestOptions, http_1.XHRBackend]
};
