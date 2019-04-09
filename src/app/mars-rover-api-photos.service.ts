import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MarsRoverApiPhotos{

  constructor(private http: Http) { }


  getByDateAndCamera(date:string, camera:string){
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&&api_key=sC7WTiLx7dWxCq3c7h0eq06471zhIlXYGbCfzl3d`)
  }
}
