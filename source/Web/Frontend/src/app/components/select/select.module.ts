import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppSelectComponent } from "./select.component";

@NgModule({
    declarations: [
        AppSelectComponent
    ],
    exports: [
        AppSelectComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppSelectModule { }
