import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { MaterialDictionaryService } from './material-dictionary.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-material-dictionary',
  templateUrl: './material-dictionary.component.html',
  providers: [MaterialDictionaryService],
  styleUrls: ['./material-dictionary.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class MaterialDictionaryComponent implements OnInit {
  /** 分页对象 */
  page: object = {
    curPage: 1,
    pageCount: 10,
    pageSize: 10
  }
  /** 控制模态窗属性 */
  addIsVisible: boolean = false;
  detailIsVisible: boolean = false;
  /** 构造form表单对象 */
  conditionForm: FormGroup = this.fb.group({
    clmc: [''],
    zt: [''],
  })
  stype: '5';
  filter: '1';
  /** list数据 */
  dataSet: object[] = []
  /** 弹出新入库弹出框 */
  showAddModal(): void {
    this.addIsVisible = true;
  }
  /** 弹出详情弹出框 */
  showDetailModal(): void {
    this.detailIsVisible = true;
  }
  /** 关闭新入库弹出框 */
  closeAddModal(isVisible: boolean): void {
    this.addIsVisible = isVisible
  }
  /** 关闭详情弹出框 */
  closeDetailModal(isVisible: boolean): void {
    this.detailIsVisible = isVisible
  }
  /** 获取材料字典数据 */
  getdrugmaterial(): void {
    this.mdService.getDrugmaterialList(new HttpParams({ fromObject: this.conditionForm.value })
    ).subscribe(
      data => {
        this.dataSet = data['data'] == null ? [] : data['data'];
        this.page['pageCount'] = this.dataSet.length
      }
    )
  }

  constructor(private fb: FormBuilder, private mdService: MaterialDictionaryService) { }

  ngOnInit(): void {
    this.getdrugmaterial();
  }

}
