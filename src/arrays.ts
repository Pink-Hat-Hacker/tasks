/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length != 0) {
        const num2 = [numbers[0], numbers[numbers.length - 1]];
        return num2;
    }
    return [];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((num: number): number => num * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let num2 = numbers.map(Number);
    num2 = num2.map((x: number): number => (isNaN(x) ? (x = 0) : x));
    //console.log(num2);
    return num2;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const amounts_2 = amounts.map((price: string): string =>
        price.includes("$") ? price.replace("$", "") : price
    );
    const amounts_3 = amounts_2.map((x: string): number => Number(x));
    const amounts_4 = amounts_3.map((x: number): number =>
        isNaN(x) ? (x = 0) : x
    );
    return amounts_4;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const messages_2 = messages.map((word: string): string =>
        word.endsWith("!") ? word.toUpperCase() : word
    );
    const messages_3 = messages_2.filter(
        (word: string): boolean => word.includes("?") == false
    );
    return messages_3;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const words_2 = words.filter((word: string): boolean => word.length < 4);
    return words_2.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rgbVal = colors.every(
        (c: string): boolean => c === "red" || c === "blue" || c === "green"
    );
    return rgbVal;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        addends = [...addends, 0];
    }
    const sums = addends.reduce((num: number, curr: number) => num + curr, 0);
    const add = addends.join("+");
    return sums + "=" + add;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    //if none of the values are negative
    if (values.some((val: number): boolean => val < 0) === false) {
        const num_sum = values.reduce(
            (total: number, num: number) => total + num,
            0
        );
        const arr_1 = [...values, num_sum];
        return arr_1;
    }
    //find negative
    const ind = values.findIndex((val: number): boolean => val < 0);
    const arr_2 = values.filter(
        (val: number): boolean => values.indexOf(val) < ind
    );
    const num_sum = arr_2.reduce(
        (total: number, num: number) => total + num,
        0
    );

    //put in new array
    const arr_3 = [...values];
    arr_3.splice(ind + 1, 0, num_sum);
    //console.log(arr_3);
    return arr_3;
    //return [0];
    //work on filters and get better at them***
}
