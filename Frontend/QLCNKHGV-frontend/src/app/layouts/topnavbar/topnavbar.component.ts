import { Component, OnInit, ElementRef } from '@angular/core';
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
    private ref: ElementRef,
  ) { }

  ngOnInit() {
  }

  onNameChange(searchValue: string): void { 

    if(!this.focused) this.focused = true;

    this.giaoVienService.searchGiaoVien(searchValue)
      .subscribe((res) => {
        this.resultSearchUsers = res;
      });
  }

  detailUser(id: any) {
    return this.router.navigateByUrl(`/giaovien-detail?id=${id}`);
  }

  onClickOutSide($event: MouseEvent) {
    if (this.ref.nativeElement.contains($event.target)) {
      if(this.focused) this.focused = false;
      this.resultSearchUsers = [];
    }
  }

  // onClickOutSide() {
  //   if(this.focused) this.focused = false;
  //   this.resultSearchUsers = [];
  // }

}
