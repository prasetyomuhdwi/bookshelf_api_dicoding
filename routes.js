const routes = [
  {
    method: "GET",
    path: "/books",
    handler: (request, h) => {
      return "books";
    },
  },
  {
    method: "POST",
    path: "/books",
    handler: (request, h) => {
      return `book POST`;
    },
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: (request, h) => {
      const { id } = request.params;
      return `book ${id}`;
    },
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: (request, h) => {
      const { id } = request.params;
      return `book put ${id}`;
    },
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: (request, h) => {
      const { id } = request.params;
      return `book delete ${id}`;
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `Hai, ${name}!`;
      }
      return `Hello, ${name}!`;
    },
  },
];

module.exports = routes;
