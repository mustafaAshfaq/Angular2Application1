import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UniversalModule } from 'angular2-universal';
import { SearchModule } from './components/Search/search.module';
//import { ContactModule } from './components/contact/contact.module';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import {DynamicFormComponent} from './components/register/dynamic-form.component';
import {DynamicFormQuestionComponent} from './components/register/dynamic-form-question.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/Search/search.component';
//import { ContactComponent } from './components/contact/contact.component';
@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        DynamicFormQuestionComponent, DynamicFormComponent, RegisterComponent//, SearchComponent
    ],
    imports: [
        UniversalModule, FormsModule, ReactiveFormsModule,SearchModule,// ContactModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'register', component: RegisterComponent },
            { path: "search", component: SearchComponent },//loadChildren: 'app/components/search/search.module#SearchModule'
            { path: '**', redirectTo: 'home' }
        ])
        
    ]
})
export class AppModule {
}
