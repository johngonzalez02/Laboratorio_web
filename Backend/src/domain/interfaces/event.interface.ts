export interface EventWithVenue {
  id: number;
  nombre: string;
  descripcion: string | null;
  fecha_inicio: Date;
  precio: number;
  estado: string;
  teatro: string;
  ciudad: string;
}
