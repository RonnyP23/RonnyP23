import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  username = localStorage.getItem('usuario');
  
  constructor() { }

  ngOnInit(): void {
  }

  // @ViewChild('modalConfig')
  // modalConfig!: ElementRef;

  // @ViewChild('modalSuport')
  // modalSuport!: ElementRef;

  showModalConfig() {
    debugger
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

}
