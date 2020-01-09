import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    appTitle: string = 'Kimplenos.com';
    isNavCollapse: boolean = false;

    constructor() { }

    ngOnInit() {
        $(document).ready(() => {
            const rightNavLink = $('.right-nav .nav-link');
            rightNavLink.on('click', function() {
                const _this = $(this);
                let section = _this.data('link');
                
                rightNavLink.removeClass('active');
                _this.addClass('active');
                $('html, body').animate({
                    scrollTop: $(section).offset().top
                }, 500);
            });
        });
    }

    showMenu(): void {
        if (this.isNavCollapse) {
            this.isNavCollapse = false;
        } else {
            this.isNavCollapse = true;
        }
    }


}
