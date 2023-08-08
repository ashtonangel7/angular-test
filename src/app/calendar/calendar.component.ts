import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  public selectedDate = new Date();

  ngOnInit(): void {
    //throw new Error("Testing error.");
  }
}
