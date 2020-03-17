export abstract class Animal {

    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    abstract shout(): string;
}