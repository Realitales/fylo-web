interface NavigationType {
  name: string;
  path: string;
}

export const navigations: NavigationType[] = [
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

export default navigations;
