// Servidor de señalización de Enjambre (PeerJS). Solo presenta a los jugadores; la partida va directa entre ellos.
const { PeerServer } = require('peer');
const puerto = Number(process.env.PORT) || 9000;
PeerServer({ port: puerto, path: '/', proxied: true, allow_discovery: false, key: 'peerjs', corsOptions: { origin: true } });
console.log('Servidor Enjambre escuchando en el puerto ' + puerto);
