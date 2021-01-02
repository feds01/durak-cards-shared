/**
 * Utility method to shuffle an array. The shuffler will perform
 * n (size of array) random element swaps for the array and return
 * the original array.
 *
 * @param {Array} array - An array of anything which will be shuffled.
 * @return The shuffled array.
 * */
export function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}