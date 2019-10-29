import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
declare var $: any;
declare var Math: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    currentTime = moment();
    nightTime = moment('6:00pm', 'h:mma');
    dayTime = moment('5:00am', 'h:mma');
    isNightTime = this.currentTime.isAfter(this.nightTime);
    //isNightTime = false;

    constructor() {
        
    }

    ngOnInit() {
        $(document).ready(() => {
            // Twinkling stars
            for (var i = 0; i < 100; i++) {
                var secRand = ((Math.random() * 5) + 5);
                var infiniteRand = ((Math.random() * 5) + 5); 
                var topRand = Math.random() * $(window).height();
                var leftRand = Math.random() * $(window).width();
                var starStyle = 'position: absolute;width: 2px;height: 2px;background: rgba(255, 255, 255, 0.0);border-radius: 5px;';
                var star = `<div style="${starStyle} animation: twinkle ${secRand}s linear ${infiniteRand}s infinite; top: ${topRand}px; left: ${leftRand}px;"></div>`;
                $('.banner-stars').append(star);
            }

            // Raining meteor

        });
    }

}
