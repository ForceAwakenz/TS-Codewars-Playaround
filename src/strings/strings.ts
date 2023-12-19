// Most frequently used words in a text
// https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

// Rough try 
export function topThreeWordsRough(text: string) {
  
    return Object.entries(
        text
            .split(/[^A-Za-z']/)
            .filter(Boolean)
            .reduce<Record<string, number>>((acc, curr) => Object
                .keys(acc)
                .includes(curr) ?
                { ...acc, [curr]: acc[curr] + 1 }
                : { ...acc, [curr]: 1 }, {}))
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(entry => entry[0]);
}


// Optimized and more accurate version
export function topThreeWords(text: string) {
    const count = text
        .toLowerCase()
        .match(/('*\w'*)+/g)
        ?.reduce<Record<string, number>>((acc, curr) => ({ ...acc, [curr]: !!acc[curr] ? ++acc[curr] : 1 }), {});
    return count
        ? Object.entries(count)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(entry => entry[0])
        : [];
}