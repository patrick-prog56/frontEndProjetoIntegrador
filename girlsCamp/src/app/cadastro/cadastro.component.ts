
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user:User=new User()
  tipoUsuario: string
  confirmSenha: string

  constructor(
    private auth : AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll (0,0)
  }
  
  confirmarSenha(event:any){
    this.confirmSenha= event.target.value
  }


    tipoUser(event:any){
      this.tipoUsuario = event.target.value
    }

    cadastrar(){
      this.user.tipoUsuario=this.tipoUsuario
      if (this.user.senha!=this.confirmSenha) {
        alert('As senhas estão incorretas')
        
      }
      else{
        console.log('para aqui')
      this.auth.cadastrar(this.user).subscribe((resp:User)=>{
        this.user=resp
        this.router.navigate(['/login'])
        alert('Uhul!!! Usuário cadastrado com sucesso, agora basta logar')
      })
    }
    }
}
