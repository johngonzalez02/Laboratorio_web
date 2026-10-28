import { pool } from "../../../config/database";
import { EventWithVenue } from "../../../domain/interfaces/event.interface";

export class EventsService {

  public async getAllEvents(): Promise<EventWithVenue[]> {
    const sql = `
      SELECT e.id, e.nombre, e.descripcion, e.fecha_inicio, e.precio, e.estado,
             v.nombre AS teatro, v.ciudad
      FROM events e
      INNER JOIN venues v ON v.id = e.venue_id
      ORDER BY e.fecha_inicio;`;
    const result = await pool.query(sql);
    return result.rows;
  }

}
