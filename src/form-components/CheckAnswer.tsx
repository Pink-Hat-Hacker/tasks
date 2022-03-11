import React, { useState } from "react";
import { Form } from "react-bootstrap";
/*
The CheckAnswer component allows a user to enter an answer to a 
short answer question, and then displays whether they got it 
correct or incorrect. The component takes in a parameter representing the 
expectedAnswer.

You will need a state to handle the user’s given answer
The user’s given answer should initially be the empty string
When the user’s given answer matches the expectedAnswer, display ✔️; otherwise display ❌
*/
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setAnswer] = useState<string>("");

    function rightWrong(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="short-answer-question">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={givenAnswer} onChange={rightWrong} />
                {givenAnswer === expectedAnswer && <span>✔️</span>}
                {givenAnswer !== expectedAnswer && <span>❌</span>}
            </Form.Group>
        </div>
    );
}
