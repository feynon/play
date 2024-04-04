import { Application, send, Context } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async (context: Context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/../host/dist`,
    index: "index.html",
  });
});1

await app.listen({ port: 8000 });
