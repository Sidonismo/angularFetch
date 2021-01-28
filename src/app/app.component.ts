import { Component } from '@angular/core';
import { NameService } from './name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restApi';
  zprava = '';
  jeden_znak = '';
  alfabeta = '';
  zacina_cislem = '';
  nealfanumericke = '';
  constructor(private nameService:NameService){

  }
  onSend(name : string){
    const formData : FormData = new FormData()
    formData.append('name', name)
    this.nameService.onSendService(formData).subscribe
    (res=>{
      let zprava;
      let jeden_znak;
      let alfabeta;
      let zacina_cislem;
      let nealfanumericke;
      console.log(res);
      if (res.povedene === true){
        
        zprava = res.zprava;
        jeden_znak = res.jeden_znak;
        alfabeta = res.alfabeta;
        zacina_cislem = res.zacina_cislem;
        nealfanumericke = res.nealfanumericke;
        this.zprava = zprava;
        this.jeden_znak = jeden_znak;
        this.alfabeta = alfabeta;
        this.zacina_cislem = zacina_cislem;
        this.nealfanumericke = nealfanumericke;
      }
      else if (res.povedene === false){
        this.zprava = 'Musíte zadat minimálně jeden znak!';
        this.jeden_znak = '';
        this.alfabeta = '';
        this.zacina_cislem = '';
        this.nealfanumericke = '';
        return;
      }
    },
    err=>{
      console.log(err.message);
      this.zprava = 'Nastala chyba!';
    })
  }
}
