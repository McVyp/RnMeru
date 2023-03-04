import { atom } from "jotai"
import { Theme, ThemeNames, themes } from "../themes"

const activeThemeId = atom<ThemeNames>('dark')

export const activeThemeAtom = atom<Theme>(get => {
    const themId = get(activeThemeId)
    const themeIndex = themes.findIndex(t => t.id === themId)
    if (themeIndex >= 0) {
        return themes[themeIndex].theme
    } else{
        return themes[0].theme
    }
})

export default activeThemeId