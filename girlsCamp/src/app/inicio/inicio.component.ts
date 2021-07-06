import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@NgModule({
  imports: [ BrowserModule ],
  declarations:  [ Postagem  ],
 
})

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if (environment.token == '') {
      alert('Ops! Sua sessão terminou...')
      this.router.navigate(['/login'])
      
    }
  }

}
