/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "Valentine's Day" | "Hanukkah" | "Passover Seder";

// Function to get the next holiday alphabetically
const getNextHolidayAlphabetically = (currentHoliday: Holiday): Holiday => {
    switch (currentHoliday) {
    case "Valentine's Day":
        return "Hanukkah";
    case "Hanukkah":
        return "Passover Seder";
    case "Passover Seder":
        return "Valentine's Day";
    default:
        return currentHoliday;
    }
};

const getNextHolidayInYear = (currentHoliday: Holiday): Holiday => {
    switch (currentHoliday) {
    case "Valentine's Day":
        return "Hanukkah";
    case "Hanukkah":
        return "Passover Seder";
    case "Passover Seder":
        return "Valentine's Day";
    default:
        return currentHoliday;
    }
};

export function CycleHoliday(): JSX.Element {
    const initialHoliday: Holiday = "Valentine's Day";
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(initialHoliday);

    const handleAdvanceAlphabetically = () => {
        const nextHoliday = getNextHolidayAlphabetically(currentHoliday);
        setCurrentHoliday(nextHoliday);
    };

    const handleAdvanceInYear = () => {
        const nextHoliday = getNextHolidayInYear(currentHoliday);
        setCurrentHoliday(nextHoliday);
    };

    return (
        <div>
            <p>Holiday: {getEmojiForHoliday(currentHoliday)}</p>
            <Button onClick={handleAdvanceAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={handleAdvanceInYear}>Advance by Year</Button>
        </div>
    );
}

// Function to get emoji representation for each holiday
const getEmojiForHoliday = (holiday: Holiday): string => {
    switch (holiday) {
    case "Valentine's Day":
        return "❤️";
    case "Hanukkah":
        return "🕎";
    case "Passover Seder":
        return "🍷";
    default:
        return "";
    }
};
