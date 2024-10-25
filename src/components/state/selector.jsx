import { selector, useSetRecoilState } from "recoil";
import { darkState } from "./atom";

export const toggleMode = selector({
    key: 'toggleMode',
    get: ({ get }) => get(darkState),
    set: ({ get, set }) => {
        const currentState = get(darkState);
        set(darkState, !darkState);

    }
})
