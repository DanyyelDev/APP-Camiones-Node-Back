import * as express from "express";
import * as path from "path";
import userRouter from './src/Routes/user-route';
import vehicleRouter from './src/Routes/vehicle-route';
import cargoRequestRouter from './src/Routes/cargoRequest-route';

const app = express();
app.use(express.json()) 
const port =  3000;

app.use('/api/user', userRouter)
app.use('/api/vehicles', vehicleRouter)
app.use('/api/cargo-request', cargoRequestRouter)

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
