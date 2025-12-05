import http from 'node:http';

import { jsonHandler } from './middleware/jsonHandler.js'; 
import { routerHandler } from './middleware/routeHandler.js';

const PORT = process.env.PORT || 3000;

async function listener(request, response) {
    await jsonHandler(request, response);

    routerHandler(request, response);
    
}

http.createServer(listener).listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});