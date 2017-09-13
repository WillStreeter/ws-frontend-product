import * as i0 from './home.routing.module';
import * as i1 from './home.component';
import * as i2 from './home.component.ngfactory';
import * as i3 from '@angular/router';
import * as i4 from '../../../../node_modules/@angular/router/router.ngsummary';
export function HomeRoutingModuleNgSummary() {
    return [{ summaryKind: 2, type: { reference: i0.HomeRoutingModule, diDeps: [],
                lifecycleHooks: [] }, entryComponents: [{ componentType: i1.HomeComponent,
                    componentFactory: i2.HomeComponentNgFactory }], providers: [{ provider: { token: { identifier: { reference: i3.ROUTES } },
                        useClass: null, useValue: [{ path: '', component: i1.HomeComponent }], useFactory: null,
                        useExisting: undefined, deps: undefined, multi: true }, module: { reference: i0.HomeRoutingModule,
                        diDeps: [], lifecycleHooks: [] } }], modules: [{ reference: i3.RouterModule,
                    diDeps: [{ isAttribute: false, isHost: false, isSelf: false, isSkipSelf: false, isOptional: true,
                            token: { identifier: { reference: i3.ɵa } } }, { isAttribute: false, isHost: false, isSelf: false,
                            isSkipSelf: false, isOptional: true, token: { identifier: { reference: i3.Router } } }],
                    lifecycleHooks: [] }, { reference: i0.HomeRoutingModule, diDeps: [],
                    lifecycleHooks: [] }], exportedDirectives: [{ reference: i3.RouterOutlet },
                { reference: i3.RouterLink }, { reference: i3.RouterLinkWithHref }, { reference: i3.RouterLinkActive }],
            exportedPipes: [] }, i4.RouterModuleNgSummary];
}
