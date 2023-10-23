import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home-app',
    template: `<h3>Главная</h3>`
})
export class HomeComponent {
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      console.log('subscribe data', data);
    });
  }
}
