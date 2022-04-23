import React, { useState } from "react";
//import { Quiz } from "../interfaces/quiz";
import sketch from "./assets/quizzer_sketch.png";
//import { QuizList } from "../components/QuizList";
//import { cars } from "../data/cars.json";
import { Form } from "react-bootstrap";
/** What is a Quiz
 * Title
 * Description
 * number of questions
 */
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function Quizzer(): JSX.Element {
    const quizTitles = ["JDM Cars", "American Cars", "Euro Cars"];
    const [quiz_t, setQuizTitle] = useState<string>(quizTitles[0]);
    //JDM
    const jdmQAs = [
        "Select an answer",
        "Japanese Domestic Market",
        "Jazzy Dojo Muzzler",
        "Jumping Demented Monkeys"
    ];
    const [jdmAs, setJDMas] = useState<string>(jdmQAs[0]);
    //AMERICAN
    const amerQAs = ["Select an answer", "Pontiac", "Mustang", "Camaro"];
    const [amerAs, setAMERas] = useState<string>(amerQAs[0]);
    //EURO
    const euroQAs = ["Select an answer", "Mini", "MG MGB", "Citroen DS"];
    const [euroAs, setEUROas] = useState<string>(euroQAs[0]);
    //Expected answers
    const expectedAnswer = [jdmQAs[1], amerQAs[2], euroQAs[2]];
    return (
        <div className="Quizzer">
            <header className="App-header">Quizzes</header>
            <ul>
                <li>Sketch</li>
                <li>Outline for quiz object</li>
                <li>Quiz editor template</li>
                <li>Attributes for Quiz List</li>
                <li>Hide old components</li>
            </ul>
            {/* <div>
                <QuizList quizzes={quiz} deleteQuiz={deleteQuiz}></QuizList>
            </div> */}
            <div>
                <Form.Group>
                    <Form.Label>Select a Quiz</Form.Label>
                    <Form.Select
                        value={quiz_t}
                        onChange={(event: ChangeEvent) =>
                            setQuizTitle(event.target.value)
                        }
                    >
                        {quizTitles.map((qt: string) => (
                            <option key={qt} value={qt}>
                                {qt}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            {/**JDM */}
            <div>
                {quiz_t === quizTitles[0] && (
                    <Form.Group>
                        <Form.Label>{quiz_t}</Form.Label>
                        <span>What does [JDM] stand for?</span>
                        <Form.Select
                            value={jdmAs}
                            onChange={(event: ChangeEvent) =>
                                setJDMas(event.target.value)
                            }
                        >
                            {jdmQAs.map((a: string) => (
                                <option key={a} value={a}>
                                    {a}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                )}
                {quiz_t === quizTitles[0] && expectedAnswer[0] === jdmAs && (
                    <span>✔️</span>
                )}
                {quiz_t === quizTitles[0] && expectedAnswer[0] !== jdmAs && (
                    <span>❌</span>
                )}
            </div>
            {/**AMERICAN */}
            <div>
                {quiz_t === quizTitles[1] && (
                    <Form.Group>
                        <Form.Label>{quiz_t}</Form.Label>
                        <span>
                            What American muscle car model is now an electric
                            SUV?
                        </span>
                        <Form.Select
                            value={amerAs}
                            onChange={(event: ChangeEvent) =>
                                setAMERas(event.target.value)
                            }
                        >
                            {amerQAs.map((a: string) => (
                                <option key={a} value={a}>
                                    {a}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                )}
                {quiz_t === quizTitles[1] && expectedAnswer[1] === amerAs && (
                    <span>✔️</span>
                )}
                {quiz_t === quizTitles[1] && expectedAnswer[1] !== amerAs && (
                    <span>❌</span>
                )}
            </div>
            {/**EURO */}
            <div>
                {quiz_t === quizTitles[2] && (
                    <Form.Group>
                        <Form.Label>{quiz_t}</Form.Label>
                        <span>
                            What classic European car looks like a Datsun 2000
                            Roadster?
                        </span>
                        <Form.Select
                            value={euroAs}
                            onChange={(event: ChangeEvent) =>
                                setEUROas(event.target.value)
                            }
                        >
                            {euroQAs.map((a: string) => (
                                <option key={a} value={a}>
                                    {a}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                )}
                {quiz_t === quizTitles[2] && expectedAnswer[2] === euroAs && (
                    <span>✔️</span>
                )}
                {quiz_t === quizTitles[2] && expectedAnswer[2] !== euroAs && (
                    <span>❌</span>
                )}
            </div>
            <img src={sketch} alt="App Sketch" height="750px"></img>
        </div>
    );
}
