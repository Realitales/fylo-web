interface Route {
  name: string;
  path: string;
}

export const routes: Route[] = [
  {
    name: "features",
    path: "/features",
  },
  {
    name: "team",
    path: "/team",
  },
  {
    name: "sign in",
    path: "/signin",
  },
];

export default routes;
