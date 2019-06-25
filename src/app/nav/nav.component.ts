import { Component, OnInit } from '@angular/core';

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
    }

    showMenu(): void {
        if (this.isNavCollapse) {
            this.isNavCollapse = false;
        } else {
            this.isNavCollapse = true;
        }
    }


}
