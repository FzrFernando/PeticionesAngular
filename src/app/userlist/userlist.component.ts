import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Usuario } from '../interfaces/usuarios';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html'
})
export class UserlistComponent{
  users: Usuario[] = [];

  constructor(private apiService: ApiService) { }

  getUsers(): void {
    this.apiService.getUsers().subscribe(
      response => {
        this.users = response.usuarios;
      },
      error => {
        console.log('Error al obtener los usuarios:', error);
      }
    );
  }

  updateUser(userId: string) :void{
    const updatedUser = {
      // Nuevos datos del usuario
    };

    this.apiService.updateUser(userId, updatedUser).subscribe(
      response => {
        console.log('Usuario actualizado:', response);
        // Actualiza la lista de usuarios después de actualizar uno
        this.getUsers();
      },
      error => {
        console.log('Error al actualizar el usuario:', error);
      }
    );
  }
}
