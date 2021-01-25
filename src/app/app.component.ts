import { Component } from '@angular/core';
import { NameService } from './name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restApi';
  response = '';
  constructor(private nameService:NameService){

  }
  onSend(name : string){
    const formData : FormData = new FormData()
    formData.append('name', name)
    this.nameService.onSendService(formData).subscribe
    (res=>{
      console.log(res);
      this.response = res
    },
    err=>{
      console.log(err);
    })
  }
}
