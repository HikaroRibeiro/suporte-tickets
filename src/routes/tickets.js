import { close } from "../controllers/tickets/close.js";
import { create } from "../controllers/tickets/create.js";
import { deleteTicket } from "../controllers/tickets/deleteTicket.js";
import { index } from "../controllers/tickets/index.js";
import { update } from "../controllers/tickets/update.js";

export const tickets = [
    {
        method: 'GET',
        path: '/tickets',
        controller: index,
    }, {
        method: 'POST',
        path: '/tickets',
        controller: create,
    }, {
        method: 'PUT',
        path: '/tickets/:id',
        controller: update,
    }, {
        method: 'PATCH',
        path: '/tickets/:id/close',
        controller: close,
    }, {
        method: 'DELETE',
        path: '/tickets/:id/delete',
        controller: deleteTicket,
    }
]