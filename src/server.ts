import dotenv from 'dotenv';
import app, { init } from './app';
dotenv.config();

const PORT = process.env.PORT || 5000;

init().then(() => {
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
  });
}).catch((e) => {
  console.warn("Something went wrong");
  console.log(e);
});