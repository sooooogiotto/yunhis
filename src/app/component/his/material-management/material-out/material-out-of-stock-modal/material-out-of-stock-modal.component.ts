import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-material-out-of-stock-modal',
  templateUrl: './material-out-of-stock-modal.component.html',
  styleUrls: ['./material-out-of-stock-modal.component.scss', '../../../../common/form.scss']
})
export class MaterialOutOfStockModalComponent implements OnInit {
  @Input() outIsVisible: boolean;
  @Output() closeOutModal: EventEmitter<boolean> = new EventEmitter;
  auditConfirmIsVisible: boolean = false;
  isPrint: boolean = false;
  isPass: boolean = false;
  isBack: boolean = false;
  isSelectedBack: boolean = false;

  dataSet: object[] = [
    {
      'fph': '22323232'
    }
  ]
  dataSet1: object[] = [
    {
      'fph': '22323232'
    }
  ]
  dataSet2: object[] = [
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
  closeConfirm(isVisible: boolean): void {
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
