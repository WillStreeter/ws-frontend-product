"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var broker_grid_store_1 = require("./broker.grid.store");
var broker_masthead_store_1 = require("./broker.masthead.store");
var broker_paginator_store_1 = require("./broker.paginator.store");
var broker_search_store_1 = require("./broker.search.store");
exports.BROKER_PROVIDERS = [
    broker_grid_store_1.BrokerGridStore,
    broker_masthead_store_1.BrokerMastheadStore,
    broker_paginator_store_1.BrokerPaginatorStore,
    broker_search_store_1.BrokerSearchStore,
];
__export(require("./broker.grid.store"));
__export(require("./broker.masthead.store"));
__export(require("./broker.paginator.store"));
__export(require("./broker.search.store"));
//# sourceMappingURL=index.js.map