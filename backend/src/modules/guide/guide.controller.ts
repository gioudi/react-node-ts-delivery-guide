import { Request, Response } from 'express';
import { GuideService } from './guide.services';

class GuideController {
  constructor(private guideService: GuideService) {}

  async handleGetGuideById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const { data, author } = await this.guideService.handleGetGuideById(id);
      if (data) {
        res.status(200).json({ data, author });
      } else {
        res.status(401).json({error: 'Error fetching guide'});
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching guide', error: error });
    }
  }
}

export const guideController = new GuideController(new GuideService());