import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { CustomReuseStrategy } from "../../../../CustomReuseStrategy";
import { filter, map, mergeMap } from "rxjs/operators";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [CustomReuseStrategy]
})
export class HomePageComponent implements OnInit {


  ngOnInit() {
  }
  //默认不展开左侧菜单
  isCollapsed = true
  // 路由列表
  menuList = [];
  // 当前选择的tab index
  currentIndex = -1;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
    // 路由事件
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .pipe(
        map(() => this.activatedRoute)
      )
      .pipe(
        map(route => {
          while (route.firstChild) { route = route.firstChild; }
          return route;
        })
      )
      .pipe(
        filter(route => route.outlet === 'primary')
      )
      .pipe(
        mergeMap(route => route.data)
      )
      .subscribe((event) => {
        const menu = { ...event };
        menu.url = this.router.url
        const url = menu.url;
        const exitMenu = this.menuList.find(info => info.url === url);
        if (!exitMenu && menu.url !== '/home' && menu.url !== '/') {// 如果不存在那么不添加，
          this.menuList.push(menu);
        }
        this.currentIndex = this.menuList.findIndex(p => p.url === url);
      })
  }

  // 关闭选项标签
  closeUrl(url) {
    // 当前关闭的是第几个路由
    const index = this.menuList.findIndex(p => p.url === url);
    // delete CustomReuseStrategy.handlers[module];
    CustomReuseStrategy.deleteRouteSnapshot(url)
    if (this.menuList.length === 1) {
      // 删除复用
      this.menuList.splice(index, 1);
      this.router.navigate(['home']);
    } else {
      // 删除复用
      this.menuList.splice(index, 1);
      // 如果当前删除的对象是当前选中的，那么需要跳转
      if (this.currentIndex === index) {
        // 显示上一个选中
        let menu = this.menuList[index - 1];
        if (!menu) {// 如果上一个没有下一个选中
          menu = this.menuList[index];
        }
        // 跳转路由
        this.router.navigate([menu.url]);
      }
    }
  }
  /**
   * tab发生改变
   */
  nzSelectChange($event) {
    this.currentIndex = $event.index;
    const menu = this.menuList[this.currentIndex];
    // 跳转路由
    this.router.navigate([menu.url]);
    /*  console.log(menu.url)*/
  }

  onClickMenuList(data: string) {
    this.router.navigate([data]);
    console.log(data)
  }
}
