import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-menu-topo',
  standalone: true,
  imports: [],
  templateUrl: './menu-topo.component.html',
  styleUrl: './menu-topo.component.scss'
})
export class MenuTopoComponent {
  
  constructor(private loginService: LoginService) {}

  sair() {
    this.loginService.logout();
  }
}
