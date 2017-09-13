import * as i0 from '@angular/core';
import * as i1 from './app.stage.routing.module';
import * as i2 from '@angular/router';
import * as i3 from '@angular/common';
export const AppStageRoutingModuleNgFactory = i0.ɵcmf(i1.AppStageRoutingModule, [], (_l) => {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i2.ActivatedRoute, i2.ɵf, [i2.Router]), i0.ɵmpd(4608, i2.NoPreloading, i2.NoPreloading, []), i0.ɵmpd(6144, i2.PreloadingStrategy, null, [i2.NoPreloading]),
        i0.ɵmpd(135680, i2.RouterPreloader, i2.RouterPreloader, [i2.Router, i0.NgModuleFactoryLoader,
            i0.Compiler, i0.Injector, i2.PreloadingStrategy]), i0.ɵmpd(4608, i2.PreloadAllModules, i2.PreloadAllModules, []), i0.ɵmpd(5120, i0.NgProbeToken, () => {
            return [i2.ɵb()];
        }, []), i0.ɵmpd(4608, i2.ɵg, i2.ɵg, [i0.Injector]), i0.ɵmpd(5120, i0.APP_INITIALIZER, (p0_0) => {
            return [i2.ɵh(p0_0)];
        }, [i2.ɵg]), i0.ɵmpd(5120, i2.ROUTER_INITIALIZER, i2.ɵi, [i2.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, (p0_0) => {
            return [p0_0];
        }, [i2.ROUTER_INITIALIZER]), i0.ɵmpd(1024, i2.ɵa, i2.ɵd, [[3, i2.Router]]),
        i0.ɵmpd(512, i2.UrlSerializer, i2.DefaultUrlSerializer, []), i0.ɵmpd(512, i2.ChildrenOutletContexts, i2.ChildrenOutletContexts, []), i0.ɵmpd(256, i2.ROUTER_CONFIGURATION, { useHash: true }, []), i0.ɵmpd(1024, i3.LocationStrategy, i2.ɵc, [i3.PlatformLocation, [2, i3.APP_BASE_HREF], i2.ROUTER_CONFIGURATION]),
        i0.ɵmpd(512, i3.Location, i3.Location, [i3.LocationStrategy]), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]),
        i0.ɵmpd(1024, i2.ROUTES, () => {
            return [[{ path: '', loadChildren: 'app/view-layer/modules-by-route/home/home.module#HomeModule' },
                    { path: 'error', loadChildren: 'app/view-layer/modules-by-route/notfound/notfound.page.module#NotfoundPageModule' }]];
        }, []), i0.ɵmpd(1024, i2.Router, i2.ɵe, [i0.ApplicationRef, i2.UrlSerializer,
            i2.ChildrenOutletContexts, i3.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i2.ROUTES, i2.ROUTER_CONFIGURATION, [2, i2.UrlHandlingStrategy],
            [2, i2.RouteReuseStrategy]]), i0.ɵmpd(512, i2.RouterModule, i2.RouterModule, [[2, i2.ɵa], [2, i2.Router]]), i0.ɵmpd(512, i1.AppStageRoutingModule, i1.AppStageRoutingModule, [])]);
});