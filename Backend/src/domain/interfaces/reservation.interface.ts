export interface ReservationFull {
  id: number;
  fecha: Date;
  entradas: number;
  total: number;
  estado: string;
  cliente: string;
  correo: string;
  evento: string;
}
