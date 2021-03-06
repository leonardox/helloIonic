import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {

  public filme;

  constructor(public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidEnter() {
    console.log('ionViewDidLoad MoviePage');
    this.filme = this.navParams.get("movie");
    console.log('Filme Recebido');
    console.log(this.filme);
  }

}
