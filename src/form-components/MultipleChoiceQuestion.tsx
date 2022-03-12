import React, { useState } from "react";
import { Form } from "react-bootstrap";
/*
The MultipleChoiceQuestions component allows a user to select an answer 
from a list in a dropdown, and then displays whether they got it correct 
or incorrect. The component takes in a parameter representing the 
expectedAnswer and also a parameter representing the list of options.

You will need a state to represent the user’s currently selected choice.
The initial state of the selected choice is the first element of the 
options list.
When the user’s given answer matches the expectedAnswer, display ✔️; 
otherwise display ❌
*/

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("a");
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="formMulChoice">
                <Form.Label>Select and answer:</Form.Label>
                <Form.Select
                    value={answer}
                    onChange={(event: ChangeEvent) =>
                        setAnswer(event.target.value)
                    }
                >
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                </Form.Select>
            </Form.Group>
            {expectedAnswer === answer && <span>✔️</span>}
            {expectedAnswer !== answer && <span>❌</span>}
        </div>
    );
}
