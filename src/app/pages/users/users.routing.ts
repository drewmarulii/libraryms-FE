import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./list/users-list.component";
import { SharedModuleComponent } from "src/app/components/shared-module";
import { ButtonComponent } from "src/app/components/button/button.component";

const routes : Routes = [
    {
        path: '',
        component: UserListComponent
    }
]

@NgModule({
    declarations : [
        UserListComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        ButtonComponent,
        SharedModuleComponent
    ],
    exports : [
        RouterModule,
        UserListComponent
    ]
})
export class UserRouting {

}