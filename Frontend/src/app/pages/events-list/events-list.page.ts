import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventWithVenue } from '../../interfaces/event-venue.interface';
import { EventsService } from '../../services/events/events.service';

@Component({
  selector: 'app-events-list-page',
  imports: [CurrencyPipe, DatePipe, RouterLink],
  templateUrl: './events-list.page.html',
  styleUrl: './events-list.page.scss',
})
export class EventsListPage implements OnInit {
  private eventsService = inject(EventsService);

  events = signal<EventWithVenue[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe({
      next: (data) => {
        this.events.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudieron cargar los eventos. Verifica que el servidor esté encendido.');
        this.loading.set(false);
      },
    });
  }

  badgeClass(estado: string): string {
    const classes: Record<string, string> = {
      'Programado': 'text-bg-secondary',
      'En Boleteria': 'text-bg-primary',
      'En Vivo': 'text-bg-success',
      'Finalizado': 'text-bg-dark',
      'Cancelado': 'text-bg-danger',
    };
    return classes[estado] ?? 'text-bg-secondary';
  }
}
