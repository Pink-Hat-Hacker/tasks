import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import sketch from "./assets/quizzer_sketch.png";
import { QuizList } from "../components/QuizList";
import { cars } from "../data/cars.json";
/** What is a Quiz
 * Title
 * Description
 * number of questions
 */
const QUIZZES = cars.map(
    (quiz): Quiz => ({
        ...quiz
    })
);

export function Quizzer(): JSX.Element {
    //state
    const [quiz, setQuizzes] = useState<Quiz[]>(QUIZZES);
    //need to add a quiz
    /* function addQuiz(newQuiz: Quiz){
        const existing = quiz.find((q: Quiz): boolean => q.id === newQuiz.id);
        if (existing === undefined) {
            setQuizzes([...quiz, newQuiz]);
        }
    } */

    //need to delete a quiz
    function deleteQuiz(id: string) {
        setQuizzes(quiz.filter((q: Quiz): boolean => q.id != id));
    }

    //edit questions of quiz
    /* function editQuiz(id: string, newQuiz: Quiz) {
        setQuizzes(
            quiz.map(
                (q: Quiz): Quiz => (q.id === id ? newQuiz : q)
            )
        );
    } */

    //reorder quiz questions
    //add new quiz question

    return (
        <div className="Quizzer">
            <header className="App-header">Quizzes</header>
            <ul>
                <li>Sketch</li>
                <li>Outline for quiz object</li>
                <li>Quiz editor template</li>
                <li>Attributes for Quiz List</li>
            </ul>
            <div>
                <QuizList>
                    quizzes={quiz}
                    deleteQuiz={deleteQuiz}
                </QuizList>
            </div>
            <img src={sketch} alt="App Sketch" height="750px"></img>
        </div>
    );
}
