import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft((prevAttempts) => prevAttempts - 1);
        }
    };

    const handleGainAttempts = () => {
        const parsedAttempts = parseInt(requestedAttempts);
        if (!isNaN(parsedAttempts)) {
            setAttemptsLeft((prevAttempts) => prevAttempts + parsedAttempts);
            setRequestedAttempts("");
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value);
    };

    return (
        <div>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleChange}
                placeholder="Enter number of attempts"
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
}
