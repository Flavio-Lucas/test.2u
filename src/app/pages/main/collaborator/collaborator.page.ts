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
   * Variavel que recebe a imagem da CNH
   */
  public cnhInput: File;

  /**
   * Variavel que recebe a imagem da documentação do automovel
   */
  public vehicleDocInput: File;

  /**
   * Variavel que recebe a foto da pessoa com a CNH
   */
  public photoInput: File;

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
  public error: boolean = false;

  public async onSubmit() {

    if (this.formGroup.invalid || !this.cnhInput || !this.vehicleDocInput || !this.photoInput){
      console.log('invalido');
      this.error = true;
      return;
    }
    this.formGroup.controls.cnh.setValue(this.uploadImage(this.cnhInput));
    this.formGroup.controls.vehicleDoc.setValue(this.uploadImage(this.vehicleDocInput));
    this.formGroup.controls.photo.setValue(this.uploadImage(this.photoInput));

    console.log('valido', this.formGroup.getRawValue());

    const payload = this.formGroup.getRawValue();

    const result = await this.registerService.registerDelivery(payload);

    if (!result) {
      this.error = true;
    }
  }

  public onUploadImage(event: any): void {
    console.log(event.target.id);

    if (event.target.id === 'cnhInput')
      this.cnhInput = event.target.files[0];

    if (event.target.id === 'vehicleDocInput')
      this.vehicleDocInput = event.target.files[0];

    if (event.target.id === 'photoInput')
      this.photoInput = event.target.files[0];

    document.querySelector(`#${event.target.id}Text`).innerHTML = event.target.files[0].name;
    return;
  }

  public uploadImage(image: File): string {
    //Chamada do serviço que hospeda a imagem e retorna o link
    return 'https://braziliex.com/faq/images/verification_doc_01.png';
  }

}
