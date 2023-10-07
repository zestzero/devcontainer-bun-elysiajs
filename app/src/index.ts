import { Elysia, t } from "elysia";
import { swagger } from '@elysiajs/swagger';

const app = new Elysia()
  .use(swagger())
  .get("/", () => "Hello Elysia")
  .onRequest(() => {
    console.log('On request')
  })
  .on('beforeHandle', () => {
    console.log('Before handle')
  })
  .post('/mirror', ({ body }) => body, {
    body: t.Object({
      username: t.String(),
      password: t.String()
    }),
    afterHandle: () => {
      console.log("After handle")
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
