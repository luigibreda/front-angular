import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MenuTopoComponent } from './components/menu-topo/menu-topo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, MenuLateralComponent, MenuTopoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login-page';

  constructor(private router: Router) { }

}

