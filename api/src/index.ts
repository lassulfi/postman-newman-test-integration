import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import { compoundInterestRouter } from './routers/compoundInterest.router';

dotenv.config();

if (!process.env.PORT) {
    console.error('Could not find specified port')
    process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/compound-interests', compoundInterestRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
