import * as i0 from './portal.effects';
import * as i1 from '@ngrx/store/src/store';
import * as i2 from '@ngrx/effects/src/actions';
import * as i3 from '../../sorting-services/sorting.service';
export function PortalEffectsNgSummary() {
    return [{ summaryKind: 3, type: { reference: i0.PortalEffects, diDeps: [{ isAttribute: false,
                        isHost: false, isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i1.Store } } },
                    { isAttribute: false, isHost: false, isSelf: false, isSkipSelf: false, isOptional: false,
                        token: { identifier: { reference: i2.Actions } } }, { isAttribute: false, isHost: false,
                        isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i3.SortingServices } } }],
                lifecycleHooks: [] } }];
}
