import * as i0 from './grid.row.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/flex-layout/flexbox/api/layout';
import * as i3 from '@angular/flex-layout/media-query/media-monitor';
import * as i4 from '@angular/flex-layout/flexbox/api/flex';
import * as i5 from '@angular/flex-layout/flexbox/api/layout-wrap';
import * as i6 from '../../../../node_modules/@angular/material/typings/index.ngfactory';
import * as i7 from '@angular/material';
import * as i8 from '@angular/forms';
import * as i9 from './grid.row.component';
import * as i10 from '@angular/common';
const styles_GridRowComponent = [i0.styles];
export const RenderType_GridRowComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_GridRowComponent, data: {} });
function View_GridRowComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 31, 'div', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n\n                 '])), (_l()(), i1.ɵeld(0, null, null, 28, 'div', [['class', 'garment-toolbar-type'], ['fxFlex', '15'], ['fxLayout',
                'column']], null, null, null, null, null)),
        i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer], { layout: [0, 'layout'] }, null), i1.ɵdid(737280, null, 0, i4.FlexDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer, [3, i2.LayoutDirective],
            [3, i5.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), (_l()(),
            i1.ɵted(null, ['\n                    '])), (_l()(), i1.ɵeld(16777216, null, null, 5, 'button', [['aria-haspopup', 'true'], ['class',
                'type-btn-trigger mat-button'], ['md-button', ''], ['type', 'button']], [[8,
                'disabled', 0]], [[null, 'mousedown'], [null, 'click']], (_v, en, $event) => {
            var ad = true;
            if (('mousedown' === en)) {
                const pd_0 = (i1.ɵnov(_v, 10)._handleMousedown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                const pd_1 = (i1.ɵnov(_v, 10).toggleMenu() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i6.View_MdButton_0, i6.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i7.MdPrefixRejector, [[2, i7.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(180224, null, 0, i7.MdButton, [i1.ElementRef, i1.Renderer2, i7.Platform, i7.FocusOriginMonitor], null, null), i1.ɵdid(16384, null, 0, i7.MdButtonCssMatStyler, [], null, null), i1.ɵdid(4341760, null, 0, i7.MdMenuTrigger, [i7.Overlay, i1.ElementRef, i1.ViewContainerRef, [2, i7.Dir], i7.ScrollDispatcher], { menu: [0, 'menu'] }, null), (_l()(), i1.ɵted(0, ['\n                         ',
            '\n                    '])), (_l()(), i1.ɵted(null, ['\n                    '])),
        (_l()(), i1.ɵeld(0, null, null, 16, 'md-menu', [['role', 'menu']], null, null, null, i6.View_MdMenu_0, i6.RenderType_MdMenu)),
        i1.ɵdid(16384, null, 0, i7.MdPrefixRejector, [[2, i7.MATERIAL_COMPATIBILITY_MODE],
            i1.ElementRef], null, null), i1.ɵdid(1228800, [['type', 4]], 1, i7.MdMenu, [], null, null), i1.ɵqud(603979776, 1, { items: 1 }), (_l()(), i1.ɵted(0, ['\n                      '])), (_l()(), i1.ɵeld(0, null, 0, 2, 'button', [['md-menu-item', ''], ['role', 'menuitem'], ['type',
                'button']], [[2, 'mat-menu-item', null], [1, 'tabindex', 0], [1, 'aria-disabled',
                0], [1, 'disabled', 0]], [[null, 'click']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                const pd_0 = (i1.ɵnov(_v, 19)._checkDisabled($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                const pd_1 = (_co.updateGarmentType('Physical') !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i6.View_MdMenuItem_0, i6.RenderType_MdMenuItem)), i1.ɵdid(49152, [[1, 4]], 0, i7.MdMenuItem, [i1.ElementRef], null, null), (_l()(), i1.ɵted(0, ['Physical'])), (_l()(), i1.ɵted(0, ['\n                      '])), (_l()(),
            i1.ɵeld(0, null, 0, 2, 'button', [['md-menu-item', ''], ['role', 'menuitem'],
                ['type', 'button']], [[2, 'mat-menu-item', null], [1, 'tabindex',
                    0], [1, 'aria-disabled', 0], [1, 'disabled', 0]], [[null, 'click']], (_v, en, $event) => {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    const pd_0 = (i1.ɵnov(_v, 23)._checkDisabled($event) !== false);
                    ad = (pd_0 && ad);
                }
                if (('click' === en)) {
                    const pd_1 = (_co.updateGarmentType('Digital') !== false);
                    ad = (pd_1 && ad);
                }
                return ad;
            }, i6.View_MdMenuItem_0, i6.RenderType_MdMenuItem)), i1.ɵdid(49152, [[1,
                4]], 0, i7.MdMenuItem, [i1.ElementRef], null, null), (_l()(),
            i1.ɵted(0, ['Digital'])), (_l()(), i1.ɵted(0, ['\n                      '])),
        (_l()(), i1.ɵeld(0, null, 0, 2, 'button', [['md-menu-item', ''], ['role', 'menuitem'],
            ['type', 'button']], [[2, 'mat-menu-item', null], [1, 'tabindex', 0], [1,
                'aria-disabled', 0], [1, 'disabled', 0]], [[null, 'click']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                const pd_0 = (i1.ɵnov(_v, 27)._checkDisabled($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                const pd_1 = (_co.updateGarmentType('Service') !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, i6.View_MdMenuItem_0, i6.RenderType_MdMenuItem)), i1.ɵdid(49152, [[1, 4]], 0, i7.MdMenuItem, [i1.ElementRef], null, null), (_l()(), i1.ɵted(0, ['Service'])),
        (_l()(), i1.ɵted(0, ['\n                    '])), (_l()(), i1.ɵted(null, ['\n                 '])), (_l()(), i1.ɵted(null, ['\n         ']))], (_ck, _v) => {
        const currVal_0 = 'column';
        _ck(_v, 3, 0, currVal_0);
        const currVal_1 = '15';
        _ck(_v, 4, 0, currVal_1);
        const currVal_3 = i1.ɵnov(_v, 15);
        _ck(_v, 10, 0, currVal_3);
    }, (_ck, _v) => {
        var _co = _v.component;
        const currVal_2 = (i1.ɵnov(_v, 8).disabled || null);
        _ck(_v, 6, 0, currVal_2);
        const currVal_4 = _co.updatedType;
        _ck(_v, 11, 0, currVal_4);
        const currVal_5 = true;
        const currVal_6 = i1.ɵnov(_v, 19)._getTabIndex();
        const currVal_7 = i1.ɵnov(_v, 19).disabled.toString();
        const currVal_8 = i1.ɵnov(_v, 19)._getDisabledAttr();
        _ck(_v, 18, 0, currVal_5, currVal_6, currVal_7, currVal_8);
        const currVal_9 = true;
        const currVal_10 = i1.ɵnov(_v, 23)._getTabIndex();
        const currVal_11 = i1.ɵnov(_v, 23).disabled.toString();
        const currVal_12 = i1.ɵnov(_v, 23)._getDisabledAttr();
        _ck(_v, 22, 0, currVal_9, currVal_10, currVal_11, currVal_12);
        const currVal_13 = true;
        const currVal_14 = i1.ɵnov(_v, 27)._getTabIndex();
        const currVal_15 = i1.ɵnov(_v, 27).disabled.toString();
        const currVal_16 = i1.ɵnov(_v, 27)._getDisabledAttr();
        _ck(_v, 26, 0, currVal_13, currVal_14, currVal_15, currVal_16);
    });
}
function View_GridRowComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 5, 'input', [['id',
                'garmentType'], ['name', 'garmentType'], ['placeholder', '']], [[8, 'readOnly', 0],
            [2, 'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null],
            [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'ngModelChange'], [null, 'input'], [null, 'blur'], [null,
                'compositionstart'], [null, 'compositionend']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                const pd_0 = (i1.ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                const pd_1 = (i1.ɵnov(_v, 1).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                const pd_2 = (i1.ɵnov(_v, 1)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                const pd_3 = (i1.ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                const pd_4 = ((_co.type = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i8.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i8.COMPOSITION_BUFFER_MODE]], null, null),
        i1.ɵprd(1024, null, i8.NG_VALUE_ACCESSOR, (p0_0) => {
            return [p0_0];
        }, [i8.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i8.NgModel, [[2, i8.ControlContainer],
            [8, null], [8, null], [2, i8.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i1.ɵprd(2048, null, i8.NgControl, null, [i8.NgModel]), i1.ɵdid(16384, null, 0, i8.NgControlStatus, [i8.NgControl], null, null)], (_ck, _v) => {
        var _co = _v.component;
        const currVal_8 = 'garmentType';
        const currVal_9 = _co.type;
        _ck(_v, 3, 0, currVal_8, currVal_9);
    }, (_ck, _v) => {
        var _co = _v.component;
        const currVal_0 = _co.isReadOnly;
        const currVal_1 = i1.ɵnov(_v, 5).ngClassUntouched;
        const currVal_2 = i1.ɵnov(_v, 5).ngClassTouched;
        const currVal_3 = i1.ɵnov(_v, 5).ngClassPristine;
        const currVal_4 = i1.ɵnov(_v, 5).ngClassDirty;
        const currVal_5 = i1.ɵnov(_v, 5).ngClassValid;
        const currVal_6 = i1.ɵnov(_v, 5).ngClassInvalid;
        const currVal_7 = i1.ɵnov(_v, 5).ngClassPending;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
    });
}
export function View_GridRowComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 92, 'div', [['class', 'grid-row'], ['fxLayout', 'row']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer], { layout: [0,
                'layout'] }, null), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(),
            i1.ɵeld(0, null, null, 88, 'form', [['novalidate', '']], [[2, 'ng-untouched',
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
                    const pd_2 = (_co.publishGarmentUpdate(i1.ɵnov(_v, 6)) !== false);
                    ad = (pd_2 && ad);
                }
                return ad;
            }, null, null)), i1.ɵdid(16384, null, 0, i8.ɵbf, [], null, null), i1.ɵdid(16384, [['f', 4]], 0, i8.NgForm, [[8, null],
            [8, null]], null, { ngSubmit: 'ngSubmit' }), i1.ɵprd(2048, null, i8.ControlContainer, null, [i8.NgForm]), i1.ɵdid(16384, null, 0, i8.NgControlStatusGroup, [i8.ControlContainer], null, null), (_l()(),
            i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵeld(0, null, null, 8, 'div', [['fxFlex', '5'], ['fxLayout', 'column']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer], { layout: [0, 'layout'] }, null),
        i1.ɵdid(737280, null, 0, i4.FlexDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer, [3, i2.LayoutDirective], [3, i5.LayoutWrapDirective]], { flex: [0,
                'flex'] }, null), (_l()(), i1.ɵted(null, ['\n          '])),
        (_l()(), i1.ɵeld(0, null, null, 3, 'md-checkbox', [['class', 'mat-checkbox']], [[2, 'mat-checkbox-indeterminate', null], [2, 'mat-checkbox-checked',
                null], [2, 'mat-checkbox-disabled', null], [2, 'mat-checkbox-label-before',
                null]], [[null, 'change']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('change' === en)) {
                const pd_0 = (_co.turnPublishingOn(_co.garment.id) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i6.View_MdCheckbox_0, i6.RenderType_MdCheckbox)), i1.ɵprd(5120, null, i8.NG_VALUE_ACCESSOR, (p0_0) => {
            return [p0_0];
        }, [i7.MdCheckbox]), i1.ɵdid(16384, null, 0, i7.MdPrefixRejector, [[2,
                i7.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(4374528, null, 0, i7.MdCheckbox, [i1.Renderer2, i1.ElementRef, i1.ChangeDetectorRef,
            i7.FocusOriginMonitor], { disabled: [0, 'disabled'], checked: [1, 'checked'] }, { change: 'change' }),
        (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵted(null, ['\n     '])),
        (_l()(), i1.ɵeld(0, null, null, 8, 'div', [['fxFlex', '5'], ['fxLayout',
                'column']], null, null, null, null, null)),
        i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer], { layout: [0, 'layout'] }, null), i1.ɵdid(737280, null, 0, i4.FlexDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer, [3, i2.LayoutDirective],
            [3, i5.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), (_l()(),
            i1.ɵted(null, ['\n          '])), (_l()(), i1.ɵeld(0, null, null, 3, 'div', [['class', 'img-thumb']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n               '])), (_l()(), i1.ɵeld(0, null, null, 0, 'img', [], [[8, 'src', 4], [8, 'alt', 0]], null, null, null, null)), (_l()(), i1.ɵted(null, ['\n          '])),
        (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵted(null, ['\n     '])),
        (_l()(), i1.ɵeld(0, null, null, 10, 'div', [['class', 'garment-name'],
            ['fxFlex', '30'], ['fxLayout', 'column']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer], { layout: [0, 'layout'] }, null),
        i1.ɵdid(737280, null, 0, i4.FlexDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer, [3, i2.LayoutDirective], [3, i5.LayoutWrapDirective]], { flex: [0,
                'flex'] }, null), (_l()(), i1.ɵted(null, ['\n         '])),
        (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['id', 'garmentName'],
            ['name', 'garmentName'], ['placeholder', '']], [[8, 'className', 0], [8, 'readOnly',
                0], [2, 'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null],
            [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'ngModelChange'], [null, 'input'], [null, 'blur'], [null,
                'compositionstart'], [null, 'compositionend']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                const pd_0 = (i1.ɵnov(_v, 35)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                const pd_1 = (i1.ɵnov(_v, 35).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                const pd_2 = (i1.ɵnov(_v, 35)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                const pd_3 = (i1.ɵnov(_v, 35)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                const pd_4 = ((_co.garment.name = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i8.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i8.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i8.NG_VALUE_ACCESSOR, (p0_0) => {
            return [p0_0];
        }, [i8.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i8.NgModel, [[2, i8.ControlContainer],
            [8, null], [8, null], [2, i8.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i1.ɵprd(2048, null, i8.NgControl, null, [i8.NgModel]), i1.ɵdid(16384, null, 0, i8.NgControlStatus, [i8.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵeld(0, null, null, 9, 'div', [['class', 'garment-type'], ['fxFlex',
                '15'], ['fxLayout', 'column']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer], { layout: [0, 'layout'] }, null),
        i1.ɵdid(737280, null, 0, i4.FlexDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer, [3, i2.LayoutDirective], [3, i5.LayoutWrapDirective]], { flex: [0,
                'flex'] }, null), (_l()(), i1.ɵted(null, ['\n         '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GridRowComponent_1)),
        i1.ɵdid(16384, null, 0, i10.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n         '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_GridRowComponent_2)),
        i1.ɵdid(16384, null, 0, i10.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n     '])),
        (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵeld(0, null, null, 10, 'div', [['class', 'garment-price'], ['fxFlex', '10'], ['fxLayout',
                'column']], null, null, null, null, null)),
        i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer], { layout: [0, 'layout'] }, null), i1.ɵdid(737280, null, 0, i4.FlexDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer, [3, i2.LayoutDirective],
            [3, i5.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), (_l()(),
            i1.ɵted(null, ['\n         '])), (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['id', 'garmentPrice'], ['name', 'garmentPrice'], ['placeholder',
                '']], [[8, 'className', 0], [8, 'readOnly', 0], [2, 'ng-untouched', null],
            [2, 'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty',
                null], [2, 'ng-valid', null], [2, 'ng-invalid', null],
            [2, 'ng-pending', null]], [[null, 'ngModelChange'], [null,
                'input'], [null, 'blur'], [null, 'compositionstart'], [null,
                'compositionend']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                const pd_0 = (i1.ɵnov(_v, 58)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                const pd_1 = (i1.ɵnov(_v, 58).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                const pd_2 = (i1.ɵnov(_v, 58)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                const pd_3 = (i1.ɵnov(_v, 58)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                const pd_4 = ((_co.garment.price = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i8.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i8.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i8.NG_VALUE_ACCESSOR, (p0_0) => {
            return [p0_0];
        }, [i8.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i8.NgModel, [[2, i8.ControlContainer],
            [8, null], [8, null], [2, i8.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i1.ɵprd(2048, null, i8.NgControl, null, [i8.NgModel]), i1.ɵdid(16384, null, 0, i8.NgControlStatus, [i8.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵeld(0, null, null, 10, 'div', [['class', 'garment-inventory'], ['fxFlex',
                '10'], ['fxLayout', 'column']], null, null, null, null, null)), i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer], { layout: [0, 'layout'] }, null),
        i1.ɵdid(737280, null, 0, i4.FlexDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer, [3, i2.LayoutDirective], [3, i5.LayoutWrapDirective]], { flex: [0,
                'flex'] }, null), (_l()(), i1.ɵted(null, ['\n         '])),
        (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['id', 'garmentInventory'],
            ['name', 'garmentInventory'], ['placeholder', '']], [[8, 'className', 0], [8, 'readOnly',
                0], [2, 'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null],
            [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'ngModelChange'], [null, 'input'], [null, 'blur'], [null,
                'compositionstart'], [null, 'compositionend']], (_v, en, $event) => {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                const pd_0 = (i1.ɵnov(_v, 70)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                const pd_1 = (i1.ɵnov(_v, 70).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                const pd_2 = (i1.ɵnov(_v, 70)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                const pd_3 = (i1.ɵnov(_v, 70)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                const pd_4 = ((_co.garment.inventory = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i8.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i8.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i8.NG_VALUE_ACCESSOR, (p0_0) => {
            return [p0_0];
        }, [i8.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i8.NgModel, [[2, i8.ControlContainer],
            [8, null], [8, null], [2, i8.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i1.ɵprd(2048, null, i8.NgControl, null, [i8.NgModel]), i1.ɵdid(16384, null, 0, i8.NgControlStatus, [i8.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵted(null, ['\n\n     '])), (_l()(), i1.ɵeld(0, null, null, 14, 'div', [['fxFlex', '5'], ['fxLayout', 'column']], [[8, 'className', 0]], null, null, null, null)),
        i1.ɵdid(737280, null, 0, i2.LayoutDirective, [i3.MediaMonitor, i1.ElementRef,
            i1.Renderer], { layout: [0, 'layout'] }, null), i1.ɵdid(737280, null, 0, i4.FlexDirective, [i3.MediaMonitor, i1.ElementRef, i1.Renderer, [3, i2.LayoutDirective],
            [3, i5.LayoutWrapDirective]], { flex: [0, 'flex'] }, null), (_l()(),
            i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 9, 'div', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n                '])), (_l()(),
            i1.ɵeld(0, null, null, 6, 'button', [['class', 'save-button'],
                ['type', 'submit']], [[8, 'id', 0]], null, null, null, null)), (_l()(), i1.ɵted(null, ['\n                       '])),
        (_l()(), i1.ɵeld(0, null, null, 3, 'md-icon', [['aria-label', 'save changes'],
            ['class', 'save-icon'], ['role', 'img']], [[2, 'mat-icon', null]], null, null, i6.View_MdIcon_0, i6.RenderType_MdIcon)), i1.ɵdid(16384, null, 0, i7.MdPrefixRejector, [[2, i7.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(9027584, null, 0, i7.MdIcon, [i1.ElementRef,
            i1.Renderer2, i7.MdIconRegistry], { hostAriaLabel: [0, 'hostAriaLabel'] }, null),
        (_l()(), i1.ɵted(0, ['save'])), (_l()(), i1.ɵted(null, ['\n                '])),
        (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵted(null, ['\n     '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n']))], (_ck, _v) => {
        var _co = _v.component;
        const currVal_0 = 'row';
        _ck(_v, 2, 0, currVal_0);
        const currVal_8 = 'column';
        _ck(_v, 11, 0, currVal_8);
        const currVal_9 = '5';
        _ck(_v, 12, 0, currVal_9);
        const currVal_14 = _co.rowUpdateState;
        const currVal_15 = _co.isChecked;
        _ck(_v, 17, 0, currVal_14, currVal_15);
        const currVal_16 = 'column';
        _ck(_v, 21, 0, currVal_16);
        const currVal_17 = '5';
        _ck(_v, 22, 0, currVal_17);
        const currVal_20 = 'column';
        _ck(_v, 31, 0, currVal_20);
        const currVal_21 = '30';
        _ck(_v, 32, 0, currVal_21);
        const currVal_31 = 'garmentName';
        const currVal_32 = _co.garment.name;
        _ck(_v, 37, 0, currVal_31, currVal_32);
        const currVal_33 = 'column';
        _ck(_v, 43, 0, currVal_33);
        const currVal_34 = '15';
        _ck(_v, 44, 0, currVal_34);
        const currVal_35 = (_co.isReadOnly == false);
        _ck(_v, 47, 0, currVal_35);
        const currVal_36 = (_co.isReadOnly == true);
        _ck(_v, 50, 0, currVal_36);
        const currVal_37 = 'column';
        _ck(_v, 54, 0, currVal_37);
        const currVal_38 = '10';
        _ck(_v, 55, 0, currVal_38);
        const currVal_48 = 'garmentPrice';
        const currVal_49 = _co.garment.price;
        _ck(_v, 60, 0, currVal_48, currVal_49);
        const currVal_50 = 'column';
        _ck(_v, 66, 0, currVal_50);
        const currVal_51 = '10';
        _ck(_v, 67, 0, currVal_51);
        const currVal_61 = 'garmentInventory';
        const currVal_62 = _co.garment.inventory;
        _ck(_v, 72, 0, currVal_61, currVal_62);
        const currVal_64 = 'column';
        _ck(_v, 78, 0, currVal_64);
        const currVal_65 = '5';
        _ck(_v, 79, 0, currVal_65);
        const currVal_68 = 'save changes';
        _ck(_v, 87, 0, currVal_68);
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
        const currVal_10 = i1.ɵnov(_v, 17).indeterminate;
        const currVal_11 = i1.ɵnov(_v, 17).checked;
        const currVal_12 = i1.ɵnov(_v, 17).disabled;
        const currVal_13 = (i1.ɵnov(_v, 17).labelPosition == 'before');
        _ck(_v, 14, 0, currVal_10, currVal_11, currVal_12, currVal_13);
        const currVal_18 = i1.ɵinlineInterpolate(1, '', _co.thumbnail, '');
        const currVal_19 = i1.ɵinlineInterpolate(1, '', _co.name, '');
        _ck(_v, 26, 0, currVal_18, currVal_19);
        const currVal_22 = _co.liveInput_Class;
        const currVal_23 = _co.isReadOnly;
        const currVal_24 = i1.ɵnov(_v, 39).ngClassUntouched;
        const currVal_25 = i1.ɵnov(_v, 39).ngClassTouched;
        const currVal_26 = i1.ɵnov(_v, 39).ngClassPristine;
        const currVal_27 = i1.ɵnov(_v, 39).ngClassDirty;
        const currVal_28 = i1.ɵnov(_v, 39).ngClassValid;
        const currVal_29 = i1.ɵnov(_v, 39).ngClassInvalid;
        const currVal_30 = i1.ɵnov(_v, 39).ngClassPending;
        _ck(_v, 34, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30);
        const currVal_39 = _co.liveInput_Class;
        const currVal_40 = _co.isReadOnly;
        const currVal_41 = i1.ɵnov(_v, 62).ngClassUntouched;
        const currVal_42 = i1.ɵnov(_v, 62).ngClassTouched;
        const currVal_43 = i1.ɵnov(_v, 62).ngClassPristine;
        const currVal_44 = i1.ɵnov(_v, 62).ngClassDirty;
        const currVal_45 = i1.ɵnov(_v, 62).ngClassValid;
        const currVal_46 = i1.ɵnov(_v, 62).ngClassInvalid;
        const currVal_47 = i1.ɵnov(_v, 62).ngClassPending;
        _ck(_v, 57, 0, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47);
        const currVal_52 = _co.liveInput_Class;
        const currVal_53 = _co.isReadOnly;
        const currVal_54 = i1.ɵnov(_v, 74).ngClassUntouched;
        const currVal_55 = i1.ɵnov(_v, 74).ngClassTouched;
        const currVal_56 = i1.ɵnov(_v, 74).ngClassPristine;
        const currVal_57 = i1.ɵnov(_v, 74).ngClassDirty;
        const currVal_58 = i1.ɵnov(_v, 74).ngClassValid;
        const currVal_59 = i1.ɵnov(_v, 74).ngClassInvalid;
        const currVal_60 = i1.ɵnov(_v, 74).ngClassPending;
        _ck(_v, 69, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60);
        const currVal_63 = _co.revealPublish_Class;
        _ck(_v, 77, 0, currVal_63);
        const currVal_66 = i1.ɵinlineInterpolate(1, '', _co.garment.id, '');
        _ck(_v, 83, 0, currVal_66);
        const currVal_67 = true;
        _ck(_v, 85, 0, currVal_67);
    });
}
export function View_GridRowComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'grid-row', [], null, null, null, View_GridRowComponent_0, RenderType_GridRowComponent)),
        i1.ɵdid(49152, null, 0, i9.GridRowComponent, [], null, null)], null, null);
}
export const GridRowComponentNgFactory = i1.ɵccf('grid-row', i9.GridRowComponent, View_GridRowComponent_Host_0, { garment: 'garment', rowUpdateState: 'rowUpdateState' }, { updateGarmentModel: 'updateGarmentModel', addRowState: 'addRowState' }, []);
