import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',

})
export class MainComponent implements AfterViewInit {
  constructor() {}
  swiper: Swiper | undefined;

  ngOnInit() {
      // this.swiper = new Swiper('.swiper-container', {
      //     // Swiper options here
      //     modules: [Navigation, Pagination]
      // });
  }

  ngAfterViewInit(): void {

    this.swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      // Responsive breakpoints
      // breakpoints: {
      //   // when window width is >= 320px
      //   768: {
      //     slidesPerView: 2,
      //     spaceBetween: 20
      //   },
      //   // when window width is >= 480px
      //   992: {
      //     slidesPerView: 3,
      //     spaceBetween: 30
      //   }
      // },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
    
    // this.swiper = new Swiper('.slide-container', {
    //   slidesPerView: 3,
    //   spaceBetween: 25,
    //   loop: false, 
    //   centeredSlides: false,
    //   fadeEffect: {
    //     crossFade: true
    //   },
    //   grabCursor: true,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     dynamicBullets: true
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   breakpoints: {
    //     0: {
    //       slidesPerView: 1,
    //     },
    //     520: {
    //       slidesPerView: 2,
    //     },
    //     950: {
    //       slidesPerView: 3,
    //     },
    //   },
    // });
  }


    slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
      slidesToShow: 4, 
      slidesToScroll: 4,
      dots: true,
      autoplay: true,
      initialSlide: 3,
      infinite: true,
      autoplaySpeed: 1000,
    };
  
  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }
  
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }

}
