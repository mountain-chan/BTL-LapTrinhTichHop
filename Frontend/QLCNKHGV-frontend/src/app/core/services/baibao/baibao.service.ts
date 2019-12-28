import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { getAllBaiBaoUrl, getBaiBaoByGiaoVienUrl, getBaiBaoByKiUrl, createBaiBaoUrl, updateBaiBaoUrl, deleteBaiBaoUrl, themTVBaiBaoUrl, getBaiBaoByIdUrl, getLoaiBaiBaoUrl } from '../../enums/url.enum';

@Injectable({
  providedIn: 'root'
})
export class BaiBaoService {
  constructor(
    private http: HttpClient) {
  }

  getLoaiBaiBao(): Observable<any> {
    return this.http.get(`${getLoaiBaiBaoUrl}`);
  }

  getAllBaiBao(pageSize: number, pageNumber: number): Observable<any> {
    return this.http.get(`${getAllBaiBaoUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  getBaiBaoByGiaoVien(idGiaoVien: number, nam: any, ki: number): Observable<any> {
    return this.http.get(`${getBaiBaoByGiaoVienUrl}?idGiaoVien=${idGiaoVien}&nam=${nam}&ki=${ki}`);
  }

  getBaiBaoByKi(nam: any, ki: number, pageSize: number, pageNumber: number): Observable<any> {
    return this.http.get(`${getBaiBaoByKiUrl}?nam=${nam}&ki=${ki}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  getBaiBaoById(id: number): Observable<any> {
    return this.http.get(`${getBaiBaoByIdUrl}?id=${id}`);
  }

  createBaiBao(data: any): Observable<any> {
    return this.http.post(`${createBaiBaoUrl}`, data);
  }

  updateBaiBao(data: any): Observable<any> {
    return this.http.put(`${updateBaiBaoUrl}`, data);
  }

  deleteBaiBao(id: number): Observable<any>{
    return this.http.delete(`${deleteBaiBaoUrl}?id=${id}`)
  }

  themThanhVien(data: any): Observable<any> {
    return this.http.put(`${themTVBaiBaoUrl}`, data);
  }

}
