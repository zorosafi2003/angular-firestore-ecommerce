import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit , AfterViewInit {


  constructor() { }

  ngOnInit() {
  } 

  ngAfterViewInit() {
    feather.replace();
  }

}
