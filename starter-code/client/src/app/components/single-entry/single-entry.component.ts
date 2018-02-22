import { Component, OnInit, Input } from '@angular/core';
import { EntriesService } from 'app/services/entries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  entryId: any;
  entry: object;

  constructor(private entriesService: EntriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.entryId = String(params['id'])
    })
    this.entriesService.getEntry(this.entryId)
      .then((entry)=> {
        this.entry = entry
      })
  }



}
