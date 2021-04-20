/**
 * A classe que representa o serviço que lida com a cadastro de usuários do aplicativo
 */
import { Injectable } from '@angular/core';
import { AsyncResult, RegisterInteractor } from '../interactors/register.interactor';
import { RegisterPayload } from '../models/payloads/register.payload';
import { DeliveryProxy } from '../models/proxies/delivery.proxy';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  //#region constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly interactor: RegisterInteractor,
  ) { }

  //#endregion

  //#region register methods

  public async registerDelivery(payload: RegisterPayload): Promise<AsyncResult<DeliveryProxy>> {
    return await this.interactor.registerDelivery(payload);
  }

  //#endregion
}
