import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-de-tarefa';
  list:any []= [];
  

  addTask(item:string)
  {
    this.list.push({id:this.list.length,name:item}) /**<-----  logica usada para add item na lista de tarefas  */
  }
  removeTask(id:number)
 {
  this.list=this.list.filter(item=>item.id!==id) /**<-----  logica usada para remover itens na lista de tarefas  */
 }
 
}
