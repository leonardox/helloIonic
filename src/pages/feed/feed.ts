import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { MoviePage } from '../movie/movie';

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
  providers: [
    MovieProvider
  ]
})


export class FeedPage {
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public lista_filmes = new Array<any>();
  public movie;
  public page = 1;
  public infiniteScroll;


  public feed_object = {
    title: "Leonardo Cordeiro",
    age: 25,
    description: "Estou criando meu primeiro app em ionic",
    date: "Fevereiro 18, 2018",
    qtd_likes: 14,
    qtd_comments: 3,
    time_comment: "2h ago"
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.loadMovieList();
    // console.log('Begin async operation', refresher);

    // setTimeout(() => {
    //   console.log('Async operation has ended');
    //   refresher.complete();
    // }, 2000);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.infiniteScroll = infiniteScroll;
    this.page++;
    this.loadMovieList(true);
  }

  ionViewDidEnter() {    
    console.log('ionViewDidLoad FeedPage');
    this.loadMovieList();
  }

  public loadMovieList(new_page:boolean = false) {
    this.presentLoading();
    console.log(this.page);
    this.movieProvider.getPopularMovies(this.page).subscribe(
      data=>{
        const response = (data as any);
        //const return_object = JSON.parse(response);

        if (new_page) {
          this.lista_filmes = this.lista_filmes.concat(response.results);
          this.infiniteScroll.complete();
        } else {
          this.lista_filmes = response.results;
          
        }

        console.log(data);
        this.closeLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
        }
      }, error => {
        console.log(error);
        this.closeLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
        }
      }
    );
  }

  public getMovieDetail(movie_id:string) {
    this.presentLoading();
    this.movieProvider.getMovieDetail(movie_id).subscribe(
      data=>{
        const response = (data as any);
        //const return_object = JSON.parse(response);
        this.movie = response; 
        console.log(data);
        this.closeLoading();
        this.navCtrl.push(MoviePage, { movie: this.movie });
      }, error => {
        console.log(error);
        this.closeLoading();
      }
    );
  }
}
