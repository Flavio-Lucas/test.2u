import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarStateEnum } from '../../../models/enums/navbar-state.enum';
import { NavbarService } from '../../../services/navbar.service';
import { RegisterService } from '../../../services/register.service';
import { MustMatch } from '../../../validators/must-match';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.page.html',
  styleUrls: ['./collaborator.page.scss'],
})
export class CollaboratorPage {

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
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required],
      rg: ['', Validators.required],
      cnpj: ['', Validators.required],
      city: ['', Validators.required],

      bank: ['', Validators.required],
      accountType: ['', Validators.required],
      agency: ['', Validators.required],
      name: ['', Validators.required],
      cpf: ['', Validators.required],

      vehicle: ['', Validators.required],
      vehicleColor: ['', Validators.required],
      board: ['', Validators.required],
      cnh: ['', Validators.required],
      vehicleDoc: ['', Validators.required],
      photo: ['', Validators.required],

      terms: [null, Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  /**
   * Atributo que guarda as onformações do formulário
   */
  public formGroup: FormGroup;

  /**
   * Atributo que guarda o valor que o navbar deveria ter nesta página
   */
  public currentNavbarState: NavbarStateEnum = NavbarStateEnum.DELIVERY;

  /**
   * Atributo que informa caso algum erro tenha ocorrido no cadastro
   */
  public error: boolean;

  public async onSubmit() {
    if (this.formGroup.invalid){
      return;
    }

    const payload = this.formGroup.getRawValue();

    const result = await this.registerService.registerDelivery(payload);

    if (!result) {
      this.error = true;
    }
  }

}
