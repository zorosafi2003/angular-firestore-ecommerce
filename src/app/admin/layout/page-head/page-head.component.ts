import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-page-head',
  templateUrl: './page-head.component.html',
  styleUrls: ['./page-head.component.scss']
})
export class PageHeadComponent implements OnInit {
  title;

  constructor(private _Router: Router, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this._Router.navigated) {
      this.title = this._ActivatedRoute.snapshot.firstChild.data.title;
    }
    this._Router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((route: ActivatedRoute) => {
      this.title = this._ActivatedRoute.snapshot.firstChild.data.title;
    });
  }

}
