import dotenv from 'dotenv';
import Server from './server/Server';

// Configurar
dotenv.config();

const server= new Server();

server.listen();
