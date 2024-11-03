import { Request, Response } from 'express';
import { TerminalService } from './terminal.services';

class TerminalController {
  constructor(private terminalService: TerminalService) {}

  async handleGetTerminals(req: Request, res: Response) {
    try {
      const { data, author } = await this.terminalService.handleGetTerminals();
      if (data) {
        res.status(200).json({ data, author });
      } else {
        res.status(401).json({ error: 'Error fetching terminals' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching terminals', error: error });
    }
  }
}

export const terminalController = new TerminalController(new TerminalService());
