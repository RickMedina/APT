import { Component } from '@angular/core';
import { ɵshimHostAttribute } from '@angular/platform-browser';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
})

export class PropertyCardComponent {

  Property: any = {
    "Id": 1,
    "Type": "House",
    "Price": 235700.00
  }

}
