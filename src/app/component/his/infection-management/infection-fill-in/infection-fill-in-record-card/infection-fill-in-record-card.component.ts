import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { StaticDataService } from 'src/app/static-data.service';
@Component({
  selector: 'app-infection-fill-in-record-card',
  templateUrl: './infection-fill-in-record-card.component.html',
  styleUrls: ['./infection-fill-in-record-card.component.scss', '../../../../common/modal.scss', '../../../../common/form.scss']
})
export class InfectionFillInRecordCardComponent implements OnInit {
  @Input() recordIsVisible: boolean;
  @Input() infectionId: string;
  @Input() isInfectionSecond: boolean;
  @Input() isInfectionHiv: boolean;
  @Output() closeCard: EventEmitter<object> = new EventEmitter;
  /** 是否为订正报告 */
  isRevised: string = "0";
  /** 传染病对象 */
  infection: object = {
    province: '',
    city: '',
    area: '',
    street: '',
    personGroup: '',
    caseGroup1: '',
    caseGroup2: ''
  };
  checkedArr: object[] = [];
  /** 
   * 静态数据对象组
   * p = 省份
   * c = 城市
   * a = 区
   * personGroup = 人群分类
   * personFrom = 病人来源
   */
  p: string[] = [];
  c: object = {};
  a: object = {};
  personGroup: [] = [];
  personFrom: [] = [];
  infectionSecond: string[] = ["乙型病毒性肝炎"];

  infectionHivSecond: string[] = ["艾滋病病人", "HIV", "淋病", "I期梅毒", "II期梅毒", "III期梅毒", "胎传梅毒", "隐形梅毒"];
  infectionHivThird: string[] = ["尖锐湿疣", "生殖器疱疹", "生殖道衣原体感染"]

  /** 折叠面板 */
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
  constructor(
    private sdService: StaticDataService
  ) { }

  ngOnInit() {
    this.getPersonFrom();
    this.getPersonGroup();
    this.getPUA();
    this.getInfectionGroup();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    if (changes.infectionId) {
    }
  }

  togglePanel(panel: object) {
    panel['active'] = !panel['active'];
  }

  pChange(value: string) {
    this.infection['city'] = this.c[value][0];
    this.cChange(this.infection['city']);
  }

  cChange(value: string) {
    this.infection['area'] = this.a[value][0];
  }

  checkSecondeHiv(data: object[]) {
    this.checkedArr = data.filter((d: object) => d['checked'] === true);
    this.isInfectionSecond = false;
    this.isInfectionHiv = false;
    for (let index = 0; index < this.infectionSecond.length; index++) {
      if (this.checkedArr.some(d => d['value'] === this.infectionSecond[index])) {
        this.isInfectionSecond = true;
        index = this.infectionSecond.length
      }
    }
    for (let index = 0; index < this.infectionHivSecond.length; index++) {
      if (this.checkedArr.some(d => d['value'] === this.infectionHivSecond[index])) {
        this.isInfectionHiv = true;
        index = this.infectionSecond.length
      }
    }
    if (this.isInfectionHiv) {
      for (let index = 0; index < this.infectionHivThird.length; index++) {
        if (this.checkedArr.some(d => d['value'] === this.infectionHivThird[index])) {
          this.isInfectionSecond = true;
          index = this.infectionSecond.length
        }
      }
    }
  }

  getPersonFrom() {
    this.sdService.getPersonFrom().subscribe(data => {
      this.personFrom = data;
    })
  }

  getPUA() {
    this.sdService.getPUA().subscribe(
      data => {
        this.p = data['p']
        this.c = data['c']
        this.a = data['a']
      }
    )
  }
  /** 获取人群分类 */
  getPersonGroup() {
    this.sdService.getPersonGroup().subscribe(
      data => {
        this.personGroup = data;
      }
    )
  }
  /** 获取传染病数据 */
  getInfectionGroup() {
    this.sdService.getInfectionGroup().subscribe(
      data => {
        this.panels[0]['data'] = data['first'];
        this.panels[1]['data'] = data['second'];
        this.panels[2]['data'] = data['third'];
        this.panels[3]['data'] = data['other'];
      }
    )
  }
  handleCancel(flag: string) {
    if (flag === 'b') {
      this.recordIsVisible = false;
      this.closeCard.emit({
        bIsVisible: true,
        isInfectionSecond: this.isInfectionSecond,
        isInfectionHiv: this.isInfectionHiv
      });
    } else if (flag === 'hiv') {
      this.recordIsVisible = false;
      this.closeCard.emit({
        hivIsVisible: true,
        isInfectionSecond: this.isInfectionSecond,
        isInfectionHiv: this.isInfectionHiv
      });
    } else if (flag === 'submit') {
      this.closeCard.emit({
        submit: true,
        isInfectionSecond: this.isInfectionSecond,
        isInfectionHiv: this.isInfectionHiv,
        recordIsVisible: true
      })
    } else {
      this.closeCard.emit({
        close: true,
        isInfectionSecond: this.isInfectionSecond,
        isInfectionHiv: this.isInfectionHiv
      })
    }
  }

}
