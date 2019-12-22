import { Component, OnInit } from '@angular/core';
import { GiaoVienService } from 'src/app/core/services/giaovien/giaovien.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {
  
  resultSearchUsers: any[] = [];
  focused = false;
  constructor(
    private giaoVienService: GiaoVienService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onNameChange(searchValue: string): void { 

    if(!this.focused) this.focused = true;

    this.giaoVienService.searchGiaoVien(searchValue)
      .subscribe((res) => {
        if (res.status) {
          this.resultSearchUsers = res.data;
        }
      });
  }

  detailUser(id: any) {
    return this.router.navigateByUrl(`/giaovien?id=${id}`);
  }

  onClickOutSide() {
    if(this.focused) this.focused = false;
    this.resultSearchUsers = [];
  }

}
