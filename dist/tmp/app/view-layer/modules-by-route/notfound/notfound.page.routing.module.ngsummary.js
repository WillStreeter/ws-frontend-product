import * as i0 from './notfound.page.routing.module';
import * as i1 from './notfound.page.component';
import * as i2 from './notfound.page.component.ngfactory';
import * as i3 from '@angular/router';
import * as i4 from '../../../../node_modules/@angular/router/router.ngsummary';
export function NotfoundPageRoutingModuleNgSummary() {
    return [{ summaryKind: 2, type: { reference: i0.NotfoundPageRoutingModule, diDeps: [],
                lifecycleHooks: [] }, entryComponents: [{ componentType: i1.NotfoundPageComponent,
                    componentFactory: i2.NotfoundPageComponentNgFactory }], providers: [{ provider: { token: { identifier: { reference: i3.ROUTES } },
                        useClass: null, useValue: [{ path: '**', component: i1.NotfoundPageComponent }],
                        useFactory: null, useExisting: undefined, deps: undefined,
                        multi: true }, module: { reference: i0.NotfoundPageRoutingModule, diDeps: [],
                        lifecycleHooks: [] } }], modules: [{ reference: i3.RouterModule, diDeps: [{ isAttribute: false,
                            isHost: false, isSelf: false, isSkipSelf: false, isOptional: true, token: { identifier: { reference: i3.ɵa } } },
                        { isAttribute: false, isHost: false, isSelf: false, isSkipSelf: false, isOptional: true,
                            token: { identifier: { reference: i3.Router } } }], lifecycleHooks: [] },
                { reference: i0.NotfoundPageRoutingModule, diDeps: [], lifecycleHooks: [] }],
            exportedDirectives: [{ reference: i3.RouterOutlet }, { reference: i3.RouterLink }, { reference: i3.RouterLinkWithHref },
                { reference: i3.RouterLinkActive }], exportedPipes: [] }, i4.RouterModuleNgSummary];
}
