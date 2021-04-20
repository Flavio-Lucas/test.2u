import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavbarStateEnum } from '../models/enums/navbar-state.enum';

/**
 * A classe que representa o serviço que lida com estilos e estados do footer da aplicação
 */

@Injectable({
  providedIn: 'root',
})
export class NavbarService {

  /**
   * Construtor padrão
   */
  constructor() { }

  /**
   * Escuta o evento lançado para informar alterações no estado do navbar
   */
  private readonly currentNavbarState: BehaviorSubject<NavbarStateEnum> = new BehaviorSubject<NavbarStateEnum>(NavbarStateEnum.HOME);

  /**
   * metodo que retorna a referencia do Observable que diz qual é o estado atual do menu
   */
  public getCurrentNavbarState$(): Observable<NavbarStateEnum> {
    return this.currentNavbarState.asObservable();
  }

  /**
   * metodo que retorna a referencia do Observable que diz qual é estado selecionado no momento
   */
  public setCurrentNavbarState(currentColor: NavbarStateEnum): void {
    this.currentNavbarState.next(currentColor);
  }

  //#endregion

}
