import { CursosService } from './cursos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
 nomePortal: string;
 cursos: string[];
 
 constructor(private CursosService : CursosService ){
  this.nomePortal = 'https://loiane.training/';

  // let servico = new CursosService();
  this.cursos = this.CursosService.getCursos();
 }
  
}
