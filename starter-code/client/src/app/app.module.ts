import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
//Components
import { EntryListComponent } from './components/entry-list/entry-list.component';
//Services
import { EntriesService } from 'app/services/entries.service';
import { SingleEntryComponent } from './components/single-entry/single-entry.component';

const routes: Routes = [
  { path: '',  component: EntryListComponent },
  { path: 'journal-entries/:id',  component: SingleEntryComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
