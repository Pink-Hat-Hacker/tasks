import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ChooseTeam } from "../bad-components/ChooseTeam";
import { RevealAnswer } from "./RevealAnswer";
import { StartAttempt } from "./StartAttempt";
import { TwoDice } from "./TwoDice";
import { ShoveBox } from "../bad-components/ShoveBox";
import { ChangeColor } from "../form-components/ChangeColor";
import { CheckAnswer } from "../form-components/CheckAnswer";
import { ColoredBox } from "../bad-components/ColoredBox";
import { DoubleHalf } from "../bad-components/DoubleHalf";
import { MultipleChoiceQuestion } from "../form-components/MultipleChoiceQuestion";
import { ChangeType } from "./ChangeType";
import { Counter } from "./Counter";
import { CycleHoliday } from "./CycleHoliday";
import { EditMode } from "../form-components/EditMode";
import { GiveAttempts } from "../form-components/GiveAttempts";

export function HideComponents(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    function changeVisible() {
        setVisible(!visible);
    }
    return (
        <div>
            <Button onClick={changeVisible}>
                {visible ? "Hide" : "Show"} Old Tasks
            </Button>
            {visible && (
                <div>
                    <hr></hr>
                    {<DoubleHalf></DoubleHalf>}
                    <CheckAnswer expectedAnswer="42"></CheckAnswer>
                    <hr></hr>
                    <GiveAttempts></GiveAttempts>
                    <hr></hr>
                    <EditMode></EditMode>
                    <hr></hr>
                    <ChangeColor></ChangeColor>
                    <hr></hr>
                    <MultipleChoiceQuestion
                        options={["a", "b", "c"]}
                        expectedAnswer="b"
                    ></MultipleChoiceQuestion>
                    <hr></hr>
                    <hr></hr>
                    <ChooseTeam></ChooseTeam>
                    <hr></hr>
                    <ColoredBox></ColoredBox>
                    <hr></hr>
                    <ShoveBox></ShoveBox>
                    <hr></hr>
                    <Counter></Counter>
                    <hr />
                    <RevealAnswer></RevealAnswer>
                    <hr />
                    <StartAttempt></StartAttempt>
                    <hr />
                    <TwoDice></TwoDice>
                    <hr />
                    <ChangeType></ChangeType>
                    <hr />
                    <CycleHoliday></CycleHoliday>
                </div>
            )}
        </div>
    );
}
