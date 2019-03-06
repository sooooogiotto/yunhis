import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { MaterialManufactureronaryService } from './material-manufactureronary.service';
import { HttpParams } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { StaticDataService } from 'src/app/static-data.service';
@Component({
  selector: 'app-material-manufactureronary',
  templateUrl: './material-manufactureronary.component.html',
  styleUrls: ['./material-manufactureronary.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class MaterialManufactureronaryComponent implements OnInit {
  /** 数据对象 */
  manufactureronary: object;
  /** 分页对象 */
  page: object = {
    curPage: 1,
    pagestart: 0,
    pagenum: 10000,
    pageCount: 0
  }
  /** 控制模态窗 */
  addIsVisible: boolean = false;
  detailIsVisible: boolean = false;
  deleteIsVisible: boolean = false;
  isEdit: boolean = false;
  /** 构造form表单对象 */
  conditionForm: FormGroup = this.fb.group({
    status: ['1'],
    state: [''],
    mid: [''],
    name: ['']
  })
  /** list数据 */
  dataSet: object[] = []
  /** 获取生产商List数据 */
  getmanufactureronary(page: object): void {
    for (let i in page) {
      this.page[i] = page[i]
    }
    // this.conditionForm.patchValue({ status: '0' })
    this.mmService.getManufactureronaryList(new HttpParams({ fromObject: Object.assign(this.conditionForm.value, this.page) })
    ).subscribe(
      data => {
        if (data['data']) {
          this.getmanufactureronaryCount();
          data['data'] = (data['data'].filter((item: object) => item['status'] !== '0'))
          this.dataSet = data['data'];
          //this.page['pageCount'] = this.dataSet.length;
        } else {
          if (this.page['pagestart'] !== 0) {
            --this.page['curPage'];
            this.page['pagestart'] = this.page['pagestart'] - +this.page['pagenum'];
            this.getmanufactureronary(this.page);
          } else {
            this.dataSet = [];
          }
        }
      }
    )
  }
  /** 获取生产商ListCount */
  getmanufactureronaryCount(): void {
    this.mmService.getManufactureronaryCount(new HttpParams({ fromObject: this.conditionForm.value })
    ).subscribe(
      data => (this.page['pageCount'] = data['count'])
    )
  }
  /** 弹出新入库弹出框 */
  showAddModal(): void {
    this.manufactureronary = {};
    this.isEdit = false;
    this.addIsVisible = true;
  }
  /** 弹出修改弹出框 */
  showUpdateModal(manufactureronary: object): void {
    this.isEdit = true
    this.manufactureronary = manufactureronary ? manufactureronary : {};

    this.mmService.getManufactureronary(new HttpParams({ fromObject: { "id": manufactureronary['id'] } })
    ).subscribe(data => {
      this.manufactureronary = data['data'][0]
      if (this.manufactureronary['companyaddr']) {
        this.staticDataService.setPUAdata(this.manufactureronary['companyaddr'], this.manufactureronary);
      }
      this.addIsVisible = true;
    })
  }
  /** 关闭新入库弹出框 */
  closeModal(flag: boolean): void {
    this.addIsVisible = false
    /**是否点击保存 */
    if (flag) {
      /**是否点击修改 */
      if (this.isEdit) {
        this.mmService.putManufactureronary(this.manufactureronary).subscribe((res: any) => {
          /**后台是否有修改条数 */
          if (0 < +res['count']) {
            this.message.create('success', '操作成功！');
            /**根据id匹配到现有表格的数据  */
            this.dataSet.map((item, index) => {
              if (item['id'] === this.manufactureronary['id']) {
                /**手动遍历对象赋值  */
                for (let i in this.dataSet[index]) {
                  this.dataSet[index][i] = this.manufactureronary[i]
                }
              }
            });
          } else {
            this.message.create('error', '操作失败！');
          }
        })
      } else {
        this.mmService.postmanufactureronary(this.manufactureronary).subscribe((res: any) => {
          /**后台是否有新增条数 */
          if (res) {
            this.message.create('success', '操作成功！');
            /**添加到当前的list数据中 */
            this.getmanufactureronary(this.page);
          } else {
            this.message.create('error', '操作失败！');
          }
        })
      }
    }
  }
  /** 弹出详情弹出框 */
  showDetailModal(manufactureronary: object): void {
    //查询详情接口
    this.mmService.getManufactureronary(new HttpParams({ fromObject: { "id": manufactureronary['id'] } })
    ).subscribe(data => {
      this.detailIsVisible = true;
      this.manufactureronary = data['data'][0];
    })
  }
  /** 关闭详情弹出框 */
  closeDetailModal(isVisible: boolean): void {
    this.detailIsVisible = isVisible
  }
  /** 显示删除弹出框 */
  showDeleteConfirm(data: object): void {
    this.deleteIsVisible = true;
    this.manufactureronary = data;
  }
  /** 关闭删除弹出框，并判断是否执行删除方法 close delete confirm window also judge is execute delete() */
  isDelete(flag: boolean): void {
    this.deleteIsVisible = false;
    if (flag) this.putManufactureronary(this.manufactureronary)
  }
  /** 删除(逻辑) */
  putManufactureronary(data: object): void {
    data['status'] = '0';
    this.mmService.putManufactureronary(data
    ).subscribe(res => {
      if (0 < +res['count']) {
        this.message.create('success', '删除成功！');
        this.getmanufactureronary(this.page);
      }
    })
  }

  constructor(
    private fb: FormBuilder,
    private mmService: MaterialManufactureronaryService,
    private message: NzMessageService,
    private staticDataService: StaticDataService
  ) { }

  ngOnInit(): void {
    this.page['pagenum'] = 10;
    this.getmanufactureronary(this.page);
  }
}
