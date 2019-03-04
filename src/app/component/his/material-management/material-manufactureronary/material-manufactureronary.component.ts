import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { MaterialManufactureronaryService} from './material-manufactureronary.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-material-manufactureronary',
  templateUrl: './material-manufactureronary.component.html',
  styleUrls: ['./material-manufactureronary.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class MaterialManufactureronaryComponent implements OnInit {
	/** 数据对象 */
  manufacturer: object;
  /** 分页对象 */
  page: object = {
    curPage: 1,
    pageCount: 50,
    pageSize: 10
  }
  /** 控制模态窗属性 */
  addIsVisible: boolean = false;
  detailIsVisible: boolean = false;
  /** 构造form表单对象 */
  conditionForm: FormGroup = this.fb.group({
     status: ['1'],
    state: [''],
    mid: [''],
    name: [''],
  })
  /** 静态数据 */
  dataSet: object[] = []
  /** 表单提交时 */
  onSubmit(): void {
    console.warn(this.conditionForm.value)
  }
  /** 查询表格List数据 */
  getTableList(): void {
  	this.mdService.getManufacturerList(new HttpParams({fromObject:this.conditionForm.value})).subscribe(
  		data=>{
  			if(data['data']){
  				this.dataSet=data['data'];
  				this.page['pageCount'] = this.dataSet.length;
  			}
  			else{
  				this.dataSet=[];
  			}
  		}
  	)
    this.page
  }
  
  /** 弹出新入库弹出框 */
  showAddModal(): void {
    this.addIsVisible = true;
  }
  /** 弹出详情弹出框 */
  showDetailModal(manufacturer: object): void {
  	this.mdService.getManufacturer(new HttpParams({fromObject:{"id":manufacturer["id"]}}))
  	.subscribe(data=>{
  		this.detailIsVisible = true;
  		this.manufacturer=data["data"][0]
  	})
    
  }
  /** 关闭新入库弹出框 */
  closeAddModal(isVisible: boolean): void {
    this.addIsVisible = isVisible
  }
  /** 关闭详情弹出框 */
  closeDetailModal(isVisible: boolean): void {
    this.detailIsVisible = isVisible
  }
  constructor(private fb: FormBuilder, private mdService: MaterialManufactureronaryService) { }

  ngOnInit(): void {
  	this.getTableList()
  }
}
