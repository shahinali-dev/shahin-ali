import { Hono } from "hono";
import RootLayout from "./layouts/RootLayout";

const app = new Hono();

app.get("/", (c) => {
  return c.html(
    RootLayout({
      title: "Shahin Ali - Full Stack Developer",
      children: "Home",
    }),
  );
});

export default app;
