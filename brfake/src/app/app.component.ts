import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent {
  constructor(private router:Router) { }
  showHeader: boolean = true;
  local = '';
  
  title = 'brfake';

  ngOnInit(): void {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.showHeader = event.url !== '/login';
    //   }
      
    // });

    this.currentLocation();
  }

  currentLocation () {
    this.local = window.location.pathname;
    
    if(this.local === "/login" || this.local === "/createAccount") {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }
}
