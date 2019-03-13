import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-infection-fill-in-record-card',
  templateUrl: './infection-fill-in-record-card.component.html',
  styleUrls: ['./infection-fill-in-record-card.component.scss', '../../../../common/modal.scss', '../../../../common/form.scss']
})
export class InfectionFillInRecordCardComponent implements OnInit {
  @Input() recordIsVisible: boolean;
  @Input() infectionId: string;
  @Output() closeRecordCard: EventEmitter<boolean> = new EventEmitter
  panels = [
    {
      active: false,
      disabled: true,
      name: '甲类传染病',
      customStyle: {
        'background': 'transparent',
        'border': '1px solid rgba(228, 228, 228, 1)',
        'border-radius': '4px',
        'margin-bottom': '24px'
      }
    },
    {
      active: false,
      disabled: true,
      name: '乙类传染病',
      icon: 'double-right',
      customStyle: {
        'background': 'transparent',
        'border': '1px solid rgba(228, 228, 228, 1)',
        'border-radius': '4px',
        'margin-bottom': '24px'
      }
    },
    {
      active: false,
      disabled: true,
      name: '丙类传染病',
      customStyle: {
        'background': 'transparent',
        'border': '1px solid rgba(228, 228, 228, 1)',
        'border-radius': '4px',
        'margin-bottom': '24px'
      }
    },
    {
      active: false,
      disabled: true,
      name: '其他法定管理以及重点监测传染病',
      customStyle: {
        'background': 'transparent',
        'border': '1px solid rgba(228, 228, 228, 1)',
        'border-radius': '4px',
        'margin-bottom': '24px'
      }
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  handleCancel() { }

  togglePanel(panel: object) {
    panel['active'] = !panel['active'];
  }
}
