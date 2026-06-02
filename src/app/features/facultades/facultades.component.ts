import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FacultadService } from '../../services/facultad.service';
import { Facultad } from '../../models/facultad.model';

@Component({
  selector: 'app-facultades',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './facultades.component.html',
  styleUrl: './facultades.component.css'
})
export class FacultadesComponent implements OnInit {
  facultades: Facultad[] = [];
  nueva: Facultad = { nombre: '', decano: '', ubicacion: '' };
  mensaje = '';

  constructor(private facultadService: FacultadService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.facultadService.getAll().subscribe(data => this.facultades = data);
  }

  guardar(): void {
    this.facultadService.create(this.nueva).subscribe(() => {
      this.mensaje = 'Facultad creada exitosamente';
      this.nueva = { nombre: '', decano: '', ubicacion: '' };
      this.cargar();
      setTimeout(() => this.mensaje = '', 3000);
    });
  }
}
