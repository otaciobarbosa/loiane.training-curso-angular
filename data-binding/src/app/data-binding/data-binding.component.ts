import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
 url: string = 'https://loiane.training/';
 cursoAngular : boolean = true;
 urlImagem = 'https://loremflickr.com/400/200/brazil'

 getValor(){
  return 1
 }

 getCurtirCurso(){
  return true;
 }

}