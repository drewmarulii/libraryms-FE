import { NgModule } from "@angular/core";
import { SharedModuleComponent } from "../shared-module";
import { NavbarComponent } from "./navbar.component";
import { ButtonComponent } from "../button/button.component";

@NgModule({
    declarations : [
        NavbarComponent
    ],
    imports : [
        SharedModuleComponent,
        ButtonComponent
    ],
    exports : [
        NavbarComponent
    ]
})
export class NavbarModule {

}