import { atom } from "recoil";

export const MainState = atom({
  key: "main",
  default: {
    status: false,
    message: "",
  },
});
