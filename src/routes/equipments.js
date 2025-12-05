export const equipments = [
    {
        method: 'GET',
        path: '/equipments',
        controller: ({request,response}) => { response.end("Listando equipamentos") },
    }, {
        method: 'POST',
        path: '/equipments',
        controller: ({request, response}) => { response.end("Criando equipamento") },
    }
]