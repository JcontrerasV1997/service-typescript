import express, { Application } from "express";
import userRoutes from "../routes/usuarioRoute";
import cors from "cors";
import db from "../db/connection";
class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.dbConection();
    this.middlewares();
    // Definir mis rutas
    this.routes();
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }



  middlewares() {
    // CORS
    this.app.use(cors());
    // LECTURA DEL BODY
    this.app.use(express.json());
    // CARPETA
    this.app.use(express.static("public"));
  }

  async dbConection(){
    try {
      await db.authenticate();
      console.log("db online")
    } catch (error:any) {
      throw new Error(error);
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto:" + this.port);
    });
  }
}

export default Server;
