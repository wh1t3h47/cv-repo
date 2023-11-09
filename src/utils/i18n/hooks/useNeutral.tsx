import * as neutral from "../neutral";

export type NeutralStringKeys = keyof typeof neutral;

export const useNeutral = () => ({
  neutral: (key: NeutralStringKeys) => neutral[key as NeutralStringKeys],
});
