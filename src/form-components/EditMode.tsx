import React, { useState } from "react";
import { Form } from "react-bootstrap";
/*
The EditMode component has two states controlled by a switch: 
the default state shows text indiciating the user’s name and whether 
they are a student, and then the alternate state is an editable form 
for editing the user’s name and whether they are a student.

You will need state to handle the component being in “edit mode”, 
the user’s name, and whether or not the user is a student.
Initially, the component is NOT in edit mode, the user’s name is literally 
the string Your Name (as in, that exact string, not your actual name), 
and the user IS a student.
When not in edit mode, the text of the component must include Your Name 
is a student or Your Name is not a student.
As another example, if the user entered their name as Charles Babbage 
and said they were NOT a student, then the text would be Charles Babbage 
is not a student.
*/
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    const [editUserName, setEditUserName] = useState<boolean>(false);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="editMode"
                label="Edit?"
                checked={editUserName}
                onChange={() => setEditUserName(!editUserName)}
            />
            {editUserName && (
                <Form.Check
                    type="switch"
                    id="a-student"
                    label="Are you a student?"
                    checked={isStudent}
                    disabled={!editUserName}
                    onChange={() => setStudent(!isStudent)}
                />
            )}
            {editUserName && (
                <Form.Group controlId="userName">
                    <Form.Label>What is your name?</Form.Label>
                    <Form.Control
                        type="text"
                        value={userName}
                        disabled={!editUserName}
                        onChange={(event: ChangeEvent) =>
                            setUserName(event.target.value)
                        }
                    />
                </Form.Group>
            )}
            <div>
                {editUserName === false && isStudent === true && (
                    <span> {userName} is a student. </span>
                )}
                {editUserName === false && isStudent === false && (
                    <span>{userName} is not a student</span>
                )}
            </div>
        </div>
    );
}
