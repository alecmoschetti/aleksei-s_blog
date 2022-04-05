import { App } from "@tinyhttp/app";
import { logger } from "@tinyhttp/logger";

const app = new App();

app
    .use(logger())
    .get('/', (_, res) => void res.send('<h1>Hello Aleksei</h1>'))
    .listen(9000);