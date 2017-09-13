import * as i0 from './garment.grid.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../grid-create-row/grid.create.row.component.ngfactory';
import * as i3 from '../grid-create-row/grid.create.row.component';
import * as i4 from '../grid-row/grid.row.component.ngfactory';
import * as i5 from '../grid-row/grid.row.component';
import * as i6 from '@angular/flex-layout/flexbox/api/flex-fill';
import * as i7 from '@angular/flex-layout/media-query/media-monitor';
import * as i8 from '@angular/flex-layout/flexbox/api/layout';
import * as i9 from '@angular/flex-layout/flexbox/api/flex';
import * as i10 from '@angular/flex-layout/flexbox/api/layout-wrap';
import * as i11 from './garment.grid.component';
import * as i12 from '../grid-toolbar/grid.toolbar.component.ngfactory';
import * as i13 from '../grid-toolbar/grid.toolbar.component';
import * as i14 from '@angular/common';
import * as i15 from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
const styles_GarmentGridComponent = [i0.styles];
export const RenderType_GarmentGridComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_GarmentGridComponent, data: {} });
function View_GarmentGridComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'grid-create-row', [], null, [[null, 'removeAddRow'], [null, 'addGarmentModel']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('removeAddRow' === en)) {
                const pd_0 = (_co.exitEditState($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('addGarmentModel' === en)) {
                const pd_1 = (_co.garmentModelAdd($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_GridCreateRowComponent_0, i2.RenderType_GridCreateRowComponent)), i1.ɵdid(49152, null, 0, i3.GridCreateRowComponent, [], null, { addGarmentModel: 'addGarmentModel',
            removeAddRow: 'removeAddRow' })], null, null);
}
function View_GarmentGridComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'grid-row', [], null, [[null, 'updateGarmentModel'], [null, 'addRowState']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('updateGarmentModel' === en)) {
                const pd_0 = (_co.garmentModelUpdate($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('addRowState' === en)) {
                const pd_1 = (_co.updateEditRowState($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i4.View_GridRowComponent_0, i4.RenderType_GridRowComponent)), i1.ɵdid(49152, null, 0, i5.GridRowComponent, [], { garment: [0, 'garment'], rowUpdateState: [1,
                'rowUpdateState'] }, { updateGarmentModel: 'updateGarmentModel', addRowState: 'addRowState' })], (_ck, _v) => {
        var _co = _v.component;
        const currVal_0 = _v.context.$implicit;
        const currVal_1 = _co.revealCreateRow;
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, null);
}
export function View_GarmentGridComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 17, 'div', [['class', 'flex-container'], ['fxFlexFill', '']], null, null, null, null, null)), i1.ɵdid(147456, null, 0, i6.FlexFillDirective, [i7.MediaMonitor, i1.ElementRef, i1.Renderer], null, null), (_l()(), i1.ɵted(null, ['\n   '])), (_l()(), i1.ɵeld(0, null, null, 13, 'div', [['class', 'grid-layout'], ['fxFlex', '100'], ['fxLayout',
                'column']], null, null, null, null, null)),
        i1.ɵdid(737280, null, 0, i8.LayoutDirective, [i7.MediaMonitor, i1.ElementRef,
            i1.Renderer], { layout: [0, 'layout'] }, null), i1.ɵdid(737280, null, 0, i9.FlexDirective, [i7.MediaMonitor, i1.ElementRef, i1.Renderer, [3, i8.LayoutDirective],
            [3, i10.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), (_l()(),
            i1.ɵted(null, ['\n       '])), (_l()(), i1.ɵeld(0, null, null, 1, 'grid-toolbar', [], null, [[null, 'updateSort']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('updateSort' === en)) {
                const pd_0 = (_co.toolbarSortUpdate($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i12.View_GridToolbarComponent_0, i12.RenderType_GridToolbarComponent)),
        i1.ɵdid(49152, null, 0, i13.GridToolbarComponent, [], null, { updateSort: 'updateSort' }), (_l()(), i1.ɵted(null, ['\n       '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GarmentGridComponent_1)),
        i1.ɵdid(16384, null, 0, i14.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n       '])),
        (_l()(), i1.ɵand(16777216, null, null, 2, null, View_GarmentGridComponent_2)),
        i1.ɵdid(802816, null, 0, i14.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), i1.ɵpid(131072, i14.AsyncPipe, [i1.ChangeDetectorRef]), (_l()(), i1.ɵted(null, ['\n   '])),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n']))], (_ck, _v) => {
        var _co = _v.component;
        const currVal_0 = 'column';
        _ck(_v, 5, 0, currVal_0);
        const currVal_1 = '100';
        _ck(_v, 6, 0, currVal_1);
        const currVal_2 = (_co.revealCreateRow === true);
        _ck(_v, 12, 0, currVal_2);
        const currVal_3 = i1.ɵunv(_v, 15, 0, i1.ɵnov(_v, 16).transform(_co.currentGarmentSubset$));
        _ck(_v, 15, 0, currVal_3);
    }, null);
}
export function View_GarmentGridComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'garment-grid', [], null, null, null, View_GarmentGridComponent_0, RenderType_GarmentGridComponent)), i1.ɵdid(114688, null, 0, i11.GarmentGridComponent, [i15.BrokerDispatcherService], null, null)], (_ck, _v) => {
        _ck(_v, 1, 0);
    }, null);
}
export const GarmentGridComponentNgFactory = i1.ɵccf('garment-grid', i11.GarmentGridComponent, View_GarmentGridComponent_Host_0, {}, {}, []);
