import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppStageModuleNgFactory } from './app-stage/app.stage.module.ngfactory';
enableProdMode();
platformBrowser().bootstrapModuleFactory(AppStageModuleNgFactory);
