import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './control.messaging.component';
const styles_ControlMessagesComponent = ['div[_ngcontent-%COMP%] { color:#D73117 }'];
export const RenderType_ControlMessagesComponent = i0.ɵcrt({ encapsulation: 0,
    styles: styles_ControlMessagesComponent, data: {} });
function View_ControlMessagesComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'div', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['', '']))], null, (_ck, _v) => {
        var _co = _v.component;
        const currVal_0 = _co.errorMessage;
        _ck(_v, 1, 0, currVal_0);
    });
}
export function View_ControlMessagesComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_ControlMessagesComponent_1)), i0.ɵdid(16384, null, 0, i1.NgIf, [i0.ViewContainerRef,
            i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null)], (_ck, _v) => {
        var _co = _v.component;
        const currVal_0 = (_co.errorMessage !== null);
        _ck(_v, 1, 0, currVal_0);
    }, null);
}
export function View_ControlMessagesComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'control-messages', [], null, null, null, View_ControlMessagesComponent_0, RenderType_ControlMessagesComponent)), i0.ɵdid(49152, null, 0, i2.ControlMessagesComponent, [], null, null)], null, null);
}
export const ControlMessagesComponentNgFactory = i0.ɵccf('control-messages', i2.ControlMessagesComponent, View_ControlMessagesComponent_Host_0, { control: 'control' }, {}, []);
