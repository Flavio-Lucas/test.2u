//#region Imports

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPayload } from '../models/payloads/register.payload';
import { DeliveryProxy } from '../models/proxies/delivery.proxy';
import { HttpAsyncService } from '../services/http-async.service';

//#endregion

/**
 * A classe que representa o interactor que lida com as rotas e cache da autenticação
 */
@Injectable({
  providedIn: 'root',
})
export class RegisterInteractor {
  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly http: HttpAsyncService,
  ) { }

  //#endregion

  //#region register Methods

  /**
   * Método que realiza a registro de um entregador
   *
   * @param payload As informações necessárias para registrar
   */
  public async registerDelivery(payload: RegisterPayload): Promise<{ success?: DeliveryProxy; error?: HttpErrorResponse }> {
    return await this.http.post('rota de preferencia salva no arquivo enviroment', payload);
  }
}
