function vowelCount(text) {
    vowelMap = new Map();
    for (let individualCharacter of text.toLocaleLowerCase()) {
        if ("aeio".includes(individualCharacter)) {
            vowelMap.has(individualCharacter) ? vowelMap.set(individualCharacter, vowelMap.get(individualCharacter) + 1) : vowelMap.set(individualCharacter, 1);
        }
    }
    return vowelMap;
}
console.log(vowelCount("sanjai"));
console.log(vowelCount("bharathi"));