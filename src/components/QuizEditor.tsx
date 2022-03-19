import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";

export function QuizEditor({
    changeEditing,
    quiz,
    editQuiz,
    deleteQuiz
}: {
    changeEditing: () => void;
    quiz: Quiz;
    editQuiz: (id: string, newQuiz: Quiz) => void;
    deleteQuiz: (id: string) => void;
}): JSX.Element {
    const [title, setTitle] = useState<string>(quiz.title);
    const [numQs, setNumQs] = useState<string>(quiz.numQuestions.toString);
    const [description, setDescription] = useState<string>(quiz.decription);

    function save() {
        editQuiz(quiz.id, {
            ...quiz,
            title: title,
            numQuestions: parseInt(numQs) || 0,
            decription: description
        });
        changeEditing();
    }

    function cancel() {
        changeEditing();
    }

    return (
        <Container>
            <Row>
                <Col>
                    {/**Title */}
                    <Form.Group controlId="formQuizTitle" as={Row}>
                        <Form.Label column sm={2}>
                            Title:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={title}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTitle(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/**NumQuestions */}
                    <Form.Group controlId="formMovieRelease" as={Row}>
                        <Form.Label column sm={2}>
                            Number of Questions:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="number"
                                value={numQs}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setNumQs(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/**Description */}
                    <Form.Group controlId="formQuizDescription" as={Row}>
                        <Form.Label column sm={2}>
                            Description:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={(
                                    event: React.ChangeEvent<HTMLTextAreaElement>
                                ) => setDescription(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
}
