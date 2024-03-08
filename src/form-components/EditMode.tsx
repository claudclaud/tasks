import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const toggleEditMode = () => {
        setEditMode((prevMode) => !prevMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleStudentChange = () => {
        setIsStudent((prevIsStudent) => !prevIsStudent);
    };

    return (
        <div>
            {editMode ? (
                <Form>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="studentCheckbox"
                            checked={isStudent}
                            onChange={handleStudentChange}
                            label="Are you a student?"
                        />
                    </Form.Group>
                </Form>
            ) : (
                <p>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </p>
            )}
            <Form.Check
                type="switch"
                id="editModeSwitch"
                label="Edit mode"
                checked={editMode}
                onChange={toggleEditMode}
            />
        </div>
    );
}
