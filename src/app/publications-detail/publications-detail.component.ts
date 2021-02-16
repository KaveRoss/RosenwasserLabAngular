import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../publications.service';

@Component({
  selector: 'app-publications-detail',
  templateUrl: './publications-detail.component.html',
  styleUrls: ['./publications-detail.component.scss'],
})
export class PublicationsDetailComponent implements OnInit {
  idCounter: number = 0;
  id: any;
  _json: any;
  constructor(
    private _JSON: PublicationsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._json = this._JSON.json();
    this.id = this.route.snapshot.paramMap.get('id');
  }

  clickNext() {
    this.idCounter += 0;
  }
}
