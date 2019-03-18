import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { StaticDataService } from 'src/app/static-data.service';
@Component({
  selector: 'app-infection-fill-in-hiv-card',
  templateUrl: './infection-fill-in-hiv-card.component.html',
  styleUrls: ['./infection-fill-in-hiv-card.component.scss', '../../../../common/modal.scss', '../../../../common/form.scss']
})
export class InfectionFillInHivCardComponent implements OnInit {
  @Input() hivIsVisible: boolean;
  @Input() infectionId: string;
  @Input() isInfectionSecond: boolean
  @Input() isInfectionHiv: boolean
  @Output() closeCard: EventEmitter<object> = new EventEmitter
  /** 接触史 */
  meetHistory: object[] = [
    { label: "献血浆史", value: "献血浆史" },
    { label: "输血/血制品史", value: "输血/血制品史" },
    { label: "母亲阳性", value: "母亲阳性" },
    { label: "职业暴露史", value: "职业暴露史" },
    { label: "手术史", value: "手术史" },
    { label: "不详", value: "不详" }
  ]
  /** 传染病对象 */
  infection: object = {
    province: '',
    city: '',
    area: '',
    street: ''
  };
  /** 
   * 静态数据对象组
   * p = 省份
   * c = 城市
   * a = 区
   * personMarriage = 婚姻状态
   * personFrom = 病人来源
   */
  p: string[] = [];
  c: object = {};
  a: object = {};
  personFrom: [] = [];
  personMarriage: [] = [];
  personCulture: [] = [];
  infectionRoute: object[] = [];
  diseaseName: object[] = [];
  sampleSources: [] = [];
  constructor(
    private sdService: StaticDataService
  ) { }

  ngOnInit() {
    this.getPersonFrom();
    this.getPersonMarriage();
    this.getPersonCulture();
    this.getDiseaseName();
    this.getInfectionRoute();
    this.getSampleSources();
    this.getPUA();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    if (changes.infectionId) {
    }
  }

  pChange(value: string) {
    this.infection['city'] = this.c[value][0];
    this.cChange(this.infection['city']);
  }

  cChange(value: string) {
    this.infection['area'] = this.a[value][0];
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
  /** 获取婚姻状态 */
  getPersonMarriage() {
    this.sdService.getPersonMarriage().subscribe(
      data => {
        this.personMarriage = data;
      }
    )
  }
  /** 获取文化程度 */
  getPersonCulture() {
    this.sdService.getPersonCulture().subscribe(
      data => {
        this.personCulture = data
      }
    )
  }
  /** 病名 */
  getDiseaseName() {
    this.sdService.getDiseaseName().subscribe(
      data => {
        this.diseaseName = data
      }
    )
  }
  /** 感染途径 */
  getInfectionRoute() {
    this.sdService.getInfectionRoute().subscribe(
      data => {
        this.infectionRoute = data
      }
    )
  }
  /** 样本来源 */
  getSampleSources() {
    this.sdService.getSampleSources().subscribe(
      data => {
        this.sampleSources = data
      }
    )
  }
  handleCancel(flag: string) {
    if (flag === 'b') {
      this.hivIsVisible = false;
      this.closeCard.emit({
        bIsVisible: true,
        isInfectionSecond: this.isInfectionSecond,
        isInfectionHiv: this.isInfectionHiv
      });
    } else if (flag === 'hiv') {
    } else if (flag === 'submit') {
      this.closeCard.emit({
        submit: true,
        isInfectionSecond: this.isInfectionSecond,
        isInfectionHiv: this.isInfectionHiv,
        hivIsVisible: true
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
