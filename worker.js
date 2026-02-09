export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // /post1 → serve post1.html
    if (url.pathname === "/post1") {
      return new Response(await env.ASSETS.fetch("/post1.html").then(r => r.text()), {
        headers: {
          "Content-Type": "text/html"
        }
      });
    }

    // / → serve main page
    if (url.pathname === "/") {
      return new Response(await env.ASSETS.fetch("/post1.html").then(r => r.text()), {
        headers: {
          "Content-Type": "text/html"
        }
      });
    }

    // Everything else
    return new Response("Not Found", { status: 404 });
  }
};
