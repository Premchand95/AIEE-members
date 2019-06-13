import { Component } from "@angular/core";
import { HTTP, HTTPResponse } from "@ionic-native/http/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public res: any;
  private result: number;
  private page: number;
  constructor(private http: HTTP) {}
  //method getList gets all AIEE members from the API
  public getList(): void {
    let url = "https://randomuser.me/api/";
    this.http.setDataSerializer("json");
    let headers = { Accept: "application/json" };
    let parameters = {
      results: this.result.toLocaleString(),
      pages: this.page.toLocaleString()
    };
    this.http.get(url, parameters, headers).then(
      data => {
        this.res = JSON.parse(data.data).results; // data received by server
      },
      (value: HTTPResponse) => {
        console.log(value);
      }
    );
    //iterate through Json object
  }
}
