import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./routes/layout/layout.tsx",
    [
        index("./routes/index.tsx"),
        route("/home", "./routes/home.tsx")
    ])
] satisfies RouteConfig;
