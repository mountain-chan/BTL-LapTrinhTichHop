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
  
  getGiaoVienById(idGiaoVien: number): Observable<any> {
    return this.http.get(`${getGiaoVienByIdUrl}?idGiaoVien=${idGiaoVien}`);
  }

  createGiaoVien(data: any): Observable<any> {
    return this.http.post(`${createGiaoVienUrl}`, data);
  }

  updateGiaoVien(idGiaoVien: any, data: any): Observable<any> {
    return this.http.put(`${updateGiaoVienUrl}?idGiaoVien=${idGiaoVien}`, data);
  }

  deleteGiaoVien(idGiaoVien: number): Observable<any>{
    return this.http.delete(`${deleteGiaoVienUrl}?idGiaoVien=${idGiaoVien}`)
  }

}
