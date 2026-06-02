import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TorneoService } from '../../services/torneo.service';
import { Torneo } from '../../models/torneo.model';

@Component({
  selector: 'app-torneos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './torneos.component.html',
  styleUrl: './torneos.component.css'
})
export class TorneosComponent implements OnInit {
  torneos: Torneo[] = [];
  nuevoTorneo: Torneo = { nombre: '', deporte: '', fechaInicio: '', ciudad: '' };
  mensaje = '';

  constructor(private torneoService: TorneoService) {}

  ngOnInit(): void {
    this.cargarTorneos();
  }

  cargarTorneos(): void {
    this.torneoService.getAll().subscribe(data => this.torneos = data);
  }

  guardar(): void {
    this.torneoService.create(this.nuevoTorneo).subscribe(() => {
      this.mensaje = 'Torneo creado exitosamente';
      this.nuevoTorneo = { nombre: '', deporte: '', fechaInicio: '', ciudad: '' };
      this.cargarTorneos();
      setTimeout(() => this.mensaje = '', 3000);
    });
  }
}
