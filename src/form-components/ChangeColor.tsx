import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan"
];

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <Form>
                {colors.map((color, index) => (
                    <Form.Check
                        key={index}
                        inline
                        type="radio"
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={handleColorChange}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    width: "100px",
                    height: "100px",
                    marginTop: "10px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
