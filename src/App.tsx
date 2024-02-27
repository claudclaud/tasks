import React from "react";
import "./App.css";
import kitty from "./image/360_F_274256881_WSeCn3Iw8yFIU8T6z71aDjXHfAdtc5iy.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h2>Another Header</h2>;<p>A paragraph.</p>
            List Some Stuff
            {/* <ul>
                <li>just</li>
                <li>some</li>
                <li>stuff</li>
            </ul> */}
            <ol>
                <li>this one is gonna be ordered</li>
                <li>my favorite yiddish word: tchotchke</li>
                <li>third is a charm</li>
            </ol>
            <img src={kitty} alt="A cat wearing headphones, super cool" />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col
                        style={{
                            width: "100px",
                            height: "150px",
                            backgroundColor: "red",
                            margin: "5px"
                        }}
                    ></Col>
                    <Col
                        style={{
                            width: "100px",
                            height: "150px",
                            backgroundColor: "red",
                            margin: "5px"
                        }}
                    ></Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
