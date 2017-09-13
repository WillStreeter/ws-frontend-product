import * as i0 from './search.ahead.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/flex-layout/flexbox/api/layout';
import * as i3 from '@angular/flex-layout/media-query/media-monitor';
import * as i4 from '@angular/flex-layout/flexbox/api/flex';
import * as i5 from '@angular/flex-layout/flexbox/api/layout-wrap';
import * as i6 from '@angular/forms';
import * as i7 from './search.ahead.component';
import * as i8 from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
const styles_SearchAheadComponent = [i0.styles];
export const RenderType_SearchAheadComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_SearchAheadComponent, data: {} });
export function View_SearchAheadComponent_0(_l) {
    return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { input: 0 }), (_l()(), i1.ɵted(null, ['\n'])),
        (_l()(), i1.ɵeld(0, null, null, 21, 'div', [['fxFlex', '100'], ['fxLayout',
                'row']], null, null, null, null, null)),
        i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer], { layout: [0, 'layout'] }, null), i1.ɵdid(737280, null, 0, i4.FlexDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer, [3, i2.LayoutDirective],
            [3, i5.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), (_l()(),
            i1.ɵted(null, ['\n   '])), (_l()(), i1.ɵeld(0, null, null, 16, 'div', [['fxFlex', '50'], ['fxLayout', 'column']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer], { layout: [0,
                'layout'] }, null), i1.ɵdid(737280, null, 0, i4.FlexDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer, [3, i2.LayoutDirective], [3, i5.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), (_l()(), i1.ɵted(null, ['\n       '])),
        (_l()(), i1.ɵeld(0, null, null, 11, 'form', [['class', 'search-cntr'],
            ['novalidate', '']], [[2, 'ng-untouched', null], [2, 'ng-touched', null],
            [2, 'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'submit'], [null, 'reset']], (_v, en, $event) => {
            var ad = true;
            if (('submit' === en)) {
                const pd_0 = (i1.ɵnov(_v, 12).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                const pd_1 = (i1.ɵnov(_v, 12).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i6.ɵbf, [], null, null), i1.ɵdid(16384, null, 0, i6.NgForm, [[8,
                null], [8, null]], null, null), i1.ɵprd(2048, null, i6.ControlContainer, null, [i6.NgForm]), i1.ɵdid(16384, null, 0, i6.NgControlStatusGroup, [i6.ControlContainer], null, null), (_l()(), i1.ɵted(null, ['\n         '])), (_l()(), i1.ɵeld(0, null, null, 2, 'label', [['class', 'search-label'], ['for', 'searchBox']], null, null, null, null, null)),
        (_l()(), i1.ɵeld(0, null, null, 1, 'i', [['class', 'material-icons']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['search'])), (_l()(), i1.ɵted(null, ['\n         '])),
        (_l()(), i1.ɵeld(0, [[1, 0], ['searchBox', 1]], null, 0, 'input', [['class',
                'search-box'], ['id', 'searchBox'], ['placeholder', ' Search...']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n       '])), (_l()(), i1.ɵted(null, ['\n   '])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n']))], (_ck, _v) => {
        const currVal_0 = 'row';
        _ck(_v, 3, 0, currVal_0);
        const currVal_1 = '100';
        _ck(_v, 4, 0, currVal_1);
        const currVal_2 = 'column';
        _ck(_v, 7, 0, currVal_2);
        const currVal_3 = '50';
        _ck(_v, 8, 0, currVal_3);
    }, (_ck, _v) => {
        const currVal_4 = i1.ɵnov(_v, 14).ngClassUntouched;
        const currVal_5 = i1.ɵnov(_v, 14).ngClassTouched;
        const currVal_6 = i1.ɵnov(_v, 14).ngClassPristine;
        const currVal_7 = i1.ɵnov(_v, 14).ngClassDirty;
        const currVal_8 = i1.ɵnov(_v, 14).ngClassValid;
        const currVal_9 = i1.ɵnov(_v, 14).ngClassInvalid;
        const currVal_10 = i1.ɵnov(_v, 14).ngClassPending;
        _ck(_v, 10, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);
    });
}
export function View_SearchAheadComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'search-ahead', [], null, null, null, View_SearchAheadComponent_0, RenderType_SearchAheadComponent)), i1.ɵdid(4308992, null, 0, i7.SearchAheadComponent, [i8.BrokerDispatcherService], null, null)], (_ck, _v) => {
        _ck(_v, 1, 0);
    }, null);
}
export const SearchAheadComponentNgFactory = i1.ɵccf('search-ahead', i7.SearchAheadComponent, View_SearchAheadComponent_Host_0, {}, {}, []);
