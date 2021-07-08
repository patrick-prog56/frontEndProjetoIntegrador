import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css'],
})
export class PostagemComponent implements OnInit {

  postagem: Postagem = new Postagem();
  listaPostagem: Postagem[];

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  user: User = new User()
  idUser = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      alert('Ops! Sua sessão terminou...');
      this.router.navigate(['/login']);
    }
    console.log(environment);
    this.postagemService.refreshToken();
    this.temaService.refreshToken()

    this.findAllTema()
    this.findAllPostagem();
    console.log(this.listaTemas)
  }

  findAllPostagem() {
    this.postagemService.getAll().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp;
    });
  }

  findAllTema(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    });
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  cadastrar() {
    this.user.id = this.idUser
    this.postagem.usuario = this.user
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    this.postagemService
      .postPostagem(this.postagem)
      .subscribe((resp: Postagem) => {
        this.postagem = resp;
        alert('Tema cadastrado com sucesso!!');
        this.findAllPostagem();
        this.postagem = new Postagem();
      });
  }
}
