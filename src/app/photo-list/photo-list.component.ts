import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: [ './photo-list.component.css' ],
  providers: [ ]
})

export class PhotoListComponent {
  @Input() childPhotos;
  constructor() { }
}
