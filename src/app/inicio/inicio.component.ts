import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  producto = {id: null, nombre: null, precio: null, descripcion: null};

  productos= [
    {id: 1, nombre: 'TARTA DE FRUTILLA', precio: '130', descripcion: 'Frutillas seleccionadas y una delciosa crema pastelera'},
    {id: 2, nombre: 'BUDIN BOMBÓN', precio: '200', descripcion: 'Mini budÃ­n de vainilla, dulce de leche y baÃ±o de chocolate'},
    {id: 3, nombre: 'TIRAMISU', precio: '100', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {id: 4, nombre: 'TARTA DE CHOCOLATE', precio: '240', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {id: 5, nombre: 'CUPCAKE', precio: '134', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {id: 6, nombre: 'BROWNIE DE CHOCOLATE', precio: '90', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  ];

  cargarProducto(productoEntrada){
    this.producto = productoEntrada;
  }

  constructor() { }

  ngOnInit() {
  }

}
