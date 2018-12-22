import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppCoreModule } from "src/app/core/core.module";
import { AppFormComponent } from "./form.component";

const routes: Routes = [
    { path: "", component: AppFormComponent }
];

@NgModule({
    declarations: [AppFormComponent],
    imports: [
        RouterModule.forChild(routes),
        AppCoreModule
    ]
})
export class AppFormModule { }
