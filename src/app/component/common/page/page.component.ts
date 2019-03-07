import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() page: any;
  @Output() changePage: EventEmitter<object> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  nzPageIndexChange(curPage: number): void {
    this.page['curPage'] = curPage;
    this.page['pagestart'] = (+curPage - 1) * +this.page.pagenum;
    this.changePage.emit(this.page)
    console.log(curPage)
  }
  nzPageSizeChange(pagenum: number): void {
    this.page['curPage'] = 1;
    this.page['pagestart'] = (1 - 1) * +pagenum;
    this.page['pagenum'] = pagenum;
    this.changePage.emit(this.page)   
  }
}
