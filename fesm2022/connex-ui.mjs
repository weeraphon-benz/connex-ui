import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

class ConnexButtonComponent {
    constructor() { }
    ngOnInit() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConnexButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ConnexButtonComponent, selector: "connex-button", ngImport: i0, template: "<p>\n  connex-button works!\n</p>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConnexButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'connex-button', template: "<p>\n  connex-button works!\n</p>\n" }]
        }], ctorParameters: function () { return []; } });

class ConnexUiModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConnexUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ConnexUiModule, declarations: [ConnexButtonComponent], exports: [ConnexButtonComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConnexUiModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConnexUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConnexButtonComponent
                    ],
                    imports: [],
                    exports: [
                        ConnexButtonComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of connex-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ConnexButtonComponent, ConnexUiModule };
//# sourceMappingURL=connex-ui.mjs.map
