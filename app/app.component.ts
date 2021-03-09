import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';

  labelHtml: any;
  labelText: any;

  constructor(private sanitizer: DomSanitizer){
    this.labelHtml = this.sanitizer.bypassSecurityTrustHtml("<b>I am sanitized HTML. <button (click)='clickme()'>Click Me</button></b>")
  }

  showAlert(text: string){
    window.alert(text);
  }
  clickme(){
    this.showAlert('success');
  }
}
