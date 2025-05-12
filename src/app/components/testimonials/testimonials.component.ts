import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  standalone: true
})
export class TestimonialsComponent implements OnInit {
  currentIndex = 0;
  totalGroups = 0;
  autoSlideInterval: any;
  slideDuration = 8000;

  ngOnInit() {
    setTimeout(() => {
      this.initCarousel();
    }, 100);
  }

  initCarousel() {
    const groups = document.querySelectorAll('.testimonial-group');
    const dots = document.querySelectorAll('.dot');
    this.totalGroups = groups.length;

    this.showGroup(0);
    this.startAutoSlide();

    // Event listeners
    document.querySelector('.carousel-next')?.addEventListener('click', () => {
      this.nextSlide();
      this.stopAutoSlide();
      this.startAutoSlide();
    });

    document.querySelector('.carousel-prev')?.addEventListener('click', () => {
      this.prevSlide();
      this.stopAutoSlide();
      this.startAutoSlide();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.showGroup(index);
        this.stopAutoSlide();
        this.startAutoSlide();
      });
    });

    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', () => this.stopAutoSlide());
      carousel.addEventListener('mouseleave', () => this.startAutoSlide());
    }
  }

  showGroup(index: number) {
    if (index >= this.totalGroups) {
      this.currentIndex = 0;
    } else if (index < 0) {
      this.currentIndex = this.totalGroups - 1;
    } else {
      this.currentIndex = index;
    }

    const groups = document.querySelectorAll('.testimonial-group');
    const dots = document.querySelectorAll('.dot');

    groups.forEach(group => group.classList.remove('active'));
    if (groups[this.currentIndex]) {
      groups[this.currentIndex].classList.add('active');
    }

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[this.currentIndex]) {
      dots[this.currentIndex].classList.add('active');
    }
  }

  nextSlide() {
    this.showGroup(this.currentIndex + 1);
  }

  prevSlide() {
    this.showGroup(this.currentIndex - 1);
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.nextSlide(), this.slideDuration);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }
}
