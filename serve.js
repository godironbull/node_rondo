import fastify from "fastify";

const server = fastify();
server.post('/videos',()=>{
    return 'Hello Word'
})

server.get('/videos',()=>{
    return 'Rota encontrada'
})

server.put('/videos/:id',()=>{
    return 'Hello Node.js'
})

server.delete('/video',()=>{
    return 'Hello Node.js'
})
server.listen({
    port: 3333,
    });
