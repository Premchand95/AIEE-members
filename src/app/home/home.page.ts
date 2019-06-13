/*
;==========================================
; Title: Mobile Application to view AIEE members
; Author: Prem chand Avanigadda
; Date: 6/13/2019
;==========================================
*/

/* Importing moudles to page*/
import { Component } from "@angular/core";
import { HTTP, HTTPResponse } from "@ionic-native/http/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  /* class members to hold inputs from user*/
  public res: any;
  private result: number;
  private page: number;

  /* initializing http variable in constructor */
  constructor(private http: HTTP) {}

  //method getList gets all AIEE members from the API
  public getList(): void {
    let url = "https://randomuser.me/api/";
    //setting data serializer to JSON
    this.http.setDataSerializer("json");
    let headers = { Accept: "application/json" };
    //setting parameters
    let parameters = {
      results: this.result.toLocaleString(),
      pages: this.page.toLocaleString()
    };
    //calling GET method
    this.http.get(url, parameters, headers).then(
      data => {
        //parsing http responce to JSON object
        this.res = JSON.parse(data.data).results; // data received by server
      },
      (value: HTTPResponse) => {
        console.log(value);
      }
    );
  }
}
