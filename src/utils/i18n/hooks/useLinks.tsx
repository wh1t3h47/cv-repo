import * as links from "../links";

export type LinkStringKeys = keyof typeof links;

export const useLinks = () => ({
  links: (key: LinkStringKeys) => links[key as LinkStringKeys],
});
