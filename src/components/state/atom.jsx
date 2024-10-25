import { atom } from "recoil";
export const darkState = atom({
    key: 'darkState',
    default: false
})
export const currentState = atom({
    key: 'currentState',
    default: 'HOME'
})
export const contactState = atom({
    key: 'contactState',
    default: false
})
