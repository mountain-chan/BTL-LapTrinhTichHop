import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { getAllSachUrl, getSachByGiaoVienUrl, getSachByKiUrl, createSachUrl, updateSachUrl, deleteSachUrl, themTVSachUrl, getSachByIdUrl, getLoaiSachUrl } from '../../enums/url.enum';

@Injectable({
  providedIn: 'root'
})
export class SachService {
  constructor(
    private http: HttpClient) {
  }

  getLoaiSach(): Observable<any> {
    return this.http.get(`${getLoaiSachUrl}`);
  }

  getAllSach(pageSize: number, pageNumber: number): Observable<any> {
    return this.http.get(`${getAllSachUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  getSachByGiaoVien(idGiaoVien: number, nam: any, ki: number): Observable<any> {
    return this.http.get(`${getSachByGiaoVienUrl}?idGiaoVien=${idGiaoVien}&nam=${nam}&ki=${ki}`);
  }

  getSachByKi(nam: any, ki: number, pageSize: number, pageNumber: number): Observable<any> {
    return this.http.get(`${getSachByKiUrl}?nam=${nam}&ki=${ki}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  getSachById(id: number): Observable<any> {
    return this.http.get(`${getSachByIdUrl}?id=${id}`);
  }

  createSach(data: any): Observable<any> {
    return this.http.post(`${createSachUrl}`, data);
  }

  updateSach(data: any): Observable<any> {
    return this.http.put(`${updateSachUrl}`, data);
  }

  deleteSach(id: number): Observable<any>{
    return this.http.delete(`${deleteSachUrl}?id=${id}`)
  }

  themThanhVien(data: any): Observable<any> {
    return this.http.put(`${themTVSachUrl}`, data);
  }

}
