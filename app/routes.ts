import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./routes/layout/layout.tsx",
    [
        route("/home", "./routes/home.tsx"),
    ]),
    index("./routes/index.tsx"),
    layout("./routes/layout/layout-page.tsx",
        [
            route("/attraction/:id", "./routes/attraction.tsx"),
            route("/map", "./routes/map.tsx"),
            // route("/book", "./routes/book.tsx")
        ]),
        route("/t", "./routes/test.tsx"),
    layout("./routes/layout/layout-small.tsx",
        [
            route("/book/:id/:guests", "./routes/book.tsx")
        ]),
        // route("/book/:id", "./routes/test.tsx")
] satisfies RouteConfig;
