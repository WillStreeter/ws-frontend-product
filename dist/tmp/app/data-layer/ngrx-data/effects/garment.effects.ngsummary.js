import * as i0 from './garment.effects';
import * as i1 from '@ngrx/store/src/store';
import * as i2 from '../../api-services/garment.service';
import * as i3 from '../../sorting-services/sorting.service';
import * as i4 from '@ngrx/effects/src/actions';
export function GarmentEffectsNgSummary() {
    return [{ summaryKind: 3, type: { reference: i0.GarmentEffects, diDeps: [{ isAttribute: false,
                        isHost: false, isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i1.Store } } },
                    { isAttribute: false, isHost: false, isSelf: false, isSkipSelf: false, isOptional: false,
                        token: { identifier: { reference: i2.GarmentService } } }, { isAttribute: false, isHost: false,
                        isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i3.SortingServices } } },
                    { isAttribute: false, isHost: false, isSelf: false, isSkipSelf: false, isOptional: false,
                        token: { identifier: { reference: i4.Actions } } }], lifecycleHooks: [] } }];
}
