import { MagnifyingGlass } from "phosphor-react";
import { SearchBarContainer } from "./styles";

export function SearchBar() {
    return (<>
        <SearchBarContainer>
            <input type="text" placeholder="Mochila para trilha, barraca de acampamento, limpador de sofás..." />
            <MagnifyingGlass size={20} />
        </SearchBarContainer></>)
}