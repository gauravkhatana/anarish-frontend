import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { UserData } from '../models/Users';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  imports: [CommonModule, FormsModule, DatePipe],
  standalone: true,
})
export class ContactUsComponent {
  ourEmail:string = 'marketing@anarish.com';
  userData: UserData = {
    name: '',
    email: '',
    phoneNumber: null || 0,
    intrests: [],
    projectRequirements: '',
    date: '',
  };
  intrests = [
    { id: 1, option: 'UI-Design', value: false },
    { id: 2, option: 'Product Design', value: false },
    { id: 3, option: 'Frontend', value: false },
    { id: 4, option: 'Backend', value: false },
    { id: 5, option: 'Micro-site', value: false },
    { id: 6, option: 'UX Consultation', value: false },
    { id: 7, option: 'React Js', value: false },
  ];

  constructor(private appService: AppService, private datePipe: DatePipe) {}

  ngOnInit(): void {}

  onChange(intrest: any): void {
    console.log("hello")
    intrest.value = !intrest.value;
    console.log(intrest.value);
  }

  submitHandler() {
    this.userData.intrests = this.intrests
      .filter((obj) => obj.value)
      .map((value) => value.option);

    let currentDate = new Date();

    let formattedDateTime = '' + this.datePipe.transform(currentDate, 'yyyy-MM-dd') + ' ' + this.datePipe.transform(currentDate, 'HH:mm:ss');
    // Current Date & time

    this.userData.date = formattedDateTime;

    console.log(this.userData);

    this.appService.saveData(this.userData).subscribe(
      (data) => {
        console.log(data, ' : saved successfully');
      },
      (error) => {
        console.error(error);
      }
    );

    this.appService.sendMail(this.userData).subscribe(data => console.log(data),error => console.error(error));
    
  }
}
