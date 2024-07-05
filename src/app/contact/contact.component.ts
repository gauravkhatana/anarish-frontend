import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  formSubmitted = false;
  submissionSuccess = false;
  errorOccurred = false;
  errorMessage = '';  

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  submitForm() {
    this.formSubmitted = true;

    if (this.contactForm.valid) {
      // Extract form data
      const formData = this.contactForm.value;

      // TODO: Replace 'your-api-endpoint' with the actual endpoint
      const apiEndpoint = 'http://localhost:8080/contactus';

      // Make the HTTP POST request
      this.httpClient.post(apiEndpoint, formData).subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
          this.submissionSuccess = true;
          this.errorOccurred = false;
          this.contactForm.reset();
          this.formSubmitted = false;

          setTimeout(()=>{
            this.submissionSuccess = false;
          }, 5000);
        },
        (error) => {
          console.error('Error submitting form:', error);
          this.errorOccurred = true;
          this.errorMessage =  'Please try again later';
          console.log('Error message:', this.errorMessage);
        }
      );
    } else {
      this.errorOccurred = true;
          this.errorMessage =  'Please try again later';
      console.log('Form has errors. Please check the fields.');
    }
  }
}
