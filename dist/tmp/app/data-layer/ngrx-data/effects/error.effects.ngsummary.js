import * as i0 from './error.effects';
import * as i1 from '@ngrx/effects/src/actions';
import * as i2 from '@angular/router';
export function ErrorEffectsNgSummary() {
    return [{ summaryKind: 3, type: { reference: i0.ErrorEffects, diDeps: [{ isAttribute: false,
                        isHost: false, isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i1.Actions } } },
                    { isAttribute: false, isHost: false, isSelf: false, isSkipSelf: false, isOptional: false,
                        token: { identifier: { reference: i2.Router } } }], lifecycleHooks: [] } }];
}
