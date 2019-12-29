import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { getAllDeTaiUrl, getDeTaiByGiaoVienUrl, getDeTaiByKiUrl, createDeTaiUrl, updateDeTaiUrl, deleteDeTaiUrl, themTVDeTaiUrl, getDeTaiByIdUrl, getLoaiDeTaiUrl } from '../../enums/url.enum';

@Injectable({
  providedIn: 'root'
})
export class DeTaiService {
  constructor(
    private http: HttpClient) {
  }

  getLoaiDeTai(): Observable<any> {
    return this.http.get(`${getLoaiDeTaiUrl}`);
  }

  getAllDeTai(pageSize: number, pageNumber: number): Observable<any> {
    return this.http.get(`${getAllDeTaiUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  getDeTaiByGiaoVien(idGiaoVien: number, nam: any, ki: number): Observable<any> {
    return this.http.get(`${getDeTaiByGiaoVienUrl}?idGiaoVien=${idGiaoVien}&nam=${nam}&ki=${ki}`);
  }

  getDeTaiByKi(nam: any, ki: number, pageSize: number, pageNumber: number): Observable<any> {
    return this.http.get(`${getDeTaiByKiUrl}?nam=${nam}&ki=${ki}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  getDeTaiById(id: number): Observable<any> {
    return this.http.get(`${getDeTaiByIdUrl}?id=${id}`);
  }

  createDeTai(data: any): Observable<any> {
    return this.http.post(`${createDeTaiUrl}`, data);
  }

  updateDeTai(data: any): Observable<any> {
    return this.http.put(`${updateDeTaiUrl}`, data);
  }

  deleteDeTai(id: number): Observable<any>{
    return this.http.delete(`${deleteDeTaiUrl}?id=${id}`)
  }

  themThanhVien(data: any): Observable<any> {
    return this.http.put(`${themTVDeTaiUrl}`, data);
  }

}
