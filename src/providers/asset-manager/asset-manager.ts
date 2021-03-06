import { Injectable } from '@angular/core';
import { ParseProvider } from '../parse/parse';
import 'rxjs/add/operator/map';

/*
  Generated class for the AssetManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AssetManagerProvider {
  public base64Image: string;


  constructor(private parseSrvc:ParseProvider) {
    parseSrvc.parseInitialize();
  }


  uploadPhoto2Parse  (filestring : string) {
    //let updater = new Subject<any>();
    let Parse = this.parseSrvc.getParseENV();
    let f = new Parse.File("upload.png", {base64 : filestring});
    let a = new Parse.Object("Asset");
    a.set("file", f);
    return a.save();
  }

}
