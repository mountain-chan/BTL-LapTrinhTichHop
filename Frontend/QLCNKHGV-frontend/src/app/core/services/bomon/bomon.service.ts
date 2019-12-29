import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { getAllGiaoVienUrl, getGiaoVienByIdUrl, getGiaoVienByBoMonUrl, createGiaoVienUrl, updateGiaoVienUrl, deleteGiaoVienUrl, getAllBoMonUrl } from '../../enums/url.enum';

@Injectable({
  providedIn: 'root'
})
export class BoMonService {
  constructor(
    private http: HttpClient) {
  }

  getAllBoMon(): Observable<any> {
    return this.http.get(`${getAllBoMonUrl}`);
  }
  
}
