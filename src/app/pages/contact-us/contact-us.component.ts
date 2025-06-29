import { NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { SharedModule } from '../../shared/shared.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NgStyle, SharedModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  mainColor: string = "#ec1c23";
  email: string = "ceo@uaegroup.ae";
  landlineNumber: string = "+971 4 2570022";
  faxNumber: string = "+971 4 2570033";
  mobileNumber: string = "+971 50 8877990";
  address: string = "Festival Tower, Dubai UAE";
  backgroundImage: string = 'assets/images/contact-us.jpg';

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }

  submit(contactForm: NgForm): void {
    console.log(contactForm.value)
    console.log(contactForm.valid)

  }
}
