export function update({request, response, database}) {
    
    const { id } = request.params;
    const { equipment, description, status } = request.body;

    database.update('tickets', id, {
        equipment,
        description,
        status,
        updated_at: new Date().toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo'}),
    });

    response.writeHead(200);
    return response.end(JSON.stringify({
        message: `Ticket with ID ${id} updated ${equipment} successfully!`,
    }));
}   