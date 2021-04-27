import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { MustMatch } from 'src/app/validators/must-match';
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
    private readonly fb: FormBuilder,
    private readonly registerService: RegisterService,
  ) {
    this.navbarService.setCurrentNavbarState(this.currentNavbarState);

    this.formGroup = this.fb.group({
      firstName: ['', [Validators.required]],
      secondName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],

      cnpj: ['', Validators.required],
      accountable: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      secondEmail: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      business:['', Validators.required],

      motoboy: ['', Validators.required],
      delivery: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  /**
   * Atributo que guarda as onformações do formulário
   */
  public formGroup: FormGroup;

  /**
   * Atributo que guarda o valor que o navbar deveria ter nesta página
   */
  public currentNavbarState: NavbarStateEnum = NavbarStateEnum.ESTABLISHMENT;

  /**
   * Atributo que informa caso algum erro tenha ocorrido no cadastro
   */
  public error: boolean = false;

  /**
   * Método executado quando se envia o formulário
   */
  public async onSubmit() {
    if (this.formGroup.invalid){
      console.log('invalido', await this.formGroup.getRawValue());
      this.error = true;
      return;
    }

    console.log(this.formGroup.getRawValue());

    const payload = this.formGroup.getRawValue();

    const result = await this.registerService.registerDelivery(payload);

    if (!result) {
      this.error = true;
    }
  }

}
