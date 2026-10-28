import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { EventsService } from "./events.service";

export class EventsController {

  private readonly eventsService = new EventsService();

  getAllEvents = (req: Request, res: Response): void => {
    this.eventsService.getAllEvents()
      .then((events) => res.status(200).json(events))
      .catch((error) => HandleError.error(error, res));
  };

}
