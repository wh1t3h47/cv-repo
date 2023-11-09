import { useT } from "talkr";
import type pt from "../pt.json";
import type en from "../en.json";

export type LocaleStringKeys = keyof typeof pt | keyof typeof en;

export const useI18n = () => {
  const { T } = useT();

  return {
    i18n: (key: LocaleStringKeys) => T(key as never),
  };
};
