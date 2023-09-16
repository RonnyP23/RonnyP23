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

  modalConfigShow = false;

  modalSuportShow = false;

  showModalConfig() {
    this.modalConfigShow = true;
  }
  
  closeModalConfig() {
    this.modalConfigShow = false;
  }
  
  showModalSuporte() {
    debugger
    this.modalSuportShow = true;
  }

  closeModalSuporte() {
    this.modalSuportShow = false
  }
}
