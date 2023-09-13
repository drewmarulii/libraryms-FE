import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer.component";
import { SharedModuleComponent } from "../shared-module";
import { ButtonComponent } from "../button/button.component";

@NgModule({
    declarations : [
        FooterComponent
    ],
    imports : [
        SharedModuleComponent,
        ButtonComponent
    ],
    exports : [
        FooterComponent
    ]
})
export class FooterModule {

}