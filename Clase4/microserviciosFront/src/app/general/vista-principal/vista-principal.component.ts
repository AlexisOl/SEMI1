import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vista-principal',
  imports: [FormsModule],
  templateUrl: './vista-principal.component.html',
  styleUrl: './vista-principal.component.css'
})
export class VistaPrincipalComponent implements OnInit {

  usuarios: Usuario[] = [];

  // valores 
  username!: string
  password!: string
  pais!: string

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: (data) => this.usuarios = data,
      error: (err) => console.error('Error al obtener usuarios', err)
    });
  }

  registrarUsuario(){

    const nuevoUsuario : Usuario = {
      username: this.username,
      password: this.password,
      pais: this.pais
    }

    this.usuarioService.registrarUsuario(nuevoUsuario).subscribe(
      (next) => {
        console.log("todo bien", next);
        
      },
      (error) => {
        console.log(error);
        
      }
    )

  }
}