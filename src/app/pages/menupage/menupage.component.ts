import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css'],
})
export class MenupageComponent implements OnInit {
  // สร้างตัวแปร
  getMenuId: any;
  menuData: any;

  constructor(
    private rarameter: ActivatedRoute,
    private service: OrderDetailsService
  ) {}

  ngOnInit(): void {
    // สร้างตัวแปรมารับค่า parameter (id) ที่ส่งมา
    // ดึงเอาเฉพาะค่าจาก id
    this.getMenuId = this.rarameter.snapshot.paramMap.get('id');
    // console.log("Para",this.getMenuId);
    // เรียกใช้ function เมื่อโหลดเว็บเสร็จ
    this.getDataFormID();
  }

  getDataFormID() {
    // console.log("Para",this.getMenuId);

         //ถ้ามีข้อมูลใน getMenuId
    if (this.getMenuId) {
 
// สร้างตัวแปรมารับค่า Array /filter = ค้นหา
// จากการค้นหาข้อมูลใน service ตาม id
      this.menuData = this.service.foodDetails.filter((value) => {
        //return ค่า ออกนอก function
        return value.id == this.getMenuId;
      });
    }
    console.log(this.menuData);
    
  }
}
