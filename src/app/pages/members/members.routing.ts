import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MemberListComponent } from "./list/members-list.component";
import { SharedModuleComponent } from "src/app/components/shared-module";
import { ButtonComponent } from "src/app/components/button/button.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

const routes : Routes = [
    {
        path : '',
        component : MemberListComponent
    }
]
@NgModule({
    declarations : [
        MemberListComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        ButtonComponent,
        SharedModuleComponent,
        CommonModule,
        ReactiveFormsModule
    ],
    exports : [
        
    ]
})
export class MemberRouting {

}