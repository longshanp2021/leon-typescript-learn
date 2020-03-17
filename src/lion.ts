import { Animal } from './animal';
import { LogShout } from './decorators';

export class Lion extends Animal {

    constructor(name: string, age: number) {
        super(name, age);
    }

    @LogShout()
    shout(): string {
        return '嗷呜!';
    }

    greet() {
        console.log(`This is ${this.name}, ${this.age} years old!`);
    }

}