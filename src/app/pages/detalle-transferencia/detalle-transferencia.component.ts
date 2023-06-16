import { Component, OnInit } from '@angular/core';
import { transferenciasRecibidas } from 'src/app/datos/transferencias-ejemplo';

@Component({
  selector: 'app-detalle-transferencia',
  templateUrl: './detalle-transferencia.component.html',
  styleUrls: ['./detalle-transferencia.component.css']
})
export class DetalleTransferenciaComponent implements OnInit {
 transferencia:any = null;
 ngOnInit(){
  this.transferencia = transferenciasRecibidas[1];
 }
}
