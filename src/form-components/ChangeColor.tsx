import React, { useState } from "react";
import { Form } from "react-bootstrap";
/*
The ChangeColor component offers the user a bunch of radio buttons 
labeled with different colors; choosing a radio button updates the text 
and color of a nearby box of text.

You will need state to represent the chosen color
You are free to make up your own list of colors, but you must have 
AT LEAST 8 unique colors.
Each color must be represented by a radio button.
There should be a box of text with a data-testid="colored-box" attribute 
and value.
The box of text should have the same text and backgroundColor style as the 
currently selected radio button.
HINT: We strongly recommend you use map to render 
all the color’s Form.Check tags rather than hardcoding each one!

HINT: We recommend you use the inline attribute for the radio buttons.
*/
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
const colors = [
    "orangered",
    "mediumvioletred",
    "gold",
    "goldenrod",
    "royalblue",
    "midnightblue",
    "forestgreen",
    "limegreen"
];
export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(colors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(event: ChangeEvent) =>
                        setColor(event.target.value)
                    }
                    id="color-orangered"
                    label="Orange Red"
                    value="orangered"
                    checked={color === colors[0]}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(event: ChangeEvent) =>
                        setColor(event.target.value)
                    }
                    id="color-mediumvioletred"
                    label="Medium Violet Red"
                    value="mediumvioletred"
                    checked={color === colors[1]}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(event: ChangeEvent) =>
                        setColor(event.target.value)
                    }
                    id="color-gold"
                    label="Gold"
                    value="gold"
                    checked={color === colors[2]}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(event: ChangeEvent) =>
                        setColor(event.target.value)
                    }
                    id="color-goldenrod"
                    label="Golden Rod"
                    value="goldenrod"
                    checked={color === colors[3]}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(event: ChangeEvent) =>
                        setColor(event.target.value)
                    }
                    id="color-royalblue"
                    label="Royal Blue"
                    value="royalblue"
                    checked={color === colors[4]}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(event: ChangeEvent) =>
                        setColor(event.target.value)
                    }
                    id="color-midnightblue"
                    label="Midnight Blue"
                    value="midnightblue"
                    checked={color === colors[5]}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(event: ChangeEvent) =>
                        setColor(event.target.value)
                    }
                    id="color-forestgreen"
                    label="Forest Green"
                    value="forestgreen"
                    checked={color === colors[6]}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(event: ChangeEvent) =>
                        setColor(event.target.value)
                    }
                    id="color-limegreen"
                    label="Lime Green"
                    value="limegreen"
                    checked={color === colors[7]}
                />
            </div>
            <div>
                You have chosen {""}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: colors.find(
                            (c: string): boolean => c === color
                        ),
                        color: "white"
                    }}
                >
                    {colors.find((c: string): boolean => c === color)}
                </span>
            </div>
        </div>
    );
}
