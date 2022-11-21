/* eslint-disable no-unused-vars */

class MyEventEmitter {
    constructor() {
        this.events = {}
    }

    addListener(str, func) {
        if (this.events[str] === undefined) { // ????? why undefined
            this.events[str] = [func] // ????? why =[func] not a clue in specs
        }
        else {
            this.events[str].push(func) // ?????
        }
    }

    emit(str, ...args) {
        this.events[str].forEach(func=> {   // ?????
            func(...args);
        });
    }
}
