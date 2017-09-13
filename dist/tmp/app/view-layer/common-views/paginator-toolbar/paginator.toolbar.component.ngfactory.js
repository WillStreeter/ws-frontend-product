import * as i0 from './paginator.toolbar.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../../node_modules/@angular/material/typings/index.ngfactory';
import * as i3 from '@angular/material';
import * as i4 from '@angular/flex-layout/flexbox/api/layout';
import * as i5 from '@angular/flex-layout/media-query/media-monitor';
import * as i6 from '@angular/flex-layout/flexbox/api/flex';
import * as i7 from '@angular/flex-layout/flexbox/api/layout-wrap';
import * as i8 from '@angular/common';
import * as i9 from './paginator.toolbar.component';
import * as i10 from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
const styles_PaginatorToolbarComponent = [i0.styles];
export const RenderType_PaginatorToolbarComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_PaginatorToolbarComponent, data: {} });
function View_PaginatorToolbarComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n             1  page of: ', '\n         ']))], null, (_ck, _v) => {
        var _co = _v.component;
        const currVal_0 = _co.totalNumberProducts;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_PaginatorToolbarComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(16777216, null, null, 8, 'button', [['aria-haspopup', 'true'], ['class', 'per-page-trigger mat-button'], ['md-button',
                '']], [[8, 'disabled', 0]], [[null, 'mousedown'], [null, 'click']], (_v, en, $event) => {
            var ad = true;
            if (('mousedown' === en)) {
                const pd_0 = (i1.ɵnov(_v, 4)._handleMousedown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                const pd_1 = (i1.ɵnov(_v, 4).toggleMenu() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdButton_0, i2.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(180224, null, 0, i3.MdButton, [i1.ElementRef, i1.Renderer2,
            i3.Platform, i3.FocusOriginMonitor], null, null), i1.ɵdid(16384, null, 0, i3.MdButtonCssMatStyler, [], null, null),
        i1.ɵdid(4341760, null, 0, i3.MdMenuTrigger, [i3.Overlay, i1.ElementRef, i1.ViewContainerRef,
            [2, i3.Dir], i3.ScrollDispatcher], { menu: [0, 'menu'] }, null), (_l()(),
            i1.ɵted(0, ['\n             items per page: ', '\n             '])), (_l()(),
            i1.ɵeld(0, null, 0, 1, 'i', [['class', 'material-icons']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['arrow_drop_down'])), (_l()(), i1.ɵted(0, ['\n        '])), (_l()(), i1.ɵand(0, null, null, 0))], (_ck, _v) => {
        const currVal_1 = i1.ɵnov(_v.parent, 20);
        _ck(_v, 4, 0, currVal_1);
    }, (_ck, _v) => {
        var _co = _v.component;
        const currVal_0 = (i1.ɵnov(_v, 2).disabled || null);
        _ck(_v, 0, 0, currVal_0);
        const currVal_2 = _co.viewablePerPage;
        _ck(_v, 5, 0, currVal_2);
    });
}
function View_PaginatorToolbarComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 2, 'button', [['md-menu-item',
                ''], ['role', 'menuitem']], [[2, 'mat-menu-item', null], [1, 'tabindex', 0],
            [1, 'aria-disabled', 0], [1, 'disabled', 0]], [[null, 'click']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                const pd_0 = (i1.ɵnov(_v, 1)._checkDisabled($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                const pd_1 = (_co.goToPage((_v.context.$implicit + 1)) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdMenuItem_0, i2.RenderType_MdMenuItem)), i1.ɵdid(49152, [[2, 4]], 0, i3.MdMenuItem, [i1.ElementRef], { disabled: [0, 'disabled'] }, null), (_l()(), i1.ɵted(0, [' ',
            '']))], (_ck, _v) => {
        var _co = _v.component;
        const currVal_4 = (_co.onLastPage && ((_v.context.$implicit + 1) == _co.totalNumberOfPages));
        _ck(_v, 1, 0, currVal_4);
    }, (_ck, _v) => {
        const currVal_0 = true;
        const currVal_1 = i1.ɵnov(_v, 1)._getTabIndex();
        const currVal_2 = i1.ɵnov(_v, 1).disabled.toString();
        const currVal_3 = i1.ɵnov(_v, 1)._getDisabledAttr();
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        const currVal_5 = (_v.context.$implicit + 1);
        _ck(_v, 2, 0, currVal_5);
    });
}
export function View_PaginatorToolbarComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 83, 'div', [['class',
                'paginator-toolbar'], ['fxFlex', '100'], ['fxLayout', 'row']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i4.LayoutDirective, [i5.MediaMonitor, i1.ElementRef, i1.Renderer], { layout: [0, 'layout'] }, null),
        i1.ɵdid(737280, null, 0, i6.FlexDirective, [i5.MediaMonitor, i1.ElementRef,
            i1.Renderer, [3, i4.LayoutDirective], [3, i7.LayoutWrapDirective]], { flex: [0,
                'flex'] }, null), (_l()(), i1.ɵted(null, ['\n   '])), (_l()(),
            i1.ɵeld(0, null, null, 32, 'div', [['fxFlex', '30'], ['fxLayout',
                    'column']], null, null, null, null, null)),
        i1.ɵdid(737280, null, 0, i4.LayoutDirective, [i5.MediaMonitor, i1.ElementRef,
            i1.Renderer], { layout: [0, 'layout'] }, null), i1.ɵdid(737280, null, 0, i6.FlexDirective, [i5.MediaMonitor, i1.ElementRef, i1.Renderer, [3, i4.LayoutDirective],
            [3, i7.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), (_l()(),
            i1.ɵted(null, ['\n       '])), (_l()(), i1.ɵeld(0, null, null, 27, 'div', [['class', 'garment-toolbar-type'], ['fxFlex', '20'], ['fxLayout', 'column']], null, null, null, null, null)),
        i1.ɵdid(737280, null, 0, i4.LayoutDirective, [i5.MediaMonitor, i1.ElementRef,
            i1.Renderer], { layout: [0, 'layout'] }, null), i1.ɵdid(737280, null, 0, i6.FlexDirective, [i5.MediaMonitor, i1.ElementRef, i1.Renderer, [3, i4.LayoutDirective],
            [3, i7.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), (_l()(),
            i1.ɵted(null, ['\n         '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginatorToolbarComponent_1)), i1.ɵdid(16384, null, 0, i8.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginatorToolbarComponent_2)),
        i1.ɵdid(16384, null, 0, i8.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(),
            i1.ɵeld(0, null, null, 16, 'md-menu', [['role', 'menu']], null, null, null, i2.View_MdMenu_0, i2.RenderType_MdMenu)),
        i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE],
            i1.ElementRef], null, null), i1.ɵdid(1228800, [['ppItems',
                4]], 1, i3.MdMenu, [], null, null), i1.ɵqud(603979776, 1, { items: 1 }), (_l()(), i1.ɵted(0, ['\n          '])), (_l()(), i1.ɵeld(0, null, 0, 2, 'button', [['md-menu-item', ''], ['role', 'menuitem']], [[2, 'mat-menu-item',
                null], [1, 'tabindex', 0], [1, 'aria-disabled', 0], [1, 'disabled',
                0]], [[null, 'click']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                const pd_0 = (i1.ɵnov(_v, 24)._checkDisabled($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                const pd_1 = (_co.setViewableCount(5) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdMenuItem_0, i2.RenderType_MdMenuItem)), i1.ɵdid(49152, [[1, 4]], 0, i3.MdMenuItem, [i1.ElementRef], { disabled: [0, 'disabled'] }, null),
        (_l()(), i1.ɵted(0, ['5'])), (_l()(), i1.ɵted(0, ['\n          '])), (_l()(), i1.ɵeld(0, null, 0, 2, 'button', [['md-menu-item', ''], ['role', 'menuitem']], [[2,
                'mat-menu-item', null], [1, 'tabindex', 0], [1, 'aria-disabled', 0],
            [1, 'disabled', 0]], [[null, 'click']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                const pd_0 = (i1.ɵnov(_v, 28)._checkDisabled($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                const pd_1 = (_co.setViewableCount(10) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdMenuItem_0, i2.RenderType_MdMenuItem)), i1.ɵdid(49152, [[1, 4]], 0, i3.MdMenuItem, [i1.ElementRef], { disabled: [0, 'disabled'] }, null),
        (_l()(), i1.ɵted(0, ['10'])), (_l()(), i1.ɵted(0, ['\n          '])), (_l()(), i1.ɵeld(0, null, 0, 2, 'button', [['md-menu-item', ''], ['role', 'menuitem']], [[2,
                'mat-menu-item', null], [1, 'tabindex', 0], [1, 'aria-disabled', 0],
            [1, 'disabled', 0]], [[null, 'click']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                const pd_0 = (i1.ɵnov(_v, 32)._checkDisabled($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                const pd_1 = (_co.setViewableCount(15) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdMenuItem_0, i2.RenderType_MdMenuItem)), i1.ɵdid(49152, [[1, 4]], 0, i3.MdMenuItem, [i1.ElementRef], { disabled: [0, 'disabled'] }, null),
        (_l()(), i1.ɵted(0, ['15'])), (_l()(), i1.ɵted(0, ['\n        '])), (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵted(null, ['\n   '])), (_l()(), i1.ɵted(null, ['\n   '])), (_l()(), i1.ɵeld(0, null, null, 44, 'div', [['fxFlex',
                '70'], ['fxLayout', 'column']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i4.LayoutDirective, [i5.MediaMonitor,
            i1.ElementRef, i1.Renderer], { layout: [0, 'layout'] }, null), i1.ɵdid(737280, null, 0, i6.FlexDirective, [i5.MediaMonitor, i1.ElementRef, i1.Renderer,
            [3, i4.LayoutDirective], [3, i7.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵeld(0, null, null, 39, 'div', [['class', 'pp-btn-group'], ['fxLayout',
                'row']], null, null, null, null, null)),
        i1.ɵdid(737280, null, 0, i4.LayoutDirective, [i5.MediaMonitor, i1.ElementRef,
            i1.Renderer], { layout: [0, 'layout'] }, null), (_l()(), i1.ɵted(null, ['\n          '])), (_l()(), i1.ɵeld(0, null, null, 7, 'button', [['class', 'page-back mat-icon-button'], ['md-icon-button', '']], [[8, 'disabled',
                0]], [[null, 'click']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                const pd_0 = (_co.goToPage((_co.currentPage - 1)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i2.View_MdButton_0, i2.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(180224, null, 0, i3.MdButton, [i1.ElementRef, i1.Renderer2, i3.Platform, i3.FocusOriginMonitor], { disabled: [0,
                'disabled'] }, null), i1.ɵdid(16384, null, 0, i3.MdIconButtonCssMatStyler, [], null, null), (_l()(), i1.ɵted(0, ['\n                 '])),
        (_l()(), i1.ɵeld(0, null, 0, 1, 'i', [['class', 'material-icons']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['chevron_left'])), (_l()(), i1.ɵted(0, ['\n          '])), (_l()(), i1.ɵted(null, ['\n            '])), (_l()(), i1.ɵeld(16777216, null, null, 8, 'button', [['aria-haspopup', 'true'], ['class', 'pages-trigger mat-button'],
            ['md-button', '']], [[8, 'disabled', 0]], [[null, 'mousedown'], [null,
                'click']], (_v, en, $event) => {
            var ad = true;
            if (('mousedown' === en)) {
                const pd_0 = (i1.ɵnov(_v, 58)._handleMousedown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                const pd_1 = (i1.ɵnov(_v, 58).toggleMenu() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i2.View_MdButton_0, i2.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(180224, null, 0, i3.MdButton, [i1.ElementRef, i1.Renderer2, i3.Platform, i3.FocusOriginMonitor], null, null), i1.ɵdid(16384, null, 0, i3.MdButtonCssMatStyler, [], null, null), i1.ɵdid(4341760, null, 0, i3.MdMenuTrigger, [i3.Overlay, i1.ElementRef, i1.ViewContainerRef, [2, i3.Dir], i3.ScrollDispatcher], { menu: [0, 'menu'] }, null), (_l()(), i1.ɵted(0, ['\n                  ',
            '\n                 '])), (_l()(), i1.ɵeld(0, null, 0, 1, 'i', [['class',
                'material-icons']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['arrow_drop_down'])), (_l()(),
            i1.ɵted(0, ['\n            '])), (_l()(), i1.ɵted(null, ['\n            '])),
        (_l()(), i1.ɵeld(0, null, null, 7, 'md-menu', [['role', 'menu']], null, null, null, i2.View_MdMenu_0, i2.RenderType_MdMenu)),
        i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE],
            i1.ElementRef], null, null), i1.ɵdid(1228800, [['pages', 4]], 1, i3.MdMenu, [], null, null), i1.ɵqud(603979776, 2, { items: 1 }), (_l()(), i1.ɵted(0, ['\n              '])), (_l()(), i1.ɵand(16777216, null, 0, 1, null, View_PaginatorToolbarComponent_3)), i1.ɵdid(802816, null, 0, i8.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(0, ['\n            '])),
        (_l()(), i1.ɵted(null, ['\n          '])), (_l()(), i1.ɵeld(0, null, null, 7, 'button', [['class', 'page-ahead mat-icon-button'], ['md-icon-button',
                '']], [[8, 'disabled', 0]], [[null, 'click']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                const pd_0 = (_co.goToPage((_co.currentPage + 1)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i2.View_MdButton_0, i2.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i3.MdPrefixRejector, [[2, i3.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(180224, null, 0, i3.MdButton, [i1.ElementRef, i1.Renderer2, i3.Platform, i3.FocusOriginMonitor], { disabled: [0,
                'disabled'] }, null), i1.ɵdid(16384, null, 0, i3.MdIconButtonCssMatStyler, [], null, null), (_l()(), i1.ɵted(0, ['\n                 '])),
        (_l()(), i1.ɵeld(0, null, 0, 1, 'i', [['class', 'material-icons']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['chevron_right'])), (_l()(), i1.ɵted(0, ['\n          '])), (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵted(null, ['\n   '])), (_l()(), i1.ɵted(null, ['\n']))], (_ck, _v) => {
        var _co = _v.component;
        const currVal_0 = 'row';
        _ck(_v, 1, 0, currVal_0);
        const currVal_1 = '100';
        _ck(_v, 2, 0, currVal_1);
        const currVal_2 = 'column';
        _ck(_v, 5, 0, currVal_2);
        const currVal_3 = '30';
        _ck(_v, 6, 0, currVal_3);
        const currVal_4 = 'column';
        _ck(_v, 9, 0, currVal_4);
        const currVal_5 = '20';
        _ck(_v, 10, 0, currVal_5);
        const currVal_6 = (_co.disabled5 === true);
        _ck(_v, 13, 0, currVal_6);
        const currVal_7 = (_co.disabled5 === false);
        _ck(_v, 16, 0, currVal_7);
        const currVal_12 = _co.disabled5;
        _ck(_v, 24, 0, currVal_12);
        const currVal_17 = _co.disabled10;
        _ck(_v, 28, 0, currVal_17);
        const currVal_22 = _co.disabled15;
        _ck(_v, 32, 0, currVal_22);
        const currVal_23 = 'column';
        _ck(_v, 39, 0, currVal_23);
        const currVal_24 = '70';
        _ck(_v, 40, 0, currVal_24);
        const currVal_25 = 'row';
        _ck(_v, 43, 0, currVal_25);
        const currVal_27 = (_co.currentPage === 1);
        _ck(_v, 47, 0, currVal_27);
        const currVal_29 = i1.ɵnov(_v, 66);
        _ck(_v, 58, 0, currVal_29);
        const currVal_31 = _co.pageList;
        _ck(_v, 70, 0, currVal_31);
        const currVal_33 = _co.onLastPage;
        _ck(_v, 75, 0, currVal_33);
    }, (_ck, _v) => {
        var _co = _v.component;
        const currVal_8 = true;
        const currVal_9 = i1.ɵnov(_v, 24)._getTabIndex();
        const currVal_10 = i1.ɵnov(_v, 24).disabled.toString();
        const currVal_11 = i1.ɵnov(_v, 24)._getDisabledAttr();
        _ck(_v, 23, 0, currVal_8, currVal_9, currVal_10, currVal_11);
        const currVal_13 = true;
        const currVal_14 = i1.ɵnov(_v, 28)._getTabIndex();
        const currVal_15 = i1.ɵnov(_v, 28).disabled.toString();
        const currVal_16 = i1.ɵnov(_v, 28)._getDisabledAttr();
        _ck(_v, 27, 0, currVal_13, currVal_14, currVal_15, currVal_16);
        const currVal_18 = true;
        const currVal_19 = i1.ɵnov(_v, 32)._getTabIndex();
        const currVal_20 = i1.ɵnov(_v, 32).disabled.toString();
        const currVal_21 = i1.ɵnov(_v, 32)._getDisabledAttr();
        _ck(_v, 31, 0, currVal_18, currVal_19, currVal_20, currVal_21);
        const currVal_26 = (i1.ɵnov(_v, 47).disabled || null);
        _ck(_v, 45, 0, currVal_26);
        const currVal_28 = (i1.ɵnov(_v, 56).disabled || null);
        _ck(_v, 54, 0, currVal_28);
        const currVal_30 = _co.currentPage;
        _ck(_v, 59, 0, currVal_30);
        const currVal_32 = (i1.ɵnov(_v, 75).disabled || null);
        _ck(_v, 73, 0, currVal_32);
    });
}
export function View_PaginatorToolbarComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'paginator-toolbar', [], null, null, null, View_PaginatorToolbarComponent_0, RenderType_PaginatorToolbarComponent)), i1.ɵdid(114688, null, 0, i9.PaginatorToolbarComponent, [i10.BrokerDispatcherService], null, null)], (_ck, _v) => {
        _ck(_v, 1, 0);
    }, null);
}
export const PaginatorToolbarComponentNgFactory = i1.ɵccf('paginator-toolbar', i9.PaginatorToolbarComponent, View_PaginatorToolbarComponent_Host_0, {}, {}, []);
