import { Component } from '@angular/core';
import { AirLines } from './Models/Airline';
import { HttpService } from './Service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  airlinesList: AirLines[];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getList().subscribe(airlines => {
      this.airlinesList = airlines.filter(f=> f.name[0].toUpperCase()=="A");

    })
  }
}
