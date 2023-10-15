import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AccountService } from 'src/app/account/shared/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  username = localStorage.getItem('usuario');
  showUser: boolean = true;
  local: string = '';
  constructor(
    private accountService: AccountService,
    private router: Router) { }

   

  ngOnInit(): void {
    this.currentLocation();
  }

  currentLocation () {
    this.local = window.location.pathname;
    // || this.local === "/createAccount"
    if(this.local === "/appHome") {
      this.showUser = false;
    } else {
      this.showUser = true;
    }
  }

  goToLogin() {
    window.location.href = '/login';
  }
  goToLogUp() {
    window.location.href = '/createAccount';
  }
  

  showModalConfig() {
   const modalConfig = document.getElementById('modalConfig');
   if(modalConfig != null) {
    modalConfig.style.display = 'block';
   }
  }

  closeModalConfig() {
   const modalConfig = document.getElementById('modalConfig');
   if(modalConfig != null) {
    modalConfig.style.display = 'none';
   }
  }

  showModalSuporte() {
    const modalSuport = document.getElementById('modalSuport');
    if(modalSuport != null) [
      modalSuport.style.display = 'block'
    ]
  }
  closeModalSuporte() {
    const modalSuport = document.getElementById('modalSuport');
    if(modalSuport != null) {
      modalSuport.style.display = 'none'
    }
  }

  logout() {
    this.accountService.logout();
    window.location.href = 'appHome';
  }

}
