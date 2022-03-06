import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

/**
 * The ChangeType component simulates another an editor for a quiz application that provides a way to change the type of a quiz question by pressing a button. Recall from the Objects task that Quiz Questions can come in either Multiple Choice or Short Answer.

You will need a single state to handle whether the type is multiple_choice_question or short_answer_question.
The type of the state should be QuestionType, not string.
There should be a button labelled Change Type that changes the state from one type to the other.
When the type is multiple_choice_question, the text Multiple Choice should be visible.
When the type is short_answer_question, the text Short Answer should be visible.
The initial type must be short_answer_question.
 */
export function ChangeType(): JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "multiple_choice_question"
    );
    function switchQuestion(): void {
        question === "multiple_choice_question"
            ? setQuestion("short_answer_question")
            : setQuestion("multiple_choice_question");
    }
    return (
        <div>
            <Button onClick={switchQuestion}> Change Type </Button>
            <div>
                {question === "multiple_choice_question" ? (
                    <span> Multiple Choice</span>
                ) : (
                    <span> Short Answer </span>
                )}
            </div>
        </div>
    );
}

/*
this is what you need to do
you need to have a button that switches from one question type to the other
according to the question type the value should reveal either:
-Multiple choice
-Short answer

how to do this:
same as the counter have something that switches from back and forth
based on that -- change the button "output" to either of the choices
*/
