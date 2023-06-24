import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import router from "./routers/main";
const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3003;

const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(` 
   ${req.protocol}:${req.method} ${req.path}
     \n[Body]: ${JSON.stringify(req.body)}
     \n[Host]: ${req.hostname}
     \n[Date]: ${new Date()}
     `);
  next();
};

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}))

app.use(logger);

app.get("/", (req, res) => {
  res.send("Buysket API");
});

app.use('/api/v1/', router)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} 🚀`);
});
