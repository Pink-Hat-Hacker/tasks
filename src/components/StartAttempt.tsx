import React, { useState } from "react";
import { Button } from "react-bootstrap";

/*
The StartAttempt component simulates yet another part of the quiz application,
this time providing a “Start” and “Stop” button for the quiz. 
Since the quiz should have a limited number of attempts, there is also a 
“Mulligan” button to give more attempts.

You will need two pieces of state: the number of attempts and whether the quiz in progress.
The initial number of attempts is 4
The quiz is initially NOT in progress
There is a button labelled Start Quiz that puts the Quiz in progress and decreases the number of attempts by one.
There is a button labelled Stop Quiz that stops the Quiz from being in progress.
There is a button labelled Mulligan that increase the attempts by one.
When the quiz is in progress, the Start Quiz and Mulligan buttons are disabled.
When the quiz is not in progress, the Stop Quiz and button is disabled.
When the attempts are zero, the Start Quiz button is disabled.
*/
export function StartAttempt(): JSX.Element {
    const [value, setValue] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    //start and stop switch
    function flipStartStop(): void {
        setProgress(inProgress === false ? true : false);
        //setValue(inProgress === true ? value - 1 : value);
    }
    return (
        <div>
            <div>
                Number of attempts: <span>{value}</span>
            </div>
            <div>
                <Button
                    onClick={() => {
                        flipStartStop();
                        setValue(value - 1);
                    }}
                    disabled={inProgress || value === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => flipStartStop()} disabled={!inProgress}>
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => setValue(value + 1)}
                    disabled={inProgress}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}

/**
 * what i need
 * initial value of 4
 * progress or not state
 *<div>
        <div>
            <Button onClick={}>Start Quiz</Button>
            <Button onClick={}>Stop Quiz</Button>
            <Button onClick={}>Mulligan</Button>
        </div>
    </div>; 
 * 
 */
