import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  @Input() confirmContent: string;
  @Input() confirmIsVisible: boolean;
  @Output() closeConfirm: EventEmitter<boolean> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  handleCancel(flag: boolean) {
    this.closeConfirm.emit(flag);
  }
}
