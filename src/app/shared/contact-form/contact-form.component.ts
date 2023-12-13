import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ContactService} from "../../core/service/contact/contact.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../core/utils/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnChanges {
  private phonePattern: any = '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})';
  @Input() contact: any;
  @Input() formType: String = '';
  private data: any;
  private changedValue: boolean = false;

  // @ts-ignore
  public contactForm: FormGroup = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]]
      }
  );

  constructor(private dataService: DataService,
              private contactService: ContactService,
              private formBuilder: FormBuilder,
              private router: Router) {

  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.contact);
      this.setUpValuesForms('name');
      this.setUpValuesForms('email');
      this.setUpValuesForms('phone');
      this.setUpValuesForms('city');
    }

  ngOnInit(): void {
    this.data = this.dataService.getDataClient();
  }

  private getValueByContact(attribute:string) : string {
    return (this.contact[attribute] ? this.contact[attribute] : null)
  }

  setUpValuesForms(attribute:string ){
    this.contactForm.get(attribute)?.setValue(this.getValueByContact(attribute));
  }
  getContactTitleForm():String{
    if(this.formType == 'new'){
      return 'Create new contact'
    } else if (this.formType == 'edit'){
      return 'Edit the contact';
    } else {
      return '';
    }
  }

  getContactButtonForm():String{
    if(this.formType == 'new'){
      return 'Create new contact'
    } else if (this.formType == 'edit'){
      return 'Save the contact';
    } else {
      return '';
    }
  }

  checkEditForm(): boolean {
    return this.formType == 'edit'
  }

  checkNewForm(): boolean {
    return this.formType == 'new'
  }

  submitContactDate(){
    if (this.formType == 'edit'){
      this.updateContact();
    }
  }

  private updateContact(){
    if(this.contactForm.valid) {
        this.contactService.updateContact(this.data.token, this.contact.id, this.contactForm.value)
            .subscribe( res => {
                   if(res.success){
                     this.router.navigate(['dashboard']);
                   }
             })
    }
  }


  checkNameField() {
      return this.checkField('name');
  }

  checkEmailField() {
    return this.checkField('email');
  }

  checkPhoneField() {
      return this.checkField('phone');
  }

  checkCityField() {
      return this.checkField('city');
  }

  private checkField(variable: string){
    return this.contactForm.get(variable)?.errors &&
        (this.contactForm.get(variable)?.touched || this.contactForm.get(variable)?.dirty);
  }

  public getNameErrorMessage(){
    if(this.contactForm.controls['name']?.errors?.['minlength']){
      return 'Type the contact`s name must be minimum '+this.contactForm.controls['name']?.errors?.['minlength']['requiredLength']+ ' chars';
    } else if(this.contactForm.controls['name']?.errors?.['maxlength']){
      return 'Type contact`s name must be maximum '+this.contactForm.controls['name']?.errors?.['maxlength']['requiredLength']+ ' chars';
    } else if(this.contactForm.controls['name']?.errors?.['required']){
      return 'Type contact`s name must be required'
    }
    return null;
  }

  public getEmailErrorMessage(){
    if(this.contactForm.controls['email']?.errors?.['email']){
      return 'Type contact`s e-mail must be valid like "your-email@company.com"';
    } else if(this.contactForm.controls['email']?.errors?.['required']){
      return 'Type contact`s e-mail must be required'
    }
    return null;
  }

  public getPhoneErrorMessage(){
    if(this.contactForm.controls['phone']?.errors?.['pattern']){
      return 'Type contact`s phone format must be valid like "(xx)xxxxxxxxxx"';
    } else if(this.contactForm.controls['phone']?.errors?.['required']){
      return 'Type contact`s phone must be required'
    }
    return null;
  }

  public getCityErrorMessage(){
    if(this.contactForm.controls['city']?.errors?.['minlength']){
      return 'Type contact`s city must be minimum '+this.contactForm.controls['city']?.errors?.['minlength']['requiredLength']+ ' chars';
    } else if(this.contactForm.controls['city']?.errors?.['maxlength']){
      return 'Type contact`s city must be maximum '+this.contactForm.controls['city']?.errors?.['maxlength']['requiredLength']+ ' chars';
    } else if(this.contactForm.controls['city']?.errors?.['required']){
      return 'Type contact`s city must be required'
    }
    return null;
  }

  public checkStatusSaveButton(): boolean {
    return this.contactForm.invalid || !this.changedValue;
  }


  public checkChangeValue(attribute: string){
    this.changedValue = this.contactForm.controls[attribute].value != this.getValueByContact(attribute);
  }

}
