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
        MenuModule
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
        MenuModule
    ]
})
export class SharedModuleComponent {

}