import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-material-out-of-stock-modal',
  templateUrl: './material-out-of-stock-modal.component.html',
  styleUrls: ['./material-out-of-stock-modal.component.scss', '../../../../common/form.scss']
})
export class MaterialOutOfStockModalComponent implements OnInit {
  @Input() outIsVisible: Boolean;
  @Output() closeOutModal: EventEmitter<Boolean> = new EventEmitter;
  auditConfirmIsVisible: Boolean = false;
  isPrint: Boolean = false;
  isPass: Boolean = false;
  isBack: Boolean = false;
  isSelectedBack: Boolean = false;

  dataSet: Object = [
    {
      'fph': '22323232'
    }
  ]
  conditionForm: FormGroup = this.fb.group({
    rkrqs: [''],
    rkrqe: [''],
    ghs: [''],
    zt: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  handleCancel(): void {
    this.closeOutModal.emit(false);
  }
  closeConfirm(isVisible: Boolean): void {
    this.auditConfirmIsVisible = isVisible;
    this.isSelectedBack = isVisible;
    this.isBack = isVisible;
  }
  print(): void {
    window.print();
  }
  pass(): void {
    this.auditConfirmIsVisible = true;
  }
  back(): void {
    this.auditConfirmIsVisible = true;
  }
  showAuditConfirm() {
    this.auditConfirmIsVisible = true;
    this.isSelectedBack = true;
    this.isBack = true;
  }
}
