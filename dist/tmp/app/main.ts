/**
 * Bootstraps the application and makes the ROUTER_PROVIDERS and the APP_BASE_HREF available to it.
 * @see https://angular.io/docs/ts/latest/api/platform-browser-dynamic/index/bootstrap-function.html
 */

import { enableProdMode } from '@angular/core';
// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


// The app module
import { AppStageModule } from './app-stage/app.stage.module';


if (String('<%= BUILD_TYPE %>') === 'prod') { enableProdMode(); }
  platformBrowserDynamic().bootstrapModule(AppStageModule/*, options*/);
// });
