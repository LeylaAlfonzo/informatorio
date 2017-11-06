import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() mensajeDelHijo = new EventEmitter();

  cargarContacto(){
    this.mensajeDelHijo.emit('contacto');
  }

  cargarInicio(){
    this.mensajeDelHijo.emit('inicio');
  }
  
  cargarGaleria(){
    this.mensajeDelHijo.emit('galeria');
  }

  constructor() { }

  ngOnInit() {
  }

}
