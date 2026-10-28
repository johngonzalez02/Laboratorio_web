import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../config/api.config';
import { EventWithVenue } from '../../interfaces/event-venue.interface';

@Injectable({ providedIn: 'root' })
export class EventsService {
  private http = inject(HttpClient);

  getEvents(): Observable<EventWithVenue[]> {
    return this.http.get<EventWithVenue[]>(`${API_URL}/events`);
  }
}
