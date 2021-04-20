import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarStateEnum } from '../../models/enums/navbar-state.enum';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {

  constructor(
    private readonly navbarService: NavbarService,
    private readonly router: Router
  ) {
    this.navbarSubscription = this.navbarService.getCurrentNavbarState$().subscribe(currentState => {
      this.currentNavbarState = currentState;
    })
  }

  /**
   * Atributo que guarda os tipos possiveis de estados para o enum
   */
  public navbarState: typeof NavbarStateEnum = NavbarStateEnum;

  /**
   * Atributo que guarda o estado atual do navbar
   */
  public currentNavbarState: NavbarStateEnum;

  /**
   * Inscrição no observable que guarda o estado do navbar
   */
  private navbarSubscription: Subscription;

  /**
   * OnDestroy angular lifeCicle Executado quando o componente é destuido
   */
  public ngOnDestroy() {

  }

  /**
   * Executado ao navegar usando o navbar da home
   */
  public async onNavigate(state: NavbarStateEnum, link: string) {
    this.navbarService.setCurrentNavbarState(state);
    this.router.navigateByUrl(link);
  }

}
