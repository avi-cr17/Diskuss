import { atom } from "recoil";


export interface colorState {
    mode : colorMode
}

export type colorMode = 'light' | 'dark' ;

const defaultColorState : colorState = {
    mode : 'light'
}

export const colorModeState = atom<colorState> ({
    key : "colorModeState",
    default : defaultColorState
})