import React from "react";
import "./App.css";
<<<<<<< HEAD
import kitty from "./image/360_F_274256881_WSeCn3Iw8yFIU8T6z71aDjXHfAdtc5iy.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
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
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
