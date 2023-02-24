class customMap {
    constructor() {
        this.object = [];
    }
    
    [Symbol.iterator]() {
        let count = 0;
        return {
            next: () => {
                const value = count === (this.object.length) ? { value: this.object[count], done: true } : { value: this.object[count], done: false };
                count += 1;
                return value;
            }
        }
    }

    set(key, value) {
        let isKeyExist = false;
        this.object.forEach((keyValuePair) => {
            if (keyValuePair.key === key) {
                keyValuePair.value = value;
                isKeyExist = true;
            }
        })
        if (!isKeyExist) this.object.push({ key: key, value: value })
    }

    get(key) {
        const value = this.object.filter((keyValuePair) => {
            return key === keyValuePair.key
        });
        return value[0].value;
    }

    has(key) {
        let isKeyExist = false;
        this.object.forEach((keyValuePair) => {
            if (keyValuePair.key === key) {
                isKeyExist = true;
            }
        })
        return isKeyExist;
    }
}

function vowelCount(text) {
    vowelMap = new customMap();
    for (let individualCharacter of text.toLocaleLowerCase()) {
        if ("aeio".includes(individualCharacter)) {
            vowelMap.has(individualCharacter) ? vowelMap.set(individualCharacter, vowelMap.get(individualCharacter) + 1) : vowelMap.set(individualCharacter, 1);
        }
    }
    return vowelMap;
}
console.log(vowelCount("sanjai"));
console.log(vowelCount("bharathi"));