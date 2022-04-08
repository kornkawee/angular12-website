import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  // ตัวแปร Array
  footDeta: any = [];

  constructor(private service: OrderDetailsService) {}

  ngOnInit(): void {
    this.footDeta = this.service.foodDetails;
  }

  
}
