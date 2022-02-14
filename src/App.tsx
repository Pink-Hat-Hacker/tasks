import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Caper from "./assets/caper.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <br></br>
            <h1> TASK 3 </h1>
            <img
                src={Caper}
                alt="A picture of my dog Caper the Escaper (a husky mix)"
            />
            <br></br>
            <div className="list-title-caper">
                Why Caper is a cool dog:
                <ol className="list-caper">
                    <li>He can open a gate by himself</li>
                    <li>He does not bark</li>
                    <li>He sheds everywhere... :/</li>
                </ol>
            </div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <br></br>
            <br></br>
            <p>by: Zoe Y. Valladares. Hello World!</p>
            <Button onClick={() => console.log("I am logged")}>Click Me</Button>
            <br></br>
            <br></br>
            {/* Task 3 additinal
            two column layout
            red rectangle in each column */}
            <div className="rect">
                <Container>
                    <Row>
                        <Col>Col 1</Col>
                        <Col>Col 2</Col>
                    </Row>
                </Container>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
