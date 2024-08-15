import { Elysia, t } from "elysia";

export const api = new Elysia({
    prefix: "/api",
})
    .on('beforeHandle', () => {
        console.log('Before handle')
    })
    .get("/", () => "Hello Elysia")
    .post('/mirror', ({ body }) => body, {
        body: t.Object({
            username: t.String(),
            password: t.String()
        }),
        afterHandle: () => {
            console.log("After handle")
        }
    })