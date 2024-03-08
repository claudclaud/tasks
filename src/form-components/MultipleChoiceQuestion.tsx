import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);
    const isCorrect = selectedChoice === expectedAnswer;

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChoice(event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form>
                <Form.Group controlId="formMultipleChoice">
                    <Form.Label>Select an answer:</Form.Label>
                    <Form.Select value={selectedChoice} onChange={handleSelect}>
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Form>
            <div>{isCorrect ? "✔️ Correct" : "❌ Incorrect"}</div>
        </div>
    );
}
