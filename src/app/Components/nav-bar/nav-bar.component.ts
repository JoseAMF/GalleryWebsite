import { Component, OnInit, Inject, OnDestroy, ChangeDetectorRef, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  collapsed = true;
  hideNav = false;
  currentPosition;
  @Input() Home;
  @Input() SobreMim;
  @Input() Galeria;
  @Input() Contato;


  constructor(@Inject(DOCUMENT) private document: Document, private ref: ChangeDetectorRef) {
    // Adiciona um Listener para o evento de scroll na página inteira
    this.document.addEventListener('scroll', this.onContentScrolled.bind(this));
  }

  ngOnDestroy() {
    // Remove o Listener
    this.document.removeEventListener('scroll', this.onContentScrolled);
  }

  onContentScrolled(e) {
    const scroll = window.pageYOffset;
    if (scroll > this.currentPosition) {
      this.hideNav = true;
    } else {
      this.hideNav = false;
    }
    this.currentPosition = scroll;
    this.ref.detectChanges();
  }

  ngOnInit(): void {
  }

}
