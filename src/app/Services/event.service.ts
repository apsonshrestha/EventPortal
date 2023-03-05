import { Injectable } from '@angular/core';
import { IEvent } from '../Models/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events : IEvent[] = [
    {
      id: 1,
      title: 'Event 1',
      date: new Date('2019-01-28'),
      description: 'This is the sample Description for Event 1 that can be multiple line. This is the sample Description for Event 1 that can be multiple line. ',
      notes: 'This is a simple Notes for Event 1. ',
    },
    {
      id: 2,
      title: 'Event 2',
      date: new Date('2019-02-03'),
      description: 'This is the sample Description for Event 2 that can be multiple line. This is the sample Description for Event 2 that can be multiple line. ',
      notes: 'This is a simple Notes for Event 2. ',
    },
    {
      id: 3,
      title: 'Event 3',
      date: new Date('2019-03-04'),
      description: 'This is the sample Description for Event 3 that can be multiple line. This is the sample Description for Event 3 that can be multiple line. ',
      notes: 'This is a simple Notes for Event 3. ',
    },
  ];
  constructor() { }

  getAllEvents() {
    return this.events;
  }

  getEventById(id: number) {
    if (this.events.findIndex(i => i.id == id) > -1) {
      return this.events.filter(x => x.id == id)[0];
    } else {
      return null;
    }
  }
}
