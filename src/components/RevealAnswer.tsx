import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isAnswerVisible, setAnswerVisible] = useState<boolean>(false);

    const handleRevealAnswer = () => {
        setAnswerVisible(true);
    };

    return (
        <div>
            {isAnswerVisible && <p>Answer: 42</p>}
            <Button onClick={handleRevealAnswer}>Reveal Answer</Button>
        </div>
    );
}
