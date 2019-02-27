import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() page: any;
  @Output() changePage: EventEmitter<Number> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  nzPageIndexChange(curPage: Number): void {
    this.page.curPage = curPage;
    this.changePage.emit(curPage);
  }
}
