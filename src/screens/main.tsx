import React from "react";
import { Container} from "../atoms";
import NoteList from "../components/note-list";

export default function MainScreen() {
    return(
        <Container justifyContent="center" alignItems="center">
            <NoteList />
        </Container>
    )
}