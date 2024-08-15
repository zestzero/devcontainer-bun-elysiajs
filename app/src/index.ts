import cors from "@elysiajs/cors";
import { api } from "./api";
import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger';

const app = new Elysia()
  .use(cors())
  .use(swagger())
  .onRequest(() => {
    console.log('On request')
  })
  .use(api)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
