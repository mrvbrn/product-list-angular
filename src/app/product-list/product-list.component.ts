import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: any[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDay: 'March 12, 2021',
      description: '15 gallon capacity rolling',
      price: '32.99',
      starRating: '4.2',
      imageUrl:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-d4hJsrnWnCvYp2uuLIXV1dIl7DgHg_vCqBREhvGssvyvGeTb1nMsZqv8A_UZF9-spfg0_ji-pA&usqp=CAc'
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDay: 'May 21, 2021',
      description: 'Curved claw steel hammer',
      price: '8.9',
      starRating: '4.8',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3NRASvujB2TBTK4Mog9uyWyegKkuiN53wzNVWKwwKfzvBOj6QANkajBcpILpyrdZ9RK_b5YI&usqp=CAc'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
