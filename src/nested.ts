import { getValue } from "@testing-library/user-event/dist/utils";
import { EndOfLineState } from "typescript";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const published_movies = questions.filter(
        (pub: Question): boolean => pub.published
    );
    return published_movies;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const new_qs = questions.filter(
        (not_empty: Question): boolean =>
            not_empty.body.length !== 0 ||
            not_empty.expected.length !== 0 ||
            not_empty.options.length !== 0
    );
    return new_qs;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const id_q = questions.find(
        (find_id: Question): boolean => id === find_id.id
    );
    console.log(id_q);
    if (id_q) {
        return id_q;
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const rem_q = questions.filter(
        (question: Question): boolean => question.id !== id
    );
    return rem_q;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const name_q = questions.map((q: Question): string => q.name);
    return name_q;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum_q = questions.reduce((s: number, q: Question) => s + q.points, 0);
    return sum_q;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const sum_q = questions.filter(
        (q: Question): boolean => q.published === true
    );
    const sum = sumPoints(sum_q);
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published";
    const line = questions.map(
        (val: Question) =>
            "\n" +
            val.id.toString() +
            "," +
            val.name.toString() +
            "," +
            val.options.length.toString() +
            "," +
            val.points.toString() +
            "," +
            val.published
    );
    return header + line.join("");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map(
        (ans: Question): Answer => ({
            questionId: ans.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (pub: Question): Question => ({ ...pub, published: true })
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const q_type = questions.map((type: Question): string => type.type);
    return q_type.every((val: string) => val === q_type[0]) ? true : false;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const new_q = makeBlankQuestion(id, name, type);
    return [...questions, new_q];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map(
        (rename: Question): Question => ({
            ...rename,
            name: rename.id === targetId ? newName : rename.name
        })
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return questions.map(
        (q_type: Question): Question => ({
            ...q_type,
            type: q_type.id === targetId ? newQuestionType : q_type.type,
            options:
                q_type.id === targetId &&
                newQuestionType === "short_answer_question"
                    ? []
                    : q_type.options
        })
    );
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    return questions.map((q: Question): Question => {
        if (q.id === targetId) {
            if (targetOptionIndex === -1) {
                return { ...q, options: [...q.options, newOption] };
            } else {
                const arr_2 = [...q.options];
                return {
                    ...q,
                    options: arr_2.splice(targetOptionIndex, 1, newOption)
                };
            }
        } else {
            return { ...q };
        }
    });
}
/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const new_arr = questions.map((q: Question): Question => ({ ...q }));
    const quest = new_arr.findIndex(
        (q: Question): boolean => q.id === targetId
    );
    const q_2 = duplicateQuestion(newId, questions[quest]);
    return new_arr.splice(quest + 1, 0, q_2);
}
