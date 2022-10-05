import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MoradoresService {

  constructor(private http: HttpClient) { }

  getById (idMorador: any) {
    return this.http.get<any>(`${environment.apiUrl}/moradores/${idMorador}`);
  }

  findAllPaginated (pager: PageEvent, query?: string | null){
    let params = new HttpParams()
      .append('page', pager.pageIndex)
      .append('size', pager.pageSize);
    if (query) params = params.append('query', query);
    return this.http.get<any>(`${environment.apiUrl}/moradores/all`, {params});
    }

  create (formData: Object) {
    return this.http.post<any>(`${environment.apiUrl}/moradores`, formData);
  }

  update (formData: Object, idMorador: number) {
    return this.http.put<any>(`${environment.apiUrl}/moradores/${idMorador}`, formData);
  }

  delete (idMorador: number) {
    return this.http.delete<any>(`${environment.apiUrl}/moradores/${idMorador}`);
  }

  findAllAptos(){
    return this.http.get<any>(`${environment.apiUrl}/apartamentos/all`)
  }

  findAllList(query?: string | null){
    let params = new HttpParams();
    if(query) params = params.append('query', query);
    return this.http.get<any>(`${environment.apiUrl}/moradores/allList`, {params})
  }

  importMorador(file: any){
    const formData = new FormData();
    formData.append('file',file);
    return this.http.post(`${environment.apiUrl}/moradores/import`,formData);
  }
}
