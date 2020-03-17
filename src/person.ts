import { Animal } from './animal';
import { LogShout } from './decorators';

export class Person extends Animal {

    constructor(name: string, age: number) {
        super(name, age);
    }

    @LogShout()
    shout(): string {
        return '啊!';
    }

    greet() {
        console.log(`This is ${this.name}, ${this.age} years old!`);
    }
}