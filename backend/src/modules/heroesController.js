import { heroes } from './heroesList.js';

export const getHeroesData = (req, res) => {
    heroes.forEach((hero, i) => {
        hero.id = (i + 1).toString();
    });

    res.json(heroes);
};
