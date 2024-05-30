import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Proyect } from '../../interfaces/proyect.interface';
import { ProyectCardComponent } from '../../components/proyect-card/proyect-card.component';

@Component({
  selector: 'app-proyect-page',
  templateUrl: './proyect-page.component.html',
  styleUrls: ['./proyect-page.component.css'],
})
export class ProyectPageComponent  { //implements OnInit


  // public proyect: Proyect = {
  //   id: 0,
  //   name:'',
  //   channel:''
  // }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {
    this.loadIdLocalStorage();
  }


  message: string = 'Hola';

  receiveMessage($event: string) {
    this.message = $event;
  }

  public index2: number = 0;

  get proyects(): Proyect[] {
    return [...this.countriesService.proyects];
  }


  // @Input()
  // public index2: number = 0;

  mostrarValor() {
    console.log(this.index2);
  }

  private loadIdLocalStorage():void {
    if( !localStorage.getItem('history') ) return;
    this.index2 = parseInt( localStorage.getItem('history')!, 10 );
  }


  // onEmitterProyectById(): void {

  // }

  // @Input()
  // public proyectList: Proyect[] = [{
  //   id: 1,
  //   name: 'Trunks',
  //   channel: 'ATM'
  // }];


  // ngOnInit(): void {

  //   this.activatedRoute.params
  //     .pipe(
  //       switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id )),
  //     )
  //     .subscribe( proyect => {
  //       if ( !proyect ) return this.router.navigateByUrl('');
  //       return this.proyect = proyect;
  //     });
  // }

}
