import { pool } from "../../../config/database";
import { ReservationFull } from "../../../domain/interfaces/reservation.interface";

export class ReservationsService {

  public async getAllReservations(): Promise<ReservationFull[]> {
    const sql = `
      SELECT r.id, r.fecha, r.entradas, r.total, r.estado,
             c.nombre AS cliente, c.correo,
             e.nombre AS evento
      FROM reservations r
      INNER JOIN customers c ON c.id = r.customer_id
      INNER JOIN events e ON e.id = r.event_id
      ORDER BY r.fecha DESC;`;
    const result = await pool.query(sql);
    return result.rows;
  }

}
