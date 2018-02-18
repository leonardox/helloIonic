import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public feed_object = {
    title: "Leonardo Cordeiro",
    age: 25,
    description: "Estou criando meu primeiro app em ionic",
    date: "Fevereiro 18, 2018",
    qtd_likes: 14,
    qtd_comments: 3,
    time_comment: "2h ago"
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public username:string = "Leonardo Cordeiro";

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
