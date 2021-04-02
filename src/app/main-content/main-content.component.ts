import { Component, Input, OnInit } from '@angular/core';
import { AirLines } from '../Models/Airline';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  @Input()
  airlines: AirLines[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
