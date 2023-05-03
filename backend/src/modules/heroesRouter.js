import { Router } from 'express';

import { getHeroesData } from './heroesController.js';

export const heroesRouter = Router();

heroesRouter.get('/', getHeroesData);
