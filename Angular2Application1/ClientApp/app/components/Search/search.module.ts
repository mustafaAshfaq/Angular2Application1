import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { Store, StoreModule } from "@ngrx/store";
import { CommonModule } from '@angular/common';
//import {SearchRoutingModule} from './search-routing.module';
import {SearchComponent} from "./search.component";
import {YouTubeService} from "./services/youtube.service";
import {ProximitySelector} from "./components/proximity-selector.component";
import {SearchBox} from "./components/search-box.component";
import { SearchReducer } from "./reducers/search.reducer";

const storeManager = StoreModule.provideStore({ currentSearch: SearchReducer });

@NgModule({
    imports: [CommonModule, FormsModule
        , HttpModule
        , StoreModule
        , storeManager
    ],
    
    declarations: [SearchComponent, SearchBox, ProximitySelector],

    exports: [SearchComponent],
    providers:[ YouTubeService ]
})
export class SearchModule { }
