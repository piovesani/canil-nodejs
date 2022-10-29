import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/pet';

export const home = (req: Request, res: Response) => {

    let list = Pet.getAll();

    res.render('pages/page.mustache', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'banner-all'
        },
        list
    });
}

export const dogs = (req: Request, res: Response) => {

    let list = Pet.getFromType('dog');

    res.render('pages/page.mustache', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner-dog'
        },
        list
    });
}

export const cats = (req: Request, res: Response) => {

    let list = Pet.getFromType('cat');

    res.render('pages/page.mustache', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner-cat'
        },
        list
    });
}

export const fishes = (req: Request, res: Response) => {

    let list = Pet.getFromType('fish');

    res.render('pages/page.mustache', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner-fish'
        },
        list
    });
}

export function search(arg0: string, search: any) {
    throw new Error('Function not implemented.');
}
