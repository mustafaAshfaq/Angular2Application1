import {NgModule} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { Store, StoreModule } from "@ngrx/store";
import { CommonModule } from '@angular/common';
import {ContactRoutingModule} from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { YouTubeService } from "../search/services/youtube.service";
import {ContactService} from './contact.service';

import { SearchReducer } from "../search/reducers/search.reducer";
import { ProximitySelector } from "../search/components/proximity-selector.component";
import { SearchBox } from "../search/components/search-box.component";
import { SearchComponent } from "../Search/search.component";

const storeManager = StoreModule.provideStore({ currentSearch: SearchReducer });

@NgModule({
    imports: [
        CommonModule, FormsModule 
        , HttpModule
        ,StoreModule
        , storeManager
       ,ContactRoutingModule,
       
    ],
    declarations: [
         SearchComponent
        ,ContactComponent
        , SearchBox
        , ProximitySelector
       
      
    ],
    providers: [YouTubeService, ContactService],
    exports: [ContactComponent, SearchComponent]
})

export class ContactModule {
}