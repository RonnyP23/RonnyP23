import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccountService } from 'src/app/account/shared/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  username = localStorage.getItem('usuario');
  
  constructor(private accountService: AccountService) { }

  ngOnInit() {
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
    window.location.href = '';
  }

}
