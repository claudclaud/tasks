import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <Form>
            <Form.Group controlId="userAnswer">
                <Form.Label>Your Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={userAnswer}
                    onChange={handleChange}
                />
            </Form.Group>
            <div>
                {userAnswer === expectedAnswer ? (
                    <span style={{ color: "green" }}>✔️ Correct!</span>
                ) : (
                    <span style={{ color: "red" }}>❌ Incorrect</span>
                )}
            </div>
        </Form>
    );
}
