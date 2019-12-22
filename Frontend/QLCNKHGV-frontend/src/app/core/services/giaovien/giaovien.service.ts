import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { getAllGiaoVienUrl, getGiaoVienByIdUrl, getGiaoVienByBoMonUrl, createGiaoVienUrl, updateGiaoVienUrl, deleteGiaoVienUrl, searchGiaoViendUrl } from '../../enums/url.enum';

@Injectable({
  providedIn: 'root'
})
export class GiaoVienService {
  constructor(
    private http: HttpClient) {
  }

  getAllGiaoVien(pageSize: number, pageNumber: number): Observable<any> {
    return this.http.get(`${getAllGiaoVienUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  getGiaoVienByBoMon(idBoMon: number, pageSize: number, pageNumber: number): Observable<any> {
    return this.http.get(`${getGiaoVienByBoMonUrl}?idBoMon=${idBoMon}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  searchGiaoVien(textSearch: any): Observable<any> {
    return this.http.get(`${searchGiaoViendUrl}?textSearch=${textSearch}`);
  }

  getGiaoVienById(idGiaoVien: number): Observable<any> {
    return this.http.get(`${getGiaoVienByIdUrl}?idGiaoVien=${idGiaoVien}`);
  }

  createGiaoVien(data: any): Observable<any> {
    return this.http.post(`${createGiaoVienUrl}`, data);
  }

  updateGiaoVien(data: any): Observable<any> {
    return this.http.put(`${updateGiaoVienUrl}`, data);
  }

  deleteGiaoVien(idGiaoVien: number): Observable<any>{
    return this.http.delete(`${deleteGiaoVienUrl}?Id=${idGiaoVien}`)
  }

}
