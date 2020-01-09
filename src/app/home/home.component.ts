import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
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

        });

        $(window).on('load', () => {
            // Scroll on mouse wheel
            // let pos = 0;
            // let i = 0;
            // let about = $("#sxn-about").offset().top;
            // let sections = ['#sxn-banner', '#sxn-about', '#sxn-skills', '#sxn-portfolio', '#sxn-portfolio-selected', '#sxn-inquiry'];
            // $('html, body').bind('mousewheel', _.throttle(function(e) {
            //     //console.log(e.offsetY, about);
            //     if(i <= sections.length) {
            //         $('html, body').animate({
            //             scrollTop: $(sections[i]).offset().top
            //         }, 500);
            //         i++;
            //     }
            //     console.log(i);
            // }, 3000));
            const rightNavLink = $('.right-nav .nav-link');
            const gotoFeatured = $('.goToFeatured');
            gotoFeatured.on('click', function(e) {
                e.preventDefault();
                rightNavLink.removeClass('active');
                $('#navlink-portfolio').addClass('active');
                $('html, body').animate({
                    scrollTop: $('#sxn-portfolio').offset().top
                }, 500);
            });
        });

        const pageHome = $('#pageHome');
        const navlink = $('.right-nav .nav-link');
        var i = 0, sxn = ['#sxn-intro', '#sxn-about', '#sxn-skills', '#sxn-portfolio', '#sxn-portfolio-selected', '#sxn-inquiry'];
        let activeRightNavLink = null, lastScrollTop = 0;
        $(window).on('scroll', function() {
            var scrollHeight = $(document).height();
            var windowHeight = $(window).height();
            //var scrollPosition = $(window).height() + $(window).scrollTop();
            var scrollPosition = $(window).scrollTop();
            
            if(pageHome) {
                if(scrollPosition > lastScrollTop) {
                    // Scroll down
                    if(i < 6) {
                        if( scrollPosition > $(sxn[i]).offset().top) {
                            activeRightNavLink = $(sxn[i]).data('navlink');
                            navlink.removeClass('active');
                            $(activeRightNavLink).addClass('active');
                            i++;
                        }
                    }
                    console.log('down');
                } else {
                    // Scroll up
                    if(i >= 0) {
                        if(i == 6) {
                            i = 5;
                        }
                        if(scrollPosition < $(sxn[i]).offset().top) {
                            i--;
                            activeRightNavLink = $(sxn[i]).data('navlink');
                            navlink.removeClass('active');
                            $(activeRightNavLink).addClass('active');
                        }
                    }
                    console.log('up');
                }
                lastScrollTop = scrollPosition;
            }
        });
    }

}
