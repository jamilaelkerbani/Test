import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentLang: string;
  language='fr';

constructor(private translate: TranslateService){
  this.translate.setDefaultLang('fr');
  this.currentLang = 'fr';
}
changelang(event:any){
  const lang = event.target.value;
  this.translate.use(lang);
  this.currentLang = lang;

}
changeLanguage():void{
  if(this.language==='fr'){
    this.language='en';
  }else{
    this.language='fr'
  }
  this.translate.use(this.language);
}
}
