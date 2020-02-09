import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit ,AfterViewInit {


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    $('#side-menu').metisMenu();
  }

}
