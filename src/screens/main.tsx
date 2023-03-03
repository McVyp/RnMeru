import React from "react";
import { Container} from "../atoms";
import NoteList from "../components/note-list";
import HeaderBar from "../components/header-bar";

export default function MainScreen() {
    return(
        <Container justifyContent="center" alignItems="center">
            <NoteList />
            <HeaderBar />
        </Container>
    )
}