import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from '@app/page-main/page-main.component';
import { PageOptionsComponent } from '@app/page-options/page-options.component';


const routes: Routes = [
    {path: 'options', component: PageOptionsComponent},
    {path: '**', component: PageMainComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
