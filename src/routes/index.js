// Junta todas as rotas que estão em arquivos separados.
import { equipments } from './equipments.js';
import { tickets } from './tickets.js';

import { parseRoutePath } from '../utils/parseRoutePath.js';

export const routes = [
    ...tickets, 
    ...equipments
].map((route) => ({
    ...route,
    path: parseRoutePath(route.path)
}));