import * as i0 from '@angular/core';
import * as i1 from './home.module';
import * as i2 from './home.component.ngfactory';
import * as i3 from '../../../../node_modules/@angular/material/typings/index.ngfactory';
import * as i4 from '@angular/forms';
import * as i5 from '@angular/common';
import * as i6 from '@angular/material';
import * as i7 from '@angular/http';
import * as i8 from '@angular/platform-browser';
import * as i9 from '@angular/flex-layout/media-query/match-media';
import * as i10 from '@angular/flex-layout/media-query/breakpoints/break-point-registry';
import * as i11 from '@angular/flex-layout/media-query/breakpoints/break-points';
import * as i12 from '@angular/flex-layout/media-query/media-monitor';
import * as i13 from '@angular/flex-layout/media-query/observable-media-service';
import * as i14 from '../../../business-layer/validators/services/validation.service';
import * as i15 from '@angular/router';
import * as i16 from './home.routing.module';
import * as i17 from '@angular/flex-layout/media-query/_module';
import * as i18 from '@angular/flex-layout/flexbox/_module';
import * as i19 from '../../common-views/grid-masthead/grid.masthead.module';
import * as i20 from '../../common-views/search-ahead/search.ahead.module';
import * as i21 from '../../common-views/garmentGrid/garment.grid.module';
import * as i22 from '../../common-views/paginator-toolbar/paginator.toolbar.module';
import * as i23 from './home.component';
export const HomeModuleNgFactory = i0.ɵcmf(i1.HomeModule, [], (_l) => {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.HomeComponentNgFactory, i3.MdDialogContainerNgFactory, i3.MdDatepickerContentNgFactory,
                    i3.MdSnackBarContainerNgFactory, i3.SimpleSnackBarNgFactory, i3.TooltipComponentNgFactory]],
            [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.ɵi, i4.ɵi, []), i0.ɵmpd(4608, i4.FormBuilder, i4.FormBuilder, []),
        i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(4608, i6.Platform, i6.Platform, []), i0.ɵmpd(5120, i6.ScrollDispatcher, i6.ɵd, [[3, i6.ScrollDispatcher], i0.NgZone, i6.Platform]), i0.ɵmpd(5120, i6.ɵo, i6.ɵp, [[3, i6.ɵo], i6.ScrollDispatcher]), i0.ɵmpd(5120, i6.OverlayContainer, i6.ɵb, [[3, i6.OverlayContainer]]), i0.ɵmpd(4608, i6.ɵr, i6.ɵr, [i6.ɵo]), i0.ɵmpd(4608, i6.Overlay, i6.Overlay, [i6.OverlayContainer, i0.ComponentFactoryResolver,
            i6.ɵr, i0.ApplicationRef, i0.Injector, i0.NgZone]), i0.ɵmpd(5120, i6.FocusOriginMonitor, i6.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY, [[3, i6.FocusOriginMonitor],
            i0.NgZone, i6.Platform]), i0.ɵmpd(5120, i6.UniqueSelectionDispatcher, i6.ɵh, [[3, i6.UniqueSelectionDispatcher]]), i0.ɵmpd(4608, i6.InteractivityChecker, i6.InteractivityChecker, [i6.Platform]), i0.ɵmpd(4608, i6.FocusTrapFactory, i6.FocusTrapFactory, [i6.InteractivityChecker, i0.NgZone]), i0.ɵmpd(5120, i6.LiveAnnouncer, i6.ɵg, [[3, i6.LiveAnnouncer], [2, i6.LIVE_ANNOUNCER_ELEMENT_TOKEN],
            i6.Platform]), i0.ɵmpd(4608, i6.MdDialog, i6.MdDialog, [i6.Overlay, i0.Injector,
            [2, i5.Location], [3, i6.MdDialog]]), i0.ɵmpd(4608, i6.MdDatepickerIntl, i6.MdDatepickerIntl, []), i0.ɵmpd(5120, i6.MdIconRegistry, i6.ICON_REGISTRY_PROVIDER_FACTORY, [[3, i6.MdIconRegistry], [2, i7.Http], i8.DomSanitizer]), i0.ɵmpd(4608, i8.HAMMER_GESTURE_CONFIG, i6.GestureConfig, []), i0.ɵmpd(4608, i6.MdSnackBar, i6.MdSnackBar, [i6.Overlay, i6.LiveAnnouncer, [3, i6.MdSnackBar]]), i0.ɵmpd(4608, i6.ɵa, i6.ɵa, []), i0.ɵmpd(4608, i9.MatchMedia, i9.MatchMedia, [i0.NgZone]),
        i0.ɵmpd(4608, i10.BreakPointRegistry, i10.BreakPointRegistry, [i11.BREAKPOINTS]),
        i0.ɵmpd(4608, i12.MediaMonitor, i12.MediaMonitor, [i10.BreakPointRegistry, i9.MatchMedia]),
        i0.ɵmpd(4608, i13.ObservableMedia, i13.MediaService, [i9.MatchMedia, i10.BreakPointRegistry]),
        i0.ɵmpd(4608, i14.ValidationService, i14.ValidationService, []),
        i0.ɵmpd(512, i15.RouterModule, i15.RouterModule, [[2, i15.ɵa], [2, i15.Router]]),
        i0.ɵmpd(512, i16.HomeRoutingModule, i16.HomeRoutingModule, []), i0.ɵmpd(512, i4.ɵba, i4.ɵba, []), i0.ɵmpd(512, i4.FormsModule, i4.FormsModule, []), i0.ɵmpd(512, i4.ReactiveFormsModule, i4.ReactiveFormsModule, []), i0.ɵmpd(512, i5.CommonModule, i5.CommonModule, []),
        i0.ɵmpd(256, i6.MATERIAL_SANITY_CHECKS, true, []), i0.ɵmpd(512, i6.CompatibilityModule, i6.CompatibilityModule, [[2, i8.DOCUMENT], [2, i6.MATERIAL_SANITY_CHECKS]]),
        i0.ɵmpd(512, i6.MdCommonModule, i6.MdCommonModule, []), i0.ɵmpd(512, i6.PlatformModule, i6.PlatformModule, []), i0.ɵmpd(512, i6.ɵm, i6.ɵm, []), i0.ɵmpd(512, i6.MdRippleModule, i6.MdRippleModule, []), i0.ɵmpd(512, i6.MdSelectionModule, i6.MdSelectionModule, []), i0.ɵmpd(512, i6.MdOptionModule, i6.MdOptionModule, []),
        i0.ɵmpd(512, i6.PortalModule, i6.PortalModule, []), i0.ɵmpd(512, i6.OverlayModule, i6.OverlayModule, []), i0.ɵmpd(512, i6.MdAutocompleteModule, i6.MdAutocompleteModule, []), i0.ɵmpd(512, i6.StyleModule, i6.StyleModule, []), i0.ɵmpd(512, i6.MdButtonModule, i6.MdButtonModule, []),
        i0.ɵmpd(512, i6.MdButtonToggleModule, i6.MdButtonToggleModule, []),
        i0.ɵmpd(512, i6.MdCardModule, i6.MdCardModule, []), i0.ɵmpd(512, i6.MdChipsModule, i6.MdChipsModule, []), i0.ɵmpd(512, i6.MdCheckboxModule, i6.MdCheckboxModule, []), i0.ɵmpd(512, i6.A11yModule, i6.A11yModule, []),
        i0.ɵmpd(512, i6.MdDialogModule, i6.MdDialogModule, []), i0.ɵmpd(512, i6.MdDatepickerModule, i6.MdDatepickerModule, []), i0.ɵmpd(512, i6.MdLineModule, i6.MdLineModule, []), i0.ɵmpd(512, i6.MdGridListModule, i6.MdGridListModule, []), i0.ɵmpd(512, i6.MdIconModule, i6.MdIconModule, []), i0.ɵmpd(512, i6.MdInputModule, i6.MdInputModule, []),
        i0.ɵmpd(512, i6.MdListModule, i6.MdListModule, []), i0.ɵmpd(512, i6.MdMenuModule, i6.MdMenuModule, []), i0.ɵmpd(512, i6.MdProgressBarModule, i6.MdProgressBarModule, []), i0.ɵmpd(512, i6.MdProgressSpinnerModule, i6.MdProgressSpinnerModule, []), i0.ɵmpd(512, i6.MdRadioModule, i6.MdRadioModule, []),
        i0.ɵmpd(512, i6.MdSelectModule, i6.MdSelectModule, []), i0.ɵmpd(512, i6.MdSidenavModule, i6.MdSidenavModule, []), i0.ɵmpd(512, i6.RtlModule, i6.RtlModule, []), i0.ɵmpd(512, i6.MdSliderModule, i6.MdSliderModule, []), i0.ɵmpd(512, i6.MdSlideToggleModule, i6.MdSlideToggleModule, []), i0.ɵmpd(512, i6.MdSnackBarModule, i6.MdSnackBarModule, []),
        i0.ɵmpd(512, i6.ObserveContentModule, i6.ObserveContentModule, []),
        i0.ɵmpd(512, i6.MdTabsModule, i6.MdTabsModule, []), i0.ɵmpd(512, i6.MdToolbarModule, i6.MdToolbarModule, []), i0.ɵmpd(512, i6.MdTooltipModule, i6.MdTooltipModule, []), i0.ɵmpd(512, i6.MaterialModule, i6.MaterialModule, []),
        i0.ɵmpd(512, i17.MediaQueriesModule, i17.MediaQueriesModule, []),
        i0.ɵmpd(512, i18.FlexLayoutModule, i18.FlexLayoutModule, []), i0.ɵmpd(512, i19.GridMastheadModule, i19.GridMastheadModule, []), i0.ɵmpd(512, i20.SearchAheadModule, i20.SearchAheadModule, []), i0.ɵmpd(512, i21.GarmentGridModule, i21.GarmentGridModule, []), i0.ɵmpd(512, i22.PaginatorToolbarModule, i22.PaginatorToolbarModule, []),
        i0.ɵmpd(512, i1.HomeModule, i1.HomeModule, []), i0.ɵmpd(1024, i15.ROUTES, () => {
            return [[{ path: '', component: i23.HomeComponent }]];
        }, []), i0.ɵmpd(256, i11.BREAKPOINTS, i11.RAW_DEFAULTS, [])]);
});
