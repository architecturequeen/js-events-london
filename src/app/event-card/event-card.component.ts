import { Component, OnInit, Input } from '@angular/core';
import Event from './shared/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.sass']
})
export class EventCardComponent implements OnInit {
  constructor() {}

  @Input() event: Event;

  ngOnInit() {}
}
