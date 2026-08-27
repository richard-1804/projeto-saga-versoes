import express from 'express';
import cors from 'cors';
import usuarioRoutes from './src/routes/usuarioRoutes.js';


const app = express();

// Middlewares obrigatórios para processar JSON e liberar o Front-End
app.use(cors());
app.use(express.json());
app.use(usuarioRoutes);


app.listen(3000, () => {console.log(`Servidor Rodando na porta 3000`)});