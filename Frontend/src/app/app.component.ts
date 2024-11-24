import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ FontAwesomeModule, RouterOutlet, RouterLink, NgbDropdownMenu, NgbDropdownToggle, NgbDropdown],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent implements OnInit, OnDestroy {
    title = 'app';
    faHome = faHome;
    constructor() {
        console.log('AppComponent.constructor');
    }

    ngOnInit(): void {
        console.log('AppComponent.ngOnInit');
    }
    ngOnDestroy(): void {
        console.log('AppComponent.ngOnDestroy');
    }
}
