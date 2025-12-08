export function close({request, response, database}) {
    
    const { id } = request.params;
    const { solution } = request.body;

    database.update('tickets', id, {
        status: 'closed',
        solution,
        updated_at: new Date().toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo'}),
    });

    response.writeHead(200);
    return response.end(JSON.stringify({
        message: `Ticket with ID ${id} closed successfully!`,
    }));
}