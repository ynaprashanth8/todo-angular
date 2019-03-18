import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloBeanService {
  constructor(private message: string) { }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloBeanService() {
    return this.httpClient.get<HelloBeanService>('http://localhost:8080/hello-world-bean');
  }

  executeHelloBeanServiceWithPathVariable(name: string) {
    return this.httpClient.get<HelloBeanService>(`http://localhost:8080/hello-world/${name}`);
  }
}
