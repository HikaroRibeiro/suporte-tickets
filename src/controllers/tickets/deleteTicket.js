export function deleteTicket({request, response, database}) {
    
    const { id } = request.params;

    database.delete('tickets', id);

    response.writeHead(200);
    return response.end(JSON.stringify({
        message: `Ticket with ID ${id} deleted successfully!`,
    }));
}