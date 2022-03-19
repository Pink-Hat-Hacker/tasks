import React from "react";
import { Quiz } from "../interfaces/quiz";
import sketch from "./assets/quizzer_sketch.png";
/** What is a Quiz
 * Title
 * Description
 * number of questions
 */
export function Quizzer(): JSX.Element {
    //need to add a quiz
    /* function addQuiz(newQuiz: Quiz){
        const existing = quiz.find((q: Quiz): boolean => q.id === newQuiz.id);
        if (existing === undefined) {
            setQuizzes([...quiz, newQuiz]);
        }
    } */

    //need to delete a quiz
    /* function deleteQuiz(id: string){
        setQuizzes(quiz.filter((q: Quiz): boolean => q.id != id));
    } */

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
            <div>
                {/*all quiz list information*/}
                {/* <QuizList></QuizList> */}
            </div>
            <div>
                {/*
                <Button>Add New Quiz</Button>
                <AddQuizModal></AddQuizModal>
                */}
            </div>
            <img src={sketch} alt="App Sketch"></img>
        </div>
    );
}
