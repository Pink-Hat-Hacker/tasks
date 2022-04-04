import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";

export function QuizView({
    quiz,
    deleteQuiz,
    editQuiz
}: {
    quiz: Quiz;
    deleteQuiz: (id: string) => void;
    editQuiz: (id: string, newQuiz: Quiz) => void;
}): JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.title}</h3>
                    {/**Number of Questions probably */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{quiz.decription}</p>
                    {/**Question List */}
                </Col>
            </Row>
        </Container>
    );
}
