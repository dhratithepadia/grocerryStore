import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Iproduct } from '../product';
import { ICategory } from '../category';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    
    private url:string = "/assets/files/data.json"
    private _url:string = "/assets/files/category.json";
  
    constructor(private http:HttpClient) { }

    getAllData():Observable<Iproduct[]>{
      return this.http.get<Iproduct[]>(this.url)
    }

    getCategory():Observable<ICategory[]>{
      return this.http.get<ICategory[]>(this._url)
    }

    }
  
