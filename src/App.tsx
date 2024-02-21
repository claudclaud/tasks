import React from "react";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function header(): JSX.Element {
    return (
        <div>
            <h1>
                {" "}
                <div
                    style={{
                        backgroundColor: "red"
                    }}
                ></div>
                My Cats & Other Cats
            </h1>
            <p>
                Basically, my cats names and other cat names I want to name
                future cats of mine! :)
            </p>

            <Container>
                <Row>
                    <Col>
                        {" "}
                        My Cats:
                        <ul>
                            <li>Moshi: 5 years old</li>
                            <li>Boba: 2 years old</li>
                            <li>Boo: Old cat, was 14!</li>
                        </ul>
                    </Col>
                    <Col>
                        {" "}
                        Cat Names I Like:
                        <ul>
                            <li>Tchotchke (meaning: sentimental)</li>
                            <li>Goliath (meaning: large)</li>
                            <li>Chutz (short for Chutzpah)</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Button onClick={() => console.log("Hello World!")}>
                Click Me!
            </Button>
        </div>
    );
}

export default header;
