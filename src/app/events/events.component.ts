import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../Models/event.interface';
import { EventService } from '../Services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events : IEvent[] = [];

  constructor(
    private router: Router,
    private eventService : EventService
  ) {

  }
  ngOnInit(): void {
    this.events = this.eventService.getAllEvents();
  }

  onEventClick(id: number) {
    this.router.navigate(['/event/' + id]);
  }
}
