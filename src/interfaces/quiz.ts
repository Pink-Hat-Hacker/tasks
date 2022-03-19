import { Answer } from "./answer";
import { Question } from "./question";

export interface Quiz {
    id: string;
    title: string;
    decription: string;
    numQuestions: number;
    answers: Answer;
    typeOfQuestion: Question;
}
