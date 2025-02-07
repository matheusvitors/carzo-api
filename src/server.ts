import express from "express";
import helmet from "helmet";
import 'dotenv/config';
import { routes } from "@/routes";
// import { PORT } from "@/infra/config/environment";
// import { middlewares } from "@/infra/middlewares";

const app = express();

app.use(helmet());
// app.use(middlewares);
app.use(routes);

const PORT = 8000;

if(process.env.NODE_ENV !== "tests") {
	app.listen(PORT || 8000, function (){
		console.info('----------------------------------------------------------------------');
		console.info("Meu Carro running on port %d", PORT || 8000);
	});
}

export { app };
