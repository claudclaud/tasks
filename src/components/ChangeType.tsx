import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const handleChangeType = () => {
        // Toggle between multiple_choice_question and short_answer_question
        const newType =
            questionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question";
        setQuestionType(newType);
    };

    return (
        <div>
            <p>
                {questionType === "multiple_choice_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </p>
            <Button onClick={handleChangeType}>Change Type</Button>
        </div>
    );
}
