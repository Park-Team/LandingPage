import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top-button',
  imports: [],
  templateUrl: './scroll-top-button.component.html',
  styleUrl: './scroll-top-button.component.css',
  standalone: true
})
export class ScrollTopButtonComponent implements OnInit {
  isVisible = false;

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  checkScroll() {
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
