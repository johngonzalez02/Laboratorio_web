import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../config/api.config';
import { ReservationFull } from '../../interfaces/reservation-full.interface';

@Injectable({ providedIn: 'root' })
export class ReservationsService {
  private http = inject(HttpClient);

  getReservations(): Observable<ReservationFull[]> {
    return this.http.get<ReservationFull[]>(`${API_URL}/reservations`);
  }
}
