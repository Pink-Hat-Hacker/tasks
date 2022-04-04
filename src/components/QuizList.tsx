import React from "react";
//import { Quizzer } from "../quizzer/Quizzer";
import { Quiz } from "../interfaces/quiz";
import { Stack } from "react-bootstrap";
import { QuizView } from "./QuizView";

export function QuizList({
    deleteQuiz,
    editQuiz,
    quiz
}: {
    quiz: Quiz[];
    deleteQuiz: (id: string) => void;
    editQuiz: (id: string, newQuiz: Quiz) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {quiz.map((q: Quiz) => (
                <div key={q.id} className="bg-light border m-2 p-2">
                    <QuizView
                        quiz={q}
                        deleteQuiz={deleteQuiz}
                        editQuiz={editQuiz}
                    ></QuizView>
                </div>
            ))}
        </Stack>
    );
}
