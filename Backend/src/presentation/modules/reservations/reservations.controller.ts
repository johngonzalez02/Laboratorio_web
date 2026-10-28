import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { ReservationsService } from "./reservations.service";

export class ReservationsController {

  private readonly reservationsService = new ReservationsService();

  getAllReservations = (req: Request, res: Response): void => {
    this.reservationsService.getAllReservations()
      .then((reservations) => res.status(200).json(reservations))
      .catch((error) => HandleError.error(error, res));
  };

}
