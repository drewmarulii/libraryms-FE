import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from "./list/categories-list.component";
import { ButtonComponent } from "src/app/components/button/button.component";
import { SharedModuleComponent } from "src/app/components/shared-module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";


const routes : Routes = [
    {
        path: '',
        component: CategoryComponent
    }
]
@NgModule({
    declarations : [
        CategoryComponent
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
export class CategoryRouting {

}