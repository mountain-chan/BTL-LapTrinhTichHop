import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { getAllGiaoVienUrl, getGiaoVienByIdUrl, getGiaoVienByBoMonUrl, createGiaoVienUrl, updateGiaoVienUrl, deleteGiaoVienUrl, searchGiaoViendUrl, getGiaoVienByBaiBaoUrl, getGiaoVienByDeTaiUrl, getGiaoVienBySachUrl } from '../../enums/url.enum';

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

  getGiaoVienByBaiBao(idBaiBao: number): Observable<any> {
    return this.http.get(`${getGiaoVienByBaiBaoUrl}?id=${idBaiBao}`);
  }

  getGiaoVienByDeTai(idDeTai: number): Observable<any> {
    return this.http.get(`${getGiaoVienByDeTaiUrl}?id=${idDeTai}`);
  }

  getGiaoVienBySach(idSach: number): Observable<any> {
    return this.http.get(`${getGiaoVienBySachUrl}?id=${idSach}`);
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
