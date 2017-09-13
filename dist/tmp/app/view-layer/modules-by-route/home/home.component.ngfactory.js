import * as i0 from './home.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/flex-layout/flexbox/api/layout-align';
import * as i3 from '@angular/flex-layout/media-query/media-monitor';
import * as i4 from '@angular/flex-layout/flexbox/api/flex-fill';
import * as i5 from '@angular/flex-layout/flexbox/api/layout';
import * as i6 from '../../common-views/grid-masthead/grid.masthead.component.ngfactory';
import * as i7 from '../../common-views/grid-masthead/grid.masthead.component';
import * as i8 from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
import * as i9 from '../../common-views/search-ahead/search.ahead.component.ngfactory';
import * as i10 from '../../common-views/search-ahead/search.ahead.component';
import * as i11 from '../../common-views/garmentGrid/garment.grid.component.ngfactory';
import * as i12 from '../../common-views/garmentGrid/garment.grid.component';
import * as i13 from '../../common-views/paginator-toolbar/paginator.toolbar.component.ngfactory';
import * as i14 from '../../common-views/paginator-toolbar/paginator.toolbar.component';
import * as i15 from './home.component';
const styles_HomeComponent = [i0.styles];
export const RenderType_HomeComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_HomeComponent, data: {} });
export function View_HomeComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 19, 'div', [['fxFlexFill', ''], ['fxFlexlayout', 'row'], ['fxLayoutAlign',
                'center center']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i2.LayoutAlignDirective, [i3.MediaMonitor,
            i1.ElementRef, i1.Renderer, [8, null]], { align: [0, 'align'] }, null),
        i1.ɵdid(147456, null, 0, i4.FlexFillDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer], null, null), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 14, 'div', [['class',
                'grid-layout'], ['fxLayout', 'column']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i5.LayoutDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer], { layout: [0, 'layout'] }, null),
        (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵeld(0, null, null, 1, 'grid-masthead', [], null, null, null, i6.View_GridMastheadComponent_0, i6.RenderType_GridMastheadComponent)),
        i1.ɵdid(114688, null, 0, i7.GridMastheadComponent, [i8.BrokerDispatcherService], null, null), (_l()(), i1.ɵted(null, ['\n      '])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'search-ahead', [], null, null, null, i9.View_SearchAheadComponent_0, i9.RenderType_SearchAheadComponent)), i1.ɵdid(4308992, null, 0, i10.SearchAheadComponent, [i8.BrokerDispatcherService], null, null), (_l()(), i1.ɵted(null, ['\n       '])), (_l()(), i1.ɵeld(0, null, null, 1, 'garment-grid', [], null, null, null, i11.View_GarmentGridComponent_0, i11.RenderType_GarmentGridComponent)), i1.ɵdid(114688, null, 0, i12.GarmentGridComponent, [i8.BrokerDispatcherService], null, null), (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵeld(0, null, null, 1, 'paginator-toolbar', [], null, null, null, i13.View_PaginatorToolbarComponent_0, i13.RenderType_PaginatorToolbarComponent)), i1.ɵdid(114688, null, 0, i14.PaginatorToolbarComponent, [i8.BrokerDispatcherService], null, null), (_l()(), i1.ɵted(null, ['\n   '])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n']))], (_ck, _v) => {
        const currVal_0 = 'center center';
        _ck(_v, 2, 0, currVal_0);
        const currVal_1 = 'column';
        _ck(_v, 6, 0, currVal_1);
        _ck(_v, 9, 0);
        _ck(_v, 12, 0);
        _ck(_v, 15, 0);
        _ck(_v, 18, 0);
    }, null);
}
export function View_HomeComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'sd-home', [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)),
        i1.ɵdid(49152, null, 0, i15.HomeComponent, [], null, null)], null, null);
}
export const HomeComponentNgFactory = i1.ɵccf('sd-home', i15.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
