import { NgModule } from "@angular/core";
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from "primeng/button";
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { RouterModule } from "@angular/router";
import { MenubarModule } from 'primeng/menubar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
    imports : [
        InputTextModule,
        CheckboxModule,
        RadioButtonModule,
        ButtonModule,
        CardModule,
        PanelModule,
        DividerModule,
        RouterModule,
        MenubarModule,
        OverlayPanelModule,
        AvatarModule,
        MenuModule,
        TableModule,
        FileUploadModule,
        DialogModule,
        DropdownModule,
        InputTextareaModule
    ],
    exports : [
        InputTextModule,
        CheckboxModule,
        RadioButtonModule,
        ButtonModule,
        CardModule,
        PanelModule,
        DividerModule,
        RouterModule,
        MenubarModule,
        OverlayPanelModule,
        AvatarModule,
        MenuModule,
        TableModule,
        FileUploadModule,
        DialogModule,
        DropdownModule,
        InputTextareaModule
    ]
})
export class SharedModuleComponent {

}