import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response} from '@angular/http'

@Injectable()
export class EntriesService {
 API_URL ='http://localhost:3000'

 idEntry: number;
 
 constructor(private http: Http) { }

 getList() :Promise<any> {
   return this.http.get(`${this.API_URL}/journal-entries`)
   .toPromise()
   .then((res: Response) => res.json())
 }

 getEntry(id) :Promise<any> {
  return this.http.get(`${this.API_URL}/journal-entries/${id}`)
   .toPromise()
   .then((res: Response) => res.json())
 }

}
