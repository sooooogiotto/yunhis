import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-material-in-order',
  templateUrl: './material-in-order.component.html',
  styleUrls: ['./material-in-order.component.scss']
})
export class MaterialInOrderComponent implements OnInit {
  @Input() materialIn: object;
  constructor() { }

  ngOnInit() {
  }

}
