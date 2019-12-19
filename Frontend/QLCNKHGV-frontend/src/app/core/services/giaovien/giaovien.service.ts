import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { getAllGiaoVienUrl } from '../../enums/url.enum';

@Injectable({
  providedIn: 'root'
})
export class GiaoVienService {
  constructor(
    private http: HttpClient) {
  }

  getAllGiaoVien(): Observable<any> {
    return this.http.get(`${getAllGiaoVienUrl}`);
  }

}
