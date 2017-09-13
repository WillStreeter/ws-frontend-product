import * as i0 from './grid.create.row.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/flex-layout/flexbox/api/layout';
import * as i3 from '@angular/flex-layout/media-query/media-monitor';
import * as i4 from './grid.create.row.component';
import * as i5 from '@angular/forms';
import * as i6 from '@angular/flex-layout/flexbox/api/flex';
import * as i7 from '@angular/flex-layout/flexbox/api/layout-wrap';
import * as i8 from '../../../../node_modules/@angular/material/typings/index.ngfactory';
import * as i9 from '@angular/material';
const styles_GridCreateRowComponent = [i0.styles];
export const RenderType_GridCreateRowComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_GridCreateRowComponent, data: {} });
export function View_GridCreateRowComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 109, 'div', [['class', 'grid-create-row'], ['fxLayout', 'row']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer], { layout: [0,
                'layout'] }, null), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(),
            i1.ɵeld(0, null, null, 105, 'form', [['novalidate', '']], [[2, 'ng-untouched',
                    null], [2, 'ng-touched', null], [2, 'ng-pristine', null],
                [2, 'ng-dirty', null], [2, 'ng-valid', null], [2, 'ng-invalid',
                    null], [2, 'ng-pending', null]], [[null, 'ngSubmit'],
                [null, 'submit'], [null, 'reset']], (_v, en, $event) => {
                var ad = true;
                var _co = _v.component;
                if (('submit' === en)) {
                    const pd_0 = (i1.ɵnov(_v, 6).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                }
                if (('reset' === en)) {
                    const pd_1 = (i1.ɵnov(_v, 6).onReset() !== false);
                    ad = (pd_1 && ad);
                }
                if (('ngSubmit' === en)) {
                    const pd_2 = (_co.publishGarmentAdd(i1.ɵnov(_v, 6)) !== false);
                    ad = (pd_2 && ad);
                }
                return ad;
            }, null, null)), i1.ɵdid(16384, null, 0, i5.ɵbf, [], null, null), i1.ɵdid(16384, [['f', 4]], 0, i5.NgForm, [[8, null],
            [8, null]], null, { ngSubmit: 'ngSubmit' }), i1.ɵprd(2048, null, i5.ControlContainer, null, [i5.NgForm]), i1.ɵdid(16384, null, 0, i5.NgControlStatusGroup, [i5.ControlContainer], null, null), (_l()(),
            i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵeld(0, null, null, 14, 'div', [['fxFlex', '10'], ['fxLayout', 'column']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer], { layout: [0, 'layout'] }, null),
        i1.ɵdid(737280, null, 0, i6.FlexDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer, [3, i2.LayoutDirective], [3, i7.LayoutWrapDirective]], { flex: [0,
                'flex'] }, null), (_l()(), i1.ɵted(null, ['\n         '])),
        (_l()(), i1.ɵeld(0, null, null, 9, 'button', [['class', 'exit-add mat-icon-button'],
            ['md-icon-button', ''], ['type', 'button']], [[8, 'disabled', 0]], [[null,
                'click']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                const pd_0 = (_co.exitAddRow() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i8.View_MdButton_0, i8.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i9.MdPrefixRejector, [[2, i9.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(180224, null, 0, i9.MdButton, [i1.ElementRef,
            i1.Renderer2, i9.Platform, i9.FocusOriginMonitor], null, null),
        i1.ɵdid(16384, null, 0, i9.MdIconButtonCssMatStyler, [], null, null), (_l()(), i1.ɵted(0, ['\n             '])), (_l()(), i1.ɵeld(0, null, 0, 3, 'md-icon', [['aria-label', 'remove add row'], ['class', 'md-24'],
            ['role', 'img']], [[2, 'mat-icon', null]], null, null, i8.View_MdIcon_0, i8.RenderType_MdIcon)), i1.ɵdid(16384, null, 0, i9.MdPrefixRejector, [[2, i9.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(9027584, null, 0, i9.MdIcon, [i1.ElementRef, i1.Renderer2, i9.MdIconRegistry], { hostAriaLabel: [0, 'hostAriaLabel'] }, null), (_l()(), i1.ɵted(0, ['clear'])),
        (_l()(), i1.ɵted(0, ['\n         '])), (_l()(), i1.ɵted(null, ['\n     '])),
        (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵeld(0, null, null, 10, 'div', [['class', 'garment-name'], ['fxFlex', '40'], ['fxLayout',
                'column']], null, null, null, null, null)),
        i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer], { layout: [0, 'layout'] }, null), i1.ɵdid(737280, null, 0, i6.FlexDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer, [3, i2.LayoutDirective],
            [3, i7.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), (_l()(),
            i1.ɵted(null, ['\n         '])), (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['id', 'garmentName'], ['name', 'garmentName'], ['ngModel',
                ''], ['placeholder', 'Garment Name']], [[2, 'ng-untouched', null],
            [2, 'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty',
                null], [2, 'ng-valid', null], [2, 'ng-invalid', null],
            [2, 'ng-pending', null]], [[null, 'input'], [null,
                'blur'], [null, 'compositionstart'], [null, 'compositionend']], (_v, en, $event) => {
            var ad = true;
            if (('input' === en)) {
                const pd_0 = (i1.ɵnov(_v, 31)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                const pd_1 = (i1.ɵnov(_v, 31).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                const pd_2 = (i1.ɵnov(_v, 31)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                const pd_3 = (i1.ɵnov(_v, 31)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i5.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i5.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i5.NG_VALUE_ACCESSOR, (p0_0) => {
            return [p0_0];
        }, [i5.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i5.NgModel, [[2, i5.ControlContainer],
            [8, null], [8, null], [2, i5.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, null), i1.ɵprd(2048, null, i5.NgControl, null, [i5.NgModel]), i1.ɵdid(16384, null, 0, i5.NgControlStatus, [i5.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵeld(0, null, null, 33, 'div', [['class', 'garment-type'], ['fxFlex',
                '20'], ['fxLayout', 'column']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer], { layout: [0, 'layout'] }, null),
        i1.ɵdid(737280, null, 0, i6.FlexDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer, [3, i2.LayoutDirective], [3, i7.LayoutWrapDirective]], { flex: [0,
                'flex'] }, null), (_l()(), i1.ɵted(null, ['\n                 '])),
        (_l()(), i1.ɵeld(0, null, null, 28, 'div', [['class', 'garment-toolbar-type'],
            ['fxFlex', '20'], ['fxLayout', 'column']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer], { layout: [0, 'layout'] }, null),
        i1.ɵdid(737280, null, 0, i6.FlexDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer, [3, i2.LayoutDirective], [3, i7.LayoutWrapDirective]], { flex: [0,
                'flex'] }, null), (_l()(), i1.ɵted(null, ['\n                    '])),
        (_l()(), i1.ɵeld(16777216, null, null, 5, 'button', [['aria-haspopup',
                'true'], ['class', 'type-btn-trigger mat-button'], ['md-button', ''], ['type',
                'button']], [[8, 'disabled', 0]], [[null, 'mousedown'], [null,
                'click']], (_v, en, $event) => {
            var ad = true;
            if (('mousedown' === en)) {
                const pd_0 = (i1.ɵnov(_v, 50)._handleMousedown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                const pd_1 = (i1.ɵnov(_v, 50).toggleMenu() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i8.View_MdButton_0, i8.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i9.MdPrefixRejector, [[2, i9.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(180224, null, 0, i9.MdButton, [i1.ElementRef,
            i1.Renderer2, i9.Platform, i9.FocusOriginMonitor], null, null),
        i1.ɵdid(16384, null, 0, i9.MdButtonCssMatStyler, [], null, null), i1.ɵdid(4341760, null, 0, i9.MdMenuTrigger, [i9.Overlay,
            i1.ElementRef, i1.ViewContainerRef, [2, i9.Dir], i9.ScrollDispatcher], { menu: [0,
                'menu'] }, null), (_l()(), i1.ɵted(0, ['\n                         ',
            '\n                    '])), (_l()(), i1.ɵted(null, ['\n                    '])),
        (_l()(), i1.ɵeld(0, null, null, 16, 'md-menu', [['role', 'menu']], null, null, null, i8.View_MdMenu_0, i8.RenderType_MdMenu)),
        i1.ɵdid(16384, null, 0, i9.MdPrefixRejector, [[2, i9.MATERIAL_COMPATIBILITY_MODE],
            i1.ElementRef], null, null), i1.ɵdid(1228800, [['type', 4]], 1, i9.MdMenu, [], null, null), i1.ɵqud(603979776, 1, { items: 1 }), (_l()(), i1.ɵted(0, ['\n                      '])), (_l()(), i1.ɵeld(0, null, 0, 2, 'button', [['md-menu-item', ''], ['role', 'menuitem'], ['type',
                'button']], [[2, 'mat-menu-item', null], [1, 'tabindex', 0], [1, 'aria-disabled',
                0], [1, 'disabled', 0]], [[null, 'click']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                const pd_0 = (i1.ɵnov(_v, 59)._checkDisabled($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                const pd_1 = (_co.updateGarmentType('Physical') !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i8.View_MdMenuItem_0, i8.RenderType_MdMenuItem)), i1.ɵdid(49152, [[1, 4]], 0, i9.MdMenuItem, [i1.ElementRef], null, null), (_l()(), i1.ɵted(0, ['Physical'])), (_l()(), i1.ɵted(0, ['\n                      '])), (_l()(),
            i1.ɵeld(0, null, 0, 2, 'button', [['md-menu-item', ''], ['role', 'menuitem'],
                ['type', 'button']], [[2, 'mat-menu-item', null], [1, 'tabindex',
                    0], [1, 'aria-disabled', 0], [1, 'disabled', 0]], [[null, 'click']], (_v, en, $event) => {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    const pd_0 = (i1.ɵnov(_v, 63)._checkDisabled($event) !== false);
                    ad = (pd_0 && ad);
                }
                if (('click' === en)) {
                    const pd_1 = (_co.updateGarmentType('Digital') !== false);
                    ad = (pd_1 && ad);
                }
                return ad;
            }, i8.View_MdMenuItem_0, i8.RenderType_MdMenuItem)), i1.ɵdid(49152, [[1,
                4]], 0, i9.MdMenuItem, [i1.ElementRef], null, null), (_l()(),
            i1.ɵted(0, ['Digital'])), (_l()(), i1.ɵted(0, ['\n                      '])),
        (_l()(), i1.ɵeld(0, null, 0, 2, 'button', [['md-menu-item', ''], ['role', 'menuitem'],
            ['type', 'button']], [[2, 'mat-menu-item', null], [1, 'tabindex', 0], [1,
                'aria-disabled', 0], [1, 'disabled', 0]], [[null, 'click']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                const pd_0 = (i1.ɵnov(_v, 67)._checkDisabled($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                const pd_1 = (_co.updateGarmentType('Service') !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i8.View_MdMenuItem_0, i8.RenderType_MdMenuItem)), i1.ɵdid(49152, [[1, 4]], 0, i9.MdMenuItem, [i1.ElementRef], null, null), (_l()(), i1.ɵted(0, ['Service'])),
        (_l()(), i1.ɵted(0, ['\n                    '])), (_l()(), i1.ɵted(null, ['\n                 '])), (_l()(), i1.ɵted(null, ['\n     '])), (_l()(),
            i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵeld(0, null, null, 10, 'div', [['class', 'garment-price'], ['fxFlex', '15'], ['fxLayout', 'column']], null, null, null, null, null)),
        i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer], { layout: [0, 'layout'] }, null), i1.ɵdid(737280, null, 0, i6.FlexDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer, [3, i2.LayoutDirective],
            [3, i7.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), (_l()(),
            i1.ɵted(null, ['\n         '])), (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['id', 'garmentPrice'], ['name', 'garmentPrice'], ['ngModel',
                ''], ['placeholder', 'price']], [[2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'input'], [null, 'blur'],
            [null, 'compositionstart'], [null, 'compositionend']], (_v, en, $event) => {
            var ad = true;
            if (('input' === en)) {
                const pd_0 = (i1.ɵnov(_v, 78)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                const pd_1 = (i1.ɵnov(_v, 78).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                const pd_2 = (i1.ɵnov(_v, 78)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                const pd_3 = (i1.ɵnov(_v, 78)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i5.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i5.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i5.NG_VALUE_ACCESSOR, (p0_0) => {
            return [p0_0];
        }, [i5.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i5.NgModel, [[2, i5.ControlContainer],
            [8, null], [8, null], [2, i5.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, null), i1.ɵprd(2048, null, i5.NgControl, null, [i5.NgModel]), i1.ɵdid(16384, null, 0, i5.NgControlStatus, [i5.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵeld(0, null, null, 10, 'div', [['class', 'garment-inventory'], ['fxFlex',
                '10'], ['fxLayout', 'column']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer], { layout: [0, 'layout'] }, null),
        i1.ɵdid(737280, null, 0, i6.FlexDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer, [3, i2.LayoutDirective], [3, i7.LayoutWrapDirective]], { flex: [0,
                'flex'] }, null), (_l()(), i1.ɵted(null, ['\n         '])),
        (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['id', 'garmentInventory'],
            ['name', 'garmentInventory'], ['ngModel', ''], ['placeholder', 'stock']], [[2,
                'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null],
            [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'input'], [null, 'blur'], [null, 'compositionstart'], [null,
                'compositionend']], (_v, en, $event) => {
            var ad = true;
            if (('input' === en)) {
                const pd_0 = (i1.ɵnov(_v, 90)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                const pd_1 = (i1.ɵnov(_v, 90).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                const pd_2 = (i1.ɵnov(_v, 90)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                const pd_3 = (i1.ɵnov(_v, 90)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i5.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i5.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i5.NG_VALUE_ACCESSOR, (p0_0) => {
            return [p0_0];
        }, [i5.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i5.NgModel, [[2, i5.ControlContainer],
            [8, null], [8, null], [2, i5.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, null), i1.ɵprd(2048, null, i5.NgControl, null, [i5.NgModel]), i1.ɵdid(16384, null, 0, i5.NgControlStatus, [i5.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵted(null, ['\n\n     '])), (_l()(), i1.ɵeld(0, null, null, 11, 'div', [['fxFlex', '5'], ['fxLayout', 'column']], null, null, null, null, null)),
        i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer], { layout: [0, 'layout'] }, null), i1.ɵdid(737280, null, 0, i6.FlexDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer, [3, i2.LayoutDirective],
            [3, i7.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), (_l()(),
            i1.ɵted(null, ['\n                '])), (_l()(), i1.ɵeld(0, null, null, 6, 'button', [['class', 'save-button'], ['type', 'submit']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n                       '])), (_l()(), i1.ɵeld(0, null, null, 3, 'md-icon', [['aria-label', 'save changes'], ['class', 'save-icon'], ['role',
                'img']], [[2, 'mat-icon', null]], null, null, i8.View_MdIcon_0, i8.RenderType_MdIcon)), i1.ɵdid(16384, null, 0, i9.MdPrefixRejector, [[2, i9.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(9027584, null, 0, i9.MdIcon, [i1.ElementRef, i1.Renderer2, i9.MdIconRegistry], { hostAriaLabel: [0, 'hostAriaLabel'] }, null), (_l()(), i1.ɵted(0, ['save'])),
        (_l()(), i1.ɵted(null, ['\n                '])), (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n']))], (_ck, _v) => {
        const currVal_0 = 'row';
        _ck(_v, 2, 0, currVal_0);
        const currVal_8 = 'column';
        _ck(_v, 11, 0, currVal_8);
        const currVal_9 = '10';
        _ck(_v, 12, 0, currVal_9);
        const currVal_12 = 'remove add row';
        _ck(_v, 21, 0, currVal_12);
        const currVal_13 = 'column';
        _ck(_v, 27, 0, currVal_13);
        const currVal_14 = '40';
        _ck(_v, 28, 0, currVal_14);
        const currVal_22 = 'garmentName';
        const currVal_23 = '';
        _ck(_v, 33, 0, currVal_22, currVal_23);
        const currVal_24 = 'column';
        _ck(_v, 39, 0, currVal_24);
        const currVal_25 = '20';
        _ck(_v, 40, 0, currVal_25);
        const currVal_26 = 'column';
        _ck(_v, 43, 0, currVal_26);
        const currVal_27 = '20';
        _ck(_v, 44, 0, currVal_27);
        const currVal_29 = i1.ɵnov(_v, 55);
        _ck(_v, 50, 0, currVal_29);
        const currVal_43 = 'column';
        _ck(_v, 74, 0, currVal_43);
        const currVal_44 = '15';
        _ck(_v, 75, 0, currVal_44);
        const currVal_52 = 'garmentPrice';
        const currVal_53 = '';
        _ck(_v, 80, 0, currVal_52, currVal_53);
        const currVal_54 = 'column';
        _ck(_v, 86, 0, currVal_54);
        const currVal_55 = '10';
        _ck(_v, 87, 0, currVal_55);
        const currVal_63 = 'garmentInventory';
        const currVal_64 = '';
        _ck(_v, 92, 0, currVal_63, currVal_64);
        const currVal_65 = 'column';
        _ck(_v, 98, 0, currVal_65);
        const currVal_66 = '5';
        _ck(_v, 99, 0, currVal_66);
        const currVal_68 = 'save changes';
        _ck(_v, 105, 0, currVal_68);
    }, (_ck, _v) => {
        var _co = _v.component;
        const currVal_1 = i1.ɵnov(_v, 8).ngClassUntouched;
        const currVal_2 = i1.ɵnov(_v, 8).ngClassTouched;
        const currVal_3 = i1.ɵnov(_v, 8).ngClassPristine;
        const currVal_4 = i1.ɵnov(_v, 8).ngClassDirty;
        const currVal_5 = i1.ɵnov(_v, 8).ngClassValid;
        const currVal_6 = i1.ɵnov(_v, 8).ngClassInvalid;
        const currVal_7 = i1.ɵnov(_v, 8).ngClassPending;
        _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
        const currVal_10 = (i1.ɵnov(_v, 16).disabled || null);
        _ck(_v, 14, 0, currVal_10);
        const currVal_11 = true;
        _ck(_v, 19, 0, currVal_11);
        const currVal_15 = i1.ɵnov(_v, 35).ngClassUntouched;
        const currVal_16 = i1.ɵnov(_v, 35).ngClassTouched;
        const currVal_17 = i1.ɵnov(_v, 35).ngClassPristine;
        const currVal_18 = i1.ɵnov(_v, 35).ngClassDirty;
        const currVal_19 = i1.ɵnov(_v, 35).ngClassValid;
        const currVal_20 = i1.ɵnov(_v, 35).ngClassInvalid;
        const currVal_21 = i1.ɵnov(_v, 35).ngClassPending;
        _ck(_v, 30, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21);
        const currVal_28 = (i1.ɵnov(_v, 48).disabled || null);
        _ck(_v, 46, 0, currVal_28);
        const currVal_30 = _co.updatedType;
        _ck(_v, 51, 0, currVal_30);
        const currVal_31 = true;
        const currVal_32 = i1.ɵnov(_v, 59)._getTabIndex();
        const currVal_33 = i1.ɵnov(_v, 59).disabled.toString();
        const currVal_34 = i1.ɵnov(_v, 59)._getDisabledAttr();
        _ck(_v, 58, 0, currVal_31, currVal_32, currVal_33, currVal_34);
        const currVal_35 = true;
        const currVal_36 = i1.ɵnov(_v, 63)._getTabIndex();
        const currVal_37 = i1.ɵnov(_v, 63).disabled.toString();
        const currVal_38 = i1.ɵnov(_v, 63)._getDisabledAttr();
        _ck(_v, 62, 0, currVal_35, currVal_36, currVal_37, currVal_38);
        const currVal_39 = true;
        const currVal_40 = i1.ɵnov(_v, 67)._getTabIndex();
        const currVal_41 = i1.ɵnov(_v, 67).disabled.toString();
        const currVal_42 = i1.ɵnov(_v, 67)._getDisabledAttr();
        _ck(_v, 66, 0, currVal_39, currVal_40, currVal_41, currVal_42);
        const currVal_45 = i1.ɵnov(_v, 82).ngClassUntouched;
        const currVal_46 = i1.ɵnov(_v, 82).ngClassTouched;
        const currVal_47 = i1.ɵnov(_v, 82).ngClassPristine;
        const currVal_48 = i1.ɵnov(_v, 82).ngClassDirty;
        const currVal_49 = i1.ɵnov(_v, 82).ngClassValid;
        const currVal_50 = i1.ɵnov(_v, 82).ngClassInvalid;
        const currVal_51 = i1.ɵnov(_v, 82).ngClassPending;
        _ck(_v, 77, 0, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51);
        const currVal_56 = i1.ɵnov(_v, 94).ngClassUntouched;
        const currVal_57 = i1.ɵnov(_v, 94).ngClassTouched;
        const currVal_58 = i1.ɵnov(_v, 94).ngClassPristine;
        const currVal_59 = i1.ɵnov(_v, 94).ngClassDirty;
        const currVal_60 = i1.ɵnov(_v, 94).ngClassValid;
        const currVal_61 = i1.ɵnov(_v, 94).ngClassInvalid;
        const currVal_62 = i1.ɵnov(_v, 94).ngClassPending;
        _ck(_v, 89, 0, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62);
        const currVal_67 = true;
        _ck(_v, 103, 0, currVal_67);
    });
}
export function View_GridCreateRowComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'grid-create-row', [], null, null, null, View_GridCreateRowComponent_0, RenderType_GridCreateRowComponent)), i1.ɵdid(49152, null, 0, i4.GridCreateRowComponent, [], null, null)], null, null);
}
export const GridCreateRowComponentNgFactory = i1.ɵccf('grid-create-row', i4.GridCreateRowComponent, View_GridCreateRowComponent_Host_0, {}, { addGarmentModel: 'addGarmentModel',
    removeAddRow: 'removeAddRow' }, []);
