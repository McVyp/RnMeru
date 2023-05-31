import { searchInputHasFocusAtom } from "../states/searchbar";
import { useAtom } from "jotai";

const useDrawerEnabled = () => {
    const [searchInputHasFocus]= useAtom(searchInputHasFocusAtom)
    return !searchInputHasFocus
}

export default useDrawerEnabled