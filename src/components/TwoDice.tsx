import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { PassThrough } from "stream";

/**
 *  The TwoDice component will simulate a game where you roll 
 * two dice in attempt to get matching values. However, you lose 
 * the game if your dice ever come up as a pair of ones (“snake eyes”).

You will need two states, one for each dice.
Each dice’s value should be rendered in the View in a span tag of their own,
with the first dice having the data-testid of left-die and the second dice 
having the data-testid of right-die.
You will need two “Roll” buttons (labelled Roll Left and Roll Right).
Clicking a Roll button will change the value for the corresponding dice using 
the provided d6 function.
The initial values of the dice cannot be the same.
When the two states are equal, render a message that includes the word Lose.
When the two states are equal, render a message that includes the word Win.
 */

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dice1, setDice1] = useState<number>(1);
    const [dice2, setDice2] = useState<number>(2);

    function rollLeft(): void {
        setDice1(d6);
    }
    function rollRight(): void {
        setDice2(d6);
    }
    return (
        <div>
            <div>Two Dice</div>
            <div>
                <span data-testid="left-die">{dice1}</span>
                <Button onClick={rollLeft}>Roll Left</Button>
            </div>
            <div>
                <span data-testid="right-die">{dice2}</span>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            <div>
                {dice1 === dice2 && dice1 !== 1 && <span>Win</span>}
                {dice1 === 1 && dice2 === 1 && <div>Lose</div>}
            </div>
        </div>
    );
}
