import { Component, OnInit } from '@angular/core';
import { EntriesService } from 'app/services/entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: {}[];

  constructor(private entriesService: EntriesService) {}

  ngOnInit() {
    this.entriesService.getList()
   .then((entries) => {
     this.entries = entries})
  }

}
