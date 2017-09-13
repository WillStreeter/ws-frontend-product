import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppStageModule } from './app-stage/app.stage.module';
if (String('prod') === 'prod') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppStageModule);
