import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'onAir';
  info : Object;
  
  constructor(private apiService: ApiService){
  }

  ngOnInit(){
    this.apiService.getHome().then(res => {
      this.info = res;
      console.log('home', res)
      
    })
    
      
    
    
  }


//   onActivate() {
//     let scrollToTop = window.setInterval(() => {
//         let pos = window.pageYOffset;
//         if (pos > 0) {
//             window.scrollTo(0, pos-200); // how far to scroll on each step
//         } else {
//             window.clearInterval(scrollToTop);
//         }
//     }, );
// }


  
}


