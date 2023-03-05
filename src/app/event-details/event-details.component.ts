import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IEvent } from '../Models/event.interface';
import { EventService } from '../Services/event.service';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  loading = true;
  id: number = 0;
  event?: IEvent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);

    this.id = Number(this.route.snapshot.paramMap.get('id'))
    if (this.id > 0) {
      this.getEvent(this.id);
    }

  }

  getEvent(id: number) {
    this.event = this.eventService.getEventById(id) || undefined;
  }

  onBackClick() {
    this.router.navigate(["/events"]);
  }

}
