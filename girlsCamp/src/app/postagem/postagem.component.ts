import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css'],
})
export class PostagemComponent implements OnInit {
  constructor(
    private router: Router,
    private postagemService: PostagemService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      alert('Ops! Sua sessão terminou...');
      this.router.navigate(['/login']);
    }
    console.log(environment);
    this.postagemService.refreshToken();

    this.findAllPostagem();
  }

  postagem: Postagem = new Postagem();

  listaPostagem: Postagem[];

  findAllPostagem() {
    this.postagemService.getAll().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp;
    });
  }

  cadastrar() {
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
