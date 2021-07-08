import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root',
})
export class PostagemService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getAll(): Observable<Postagem[]> {
    //return this.http.get<Tema[]>('https://backendthiagofaccipieri.herokuapp.com/tema',this.token);

    return this.http.get<Postagem[]>('https://girlscamp.herokuapp.com/postagens', this.token);
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    //template literals => uso de crase no lugar das aspas
    //serve para passar variáveis no endereço com padrão ${'variavel}
    return this.http.get<Postagem>(`https://girlscamp.herokuapp.com/postagens/${id}`, this.token);
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    //return this.http.post<Tema>('https://backendthiagofaccipieri.herokuapp.com/tema', tema, this.token);
    return this.http.post<Postagem>('https://girlscamp.herokuapp.com/postagens', postagem, this.token);
  }

  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>('https://girlscamp.herokuapp.com/postagens',postagem, this.token);
  }

  deletePostagem(id: number) {
    //template literals => uso de crase no lugar das aspas
    //serve para passar variáveis no endereço com padrão ${'variavel}
    return this.http.delete(`https://girlscamp.herokuapp.com/postagens/${id}`, this.token);
  }
}
