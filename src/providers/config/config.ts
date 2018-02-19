import { Injectable } from '@angular/core';

let settings = "config";

@Injectable()
export class ConfigProvider {

  constructor() {
    console.log('Hello ConfigProvider');
  }

  public getConfiguration(): any {
    return localStorage.getItem(settings);
  }

  public setConfiguration(show_intro?: boolean, username?:string, password?:string) {

    let config = {
      username:"",
      password:"",
      show_intro: true
    }
    if (show_intro) {
      config.show_intro = show_intro;
    }

    if (username) {
      config.username = username;
    }

    if (password) {
      config.password = password;
    }

    localStorage.setItem(settings, JSON.stringify(config));
  }
}
