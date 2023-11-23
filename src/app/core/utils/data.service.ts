import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private keyClient: string = "DataClient";
  constructor() { }


  public saveDataClient(client: any){
    localStorage.setItem(this.keyClient,JSON.stringify(client));
  }

  public getDataClient(): any | null {
    // @ts-ignore
    return JSON.parse(localStorage.getItem(this.keyClient));
  }

  logoutUsername(){
      localStorage.clear();
  }
}

