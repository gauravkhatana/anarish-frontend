import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

  products = [
    { name: 'UI/UX Design' },
    { name: 'Product Development' },
    { name: 'Digital Marketing & SEO' },
    { name: 'Engagement Models' }
];
productDescriptions = [
    { info: 'Detailed planning and UI/UX design blueprints to guide the creative process.' },
    { info: 'Comprehensive strategies for developing robust and scalable products.' },
    { info: 'Effective digital marketing techniques and SEO optimization.' },
    { info: 'Various engagement models to suit different project needs and client requirements.' }
];

activeIndex: number = 0; 

setActive(index: number): void {
    this.activeIndex = index;
}

colors = ['#5EE0F7', '#EBAAFA', '#F1C40F', '#7CD9A0'];
getBackgroundColor(): string {
    return this.colors[this.activeIndex];
}

}
