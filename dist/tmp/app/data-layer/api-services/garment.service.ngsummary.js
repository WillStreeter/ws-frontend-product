import * as i0 from './garment.service';
import * as i1 from './http.wrapper.service';
export function GarmentServiceNgSummary() {
    return [{ summaryKind: 3, type: { reference: i0.GarmentService, diDeps: [{ isAttribute: false,
                        isHost: false, isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i1.HttpWrapperService } } }],
                lifecycleHooks: [] } }];
}
