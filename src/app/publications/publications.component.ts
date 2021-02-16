import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent implements OnInit {
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
}
