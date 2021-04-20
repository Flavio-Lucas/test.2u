import { Component, OnInit } from '@angular/core';
import { NavbarStateEnum } from '../../../models/enums/navbar-state.enum';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.page.html',
  styleUrls: ['./establishment.page.scss'],
})
export class EstablishmentPage {

  /**
   * Construtor padrão
   */
  constructor(
    private readonly navbarService: NavbarService,
  ) {
    this.navbarService.setCurrentNavbarState(this.currentNavbarState);
  }

  /**
   * Atributo que guarda o valor que o navbar deveria ter nesta página
   */
  public currentNavbarState: NavbarStateEnum = NavbarStateEnum.ESTABLISHMENT;

}
