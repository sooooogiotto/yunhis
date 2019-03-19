import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-infection-detail',
  templateUrl: './infection-detail.component.html',
  styleUrls: ['./infection-detail.component.scss']
})
export class InfectionDetailComponent implements OnInit {
  @Input() detailIsVisible: boolean;
  @Input() infectionId: string;
  @Output() closeDetail: EventEmitter<boolean> = new EventEmitter;
  constructor() { }
  
  ngOnInit() {
  }

  handleCancel(flag: boolean): void {
    this.detailIsVisible = flag;
    this.closeDetail.emit(flag);
  }
}
