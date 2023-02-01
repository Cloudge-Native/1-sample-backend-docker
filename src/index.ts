import * as express from 'express';
import { Request, Response } from 'express';
import * as cors from "cors";

const app = express();
const port = 8081;

app.use(cors({origin: "*"}));

app.get('/', (req: Request, res: Response) => {
  res.json({
    secret: "The World"
  })
});

app.listen(port, () => {
  console.log(`Backend started on port ${port}!`);
});