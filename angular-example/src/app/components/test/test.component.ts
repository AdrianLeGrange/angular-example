import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

// Services
import { TestService } from 'src/app/services/test.service';

// Other
import { Constants } from 'src/app/constants/constants';
import { HttpMethod, HttpMethodDescriptions } from 'src/app/enums/http-method.enum';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  testForm = new FormGroup({
    methodSelect: new FormControl(HttpMethod.GET),
    endpointInput: new FormControl('', [Validators.required]),
    requestBodyInput: new FormControl(''),
    responseCodeInput: new FormControl(''),
    responseBodyOutput: new FormControl(''),
  });

  httpMethods: HttpMethod[] = [];
  isProcessing = false;

  requestBodyExample= '{\n\tid:1,\n\tname:"Some Name"\n}';

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.loadHttpMethods();
  }

  loadHttpMethods(){
    Object.keys(HttpMethod).filter((key: string | number) => !isNaN(Number(key))).forEach(value => {
      this.httpMethods.push(+value);
    });
  }

  getHttpMethodDescription(method: HttpMethod): string {
    return HttpMethodDescriptions.get(method) ?? Constants.NoMappedDescriptionMessage;
  }

  onSendRequest() {
    const endpointURL = Constants.BaseURL + this.testForm.controls.endpointInput.value;

    let response$: Observable<HttpResponse<any>>;

    switch(this.testForm.controls.methodSelect.value)
    {
      case HttpMethod.GET: {
        response$ = this.testService.getRequest(endpointURL);
        break;
      }
      case HttpMethod.POST: {
        response$ = this.testService.postRequest(endpointURL, JSON.parse(this.testForm.controls.requestBodyInput.value));
        break;
      }
      case HttpMethod.DELETE: {
        response$ = this.testService.deleteRequest(endpointURL);
        break;
      }
      case HttpMethod.PUT: {
        response$ = this.testService.putRequest(endpointURL, JSON.parse(this.testForm.controls.requestBodyInput.value));
        break;
      }
      default:{
        console.error("Selected method could not be handled!");
        return;
      }
    }

    this.isProcessing = true;
    response$.subscribe((res: HttpResponse<any>) => {
      this.testForm.controls.responseCodeInput.setValue(res.status);
      this.testForm.controls.responseBodyOutput.setValue(JSON.stringify(res.body));
      console.debug("Response for " + endpointURL, res.body);
    }, (error: HttpErrorResponse) => {
      console.debug('Error', error);
      this.testForm.controls.responseCodeInput.setValue(error.status);
      this.testForm.controls.responseBodyOutput.setValue('');
    }).add(() => {
      this.isProcessing = false;
    });
  }
}
