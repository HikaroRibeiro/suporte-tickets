import crypto from 'node:crypto';

export function create({ request, response, database }) {
    const { user_name, equipment,  description } = request.body;

    const actualLocalDate = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    
    const ticket = {
        id: crypto.randomUUID(),
        user_name,
        equipment,
        description,
        status: 'open',
        created_at: actualLocalDate,
        updated_at: actualLocalDate,
    }

    database.insert('tickets', ticket);
    
    response.writeHead(201, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: 'Ticket created successfully', ticket }));
}