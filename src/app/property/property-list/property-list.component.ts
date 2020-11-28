import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent = 1;

  properties_array: IProperty[];

  constructor(private route: ActivatedRoute, private service:HousingService ) {}

  ngOnInit(): void {

    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }

    this.service.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties_array = data;
      }, error => {
        console.log(error);
      }
    );
  }
}
