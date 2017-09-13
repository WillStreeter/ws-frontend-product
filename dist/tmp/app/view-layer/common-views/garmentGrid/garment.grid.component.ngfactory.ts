/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


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
const styles_GarmentGridComponent:any[] = [i0.styles];
export const RenderType_GarmentGridComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_GarmentGridComponent,data:{}});
function View_GarmentGridComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'grid-create-row',
      ([] as any[]),(null as any),[[(null as any),'removeAddRow'],[(null as any),'addGarmentModel']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('removeAddRow' === en)) {
          const pd_0:any = ((<any>_co.exitEditState($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('addGarmentModel' === en)) {
          const pd_1:any = ((<any>_co.garmentModelAdd($event)) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },i2.View_GridCreateRowComponent_0,i2.RenderType_GridCreateRowComponent)),i1.ɵdid(49152,
      (null as any),0,i3.GridCreateRowComponent,([] as any[]),(null as any),{addGarmentModel:'addGarmentModel',
          removeAddRow:'removeAddRow'})],(null as any),(null as any));
}
function View_GarmentGridComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'grid-row',([] as any[]),
      (null as any),[[(null as any),'updateGarmentModel'],[(null as any),'addRowState']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('updateGarmentModel' === en)) {
          const pd_0:any = ((<any>_co.garmentModelUpdate($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('addRowState' === en)) {
          const pd_1:any = ((<any>_co.updateEditRowState($event)) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },i4.View_GridRowComponent_0,i4.RenderType_GridRowComponent)),i1.ɵdid(49152,
      (null as any),0,i5.GridRowComponent,([] as any[]),{garment:[0,'garment'],rowUpdateState:[1,
          'rowUpdateState']},{updateGarmentModel:'updateGarmentModel',addRowState:'addRowState'})],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _v.context.$implicit;
        const currVal_1:any = _co.revealCreateRow;
        _ck(_v,1,0,currVal_0,currVal_1);
      },(null as any));
}
export function View_GarmentGridComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵeld(0,(null as any),
      (null as any),17,'div',[['class','flex-container'],['fxFlexFill','']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),i1.ɵdid(147456,(null as any),
      0,i6.FlexFillDirective,[i7.MediaMonitor,i1.ElementRef,i1.Renderer],(null as any),
      (null as any)),(_l()(),i1.ɵted((null as any),['\n   '])),(_l()(),i1.ɵeld(0,(null as any),
      (null as any),13,'div',[['class','grid-layout'],['fxFlex','100'],['fxLayout',
          'column']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(737280,(null as any),0,i8.LayoutDirective,[i7.MediaMonitor,i1.ElementRef,
          i1.Renderer],{layout:[0,'layout']},(null as any)),i1.ɵdid(737280,(null as any),
          0,i9.FlexDirective,[i7.MediaMonitor,i1.ElementRef,i1.Renderer,[3,i8.LayoutDirective],
              [3,i10.LayoutWrapDirective]],{flex:[0,'flex']},(null as any)),(_l()(),
          i1.ɵted((null as any),['\n       '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          1,'grid-toolbar',([] as any[]),(null as any),[[(null as any),'updateSort']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i11.GarmentGridComponent = _v.component;
            if (('updateSort' === en)) {
              const pd_0:any = ((<any>_co.toolbarSortUpdate($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i12.View_GridToolbarComponent_0,i12.RenderType_GridToolbarComponent)),
      i1.ɵdid(49152,(null as any),0,i13.GridToolbarComponent,([] as any[]),(null as any),
          {updateSort:'updateSort'}),(_l()(),i1.ɵted((null as any),['\n       '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_GarmentGridComponent_1)),
      i1.ɵdid(16384,(null as any),0,i14.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n       '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),2,(null as any),View_GarmentGridComponent_2)),
      i1.ɵdid(802816,(null as any),0,i14.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),i1.ɵpid(131072,
          i14.AsyncPipe,[i1.ChangeDetectorRef]),(_l()(),i1.ɵted((null as any),['\n   '])),
      (_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵted((null as any),['\n']))],
      (_ck,_v) => {
        var _co:i11.GarmentGridComponent = _v.component;
        const currVal_0:any = 'column';
        _ck(_v,5,0,currVal_0);
        const currVal_1:any = '100';
        _ck(_v,6,0,currVal_1);
        const currVal_2:any = (_co.revealCreateRow === true);
        _ck(_v,12,0,currVal_2);
        const currVal_3:any = i1.ɵunv(_v,15,0,i1.ɵnov(_v,16).transform(_co.currentGarmentSubset$));
        _ck(_v,15,0,currVal_3);
      },(null as any));
}
export function View_GarmentGridComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'garment-grid',
      ([] as any[]),(null as any),(null as any),(null as any),View_GarmentGridComponent_0,
      RenderType_GarmentGridComponent)),i1.ɵdid(114688,(null as any),0,i11.GarmentGridComponent,
      [i15.BrokerDispatcherService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const GarmentGridComponentNgFactory:i1.ComponentFactory<i11.GarmentGridComponent> = i1.ɵccf('garment-grid',
    i11.GarmentGridComponent,View_GarmentGridComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3dpbGxpZXN0cmVldGVyL1dlYnN0b3JtUHJvamVjdHMvdnVlL3dzLWdhcm1lbnQtZXgvZGlzdC90bXAvYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL2dhcm1lbnRHcmlkL2dhcm1lbnQuZ3JpZC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvd2lsbGllc3RyZWV0ZXIvV2Vic3Rvcm1Qcm9qZWN0cy92dWUvd3MtZ2FybWVudC1leC9kaXN0L3RtcC9hcHAvdmlldy1sYXllci9jb21tb24tdmlld3MvZ2FybWVudEdyaWQvZ2FybWVudC5ncmlkLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL3dpbGxpZXN0cmVldGVyL1dlYnN0b3JtUHJvamVjdHMvdnVlL3dzLWdhcm1lbnQtZXgvZGlzdC90bXAvYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL2dhcm1lbnRHcmlkL2dhcm1lbnQuZ3JpZC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL3dpbGxpZXN0cmVldGVyL1dlYnN0b3JtUHJvamVjdHMvdnVlL3dzLWdhcm1lbnQtZXgvZGlzdC90bXAvYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL2dhcm1lbnRHcmlkL2dhcm1lbnQuZ3JpZC5jb21wb25lbnQudHMuR2FybWVudEdyaWRDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8IS0tIG5ncnggc21hcnQtY29udGFpbmVyLS0+XG48ZGl2IGNsYXNzPVwiZmxleC1jb250YWluZXJcIiBmeEZsZXhGaWxsPlxuICAgPGRpdiBjbGFzcz1cImdyaWQtbGF5b3V0XCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIxMDBcIiAgPlxuICAgICAgIDxncmlkLXRvb2xiYXIgICh1cGRhdGVTb3J0KT1cInRvb2xiYXJTb3J0VXBkYXRlKCRldmVudClcIj48L2dyaWQtdG9vbGJhcj5cbiAgICAgICA8Z3JpZC1jcmVhdGUtcm93ICpuZ0lmPVwicmV2ZWFsQ3JlYXRlUm93PT09dHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVtb3ZlQWRkUm93KT1cImV4aXRFZGl0U3RhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoYWRkR2FybWVudE1vZGVsKT1cImdhcm1lbnRNb2RlbEFkZCgkZXZlbnQpXCI+PC9ncmlkLWNyZWF0ZS1yb3c+XG4gICAgICAgPGdyaWQtcm93ICpuZ0Zvcj1cIiBsZXQgZ2FybWVudCBvZiBjdXJyZW50R2FybWVudFN1YnNldCQgfCBhc3luY1wiXG4gICAgICAgICAgICAgICAgICh1cGRhdGVHYXJtZW50TW9kZWwpPVwiZ2FybWVudE1vZGVsVXBkYXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAoYWRkUm93U3RhdGUpPVwidXBkYXRlRWRpdFJvd1N0YXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICBbcm93VXBkYXRlU3RhdGVdPVwicmV2ZWFsQ3JlYXRlUm93XCJcbiAgICAgICAgICAgICAgICAgW2dhcm1lbnRdPVwiZ2FybWVudFwiPjwvZ3JpZC1yb3c+XG4gICA8L2Rpdj5cbjwvZGl2PlxuIiwiPGdhcm1lbnQtZ3JpZD48L2dhcm1lbnQtZ3JpZD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0lPO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFDaUI7VUFBQTtVQUFBO1FBQUE7UUFDQTtVQUFBO1VBQUE7UUFBQTtRQUZqQjtNQUFBLGlGQUFBO01BQUE7VUFBQTs7O29CQUdBO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFDVTtVQUFBO1VBQUE7UUFBQTtRQUNBO1VBQUE7VUFBQTtRQUFBO1FBRlY7TUFBQSxxRUFBQTtNQUFBO1VBQUE7OztRQUlVO1FBREE7UUFIVixXQUlVLFVBREEsU0FIVjs7OztvQkFQcUIsdUNBQzVCO01BQUE7TUFBQSxpRUFBQTtNQUFBO01BQUEsZUFBdUMsMENBQ3BDO01BQUE7VUFBQTthQUFBO3FCQUFBLDhDQUFBO1VBQUE7Y0FBQSw4REFBMEQ7aUJBQUEsK0JBQ3REO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBZTtjQUFBO2NBQUE7WUFBQTtZQUFmO1VBQUE7YUFBQTtVQUFBLDJCQUF1RTtNQUN2RTthQUFBO1VBQUEsaUNBRStFO01BQy9FO2FBQUE7NEJBQUEsZ0RBQVU7d0JBQUEsd0JBSStCO01BQ3ZDLHVDQUNIOzs7UUFYc0I7UUFBekIsV0FBeUIsU0FBekI7UUFBMkM7UUFBM0MsV0FBMkMsU0FBM0M7UUFFcUI7UUFBakIsWUFBaUIsU0FBakI7UUFHVTtRQUFWLFlBQVUsU0FBVjs7OztvQkNQUDtNQUFBO3FDQUFBLFVBQUE7TUFBQTtJQUFBOzs7OyJ9
