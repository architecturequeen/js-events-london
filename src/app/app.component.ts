import { Component } from '@angular/core';
import Event from './event-card/shared/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'js-events';
  eventList: Event[] = [
    {
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      eventBlurb: `ng-conf is a two day, single track conference focused on
    delivering the highest quality training in the Angular JavaScript framework.
     1500+ developers from across the country will
     converge on beautiful Salt Lake City, UT to
      participate in training sessions by the Google Angular team,
      and other Angular experts.`,
      eventTitle: 'Latest in Angular',
      registrationLink: '#',
      date: '22 Feb 18',
      time: '3pm',
      venueName: 'WeWork',
      venueAddress: '4 Dabe Road, SW1 5FU',
      venueCity: 'London'
    },
    {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      eventBlurb: `ng-conf is a two day, single track conference focused on
    delivering the highest quality training in the Angular JavaScript framework.
     1500+ developers from across the country will
     converge on beautiful Salt Lake City, UT to
      participate in training sessions by the Google Angular team,
      and other Angular experts.`,
      eventTitle: 'Get Ready for React',
      registrationLink: '#',
      date: '2 Feb 18',
      time: '6.30pm',
      venueName: 'WeWork',
      venueAddress: '4 Dabe Road, SW1 5FU',
      venueCity: 'London'
    },
    {
      imgUrl: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg',
      eventBlurb: `On March 26-28 the first VueConf.us took place in New Orleans, LA.
       Gregg Pollack from Vue Mastery was there to ask each of the speakers (many of which
      who were Vue Core Team members) what they're most excited about in the next year of Vue.js.
      More information and links can be found in my article here`,
      eventTitle: 'Future of Vue',
      registrationLink: '#',
      date: '15 Feb 18',
      time: '6pm',
      venueName: 'Code Node',
      venueAddress: '24 Jupiter Rd, SW6 5FU',
      venueCity: 'London'
    }
  ];
}
