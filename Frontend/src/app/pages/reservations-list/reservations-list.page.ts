import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReservationFull } from '../../interfaces/reservation-full.interface';
import { ReservationsService } from '../../services/reservations/reservations.service';

@Component({
  selector: 'app-reservations-list-page',
  imports: [CurrencyPipe, DatePipe, RouterLink],
  templateUrl: './reservations-list.page.html',
  styleUrl: './reservations-list.page.scss',
})
export class ReservationsListPage implements OnInit {
  private reservationsService = inject(ReservationsService);

  reservations = signal<ReservationFull[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  confirmed = computed(() => this.reservations().filter((r) => r.estado === 'Confirmada'));
  income = computed(() => this.confirmed().reduce((sum, r) => sum + r.total, 0));

  ngOnInit(): void {
    this.reservationsService.getReservations().subscribe({
      next: (data) => {
        this.reservations.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudieron cargar las reservas. Verifica que el servidor esté encendido.');
        this.loading.set(false);
      },
    });
  }

  badgeClass(estado: string): string {
    const classes: Record<string, string> = {
      'Reservada': 'text-bg-warning',
      'Confirmada': 'text-bg-success',
      'Cancelada': 'text-bg-danger',
    };
    return classes[estado] ?? 'text-bg-secondary';
  }
}
