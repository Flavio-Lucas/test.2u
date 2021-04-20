//#region Imports

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RegisterPayload } from '../models/payloads/register.payload';
import { DeliveryProxy } from '../models/proxies/delivery.proxy';

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
    private readonly http: HttpClient,
  ) { }

  //#endregion

  //#region register Methods

  private readonly onHttpError: Subject<HttpErrorResponse> = new Subject<HttpErrorResponse>();

  /**
   * Método que realiza a registro de um entregador
   *
   * @param payload As informações necessárias para registrar
   */
  public async registerDelivery(payload: RegisterPayload): Promise<AsyncResult<DeliveryProxy>> {
    return await this.http.post('', payload).toPromise().then((data: DeliveryProxy) => {
      return { success: data };
    });

    // resolvi não tratar os erros por conta do tempo
  }
}


/**
 * A interface que representa um resultado obtido de forma assincrona
 */
export interface AsyncResult<T> {

  /**
   * O resultado quando ocorre tudo certo
   */
  success?: T;

  /**
   * O resultado quando dá algum problema
   */
  error?: HttpErrorResponse;

}
