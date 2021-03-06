import { User } from './../../shared/class/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message = 'Vous êtes déconnecté. (pikachu/pikachu)';
  public name: string;
  public password: string;

  model: User = new User();

  constructor(
    public authService: AuthService,
    private router: Router,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Connexion');
  }

  // Informe l'utilisateur sur son authentfication.
  setMessage() {
      this.message = this.authService.isLoggedIn ?
          'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
  }

  // Connecte l'utilisateur auprès du Guard
  login() {
      this.message = 'Tentative de connexion en cours ...';
      this.authService.login(this.name, this.password).subscribe(() => {
          this.setMessage();
          if (this.authService.isLoggedIn) {
              // Récupère l'URL de redirection depuis le service d'authentification
              // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
              const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/pokemon/list';
              // Redirige l'utilisateur
              this.router.navigate([redirect]);
          } else {
              this.password = '';
          }
      });
  }

  // Déconnecte l'utilisateur
  logout() {
      this.authService.logout();
      this.setMessage();
  }
  onSubmit() {
    console.log(this.model);
  }
}
