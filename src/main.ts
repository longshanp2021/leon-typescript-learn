import { Subject, Observable, from, of, Subscription } from "rxjs";
import { map, take, last, first, skip, filter } from "rxjs/operators";

// let p:Person=new Student();

class Person {
    name: string;
    hello() {

    }
}

class Student extends Person {
    study() {

    }
}

let s = new Student();
s

let p: Person = new Student();



// let obs: Subject<number> = new Subject<number>();

// let subscription: Subscription = obs
//     // .pipe(map(v => {

//     //     return 111;
//     // }))
//     .subscribe(ms => {
//         console.log('next:', ms);

//     }, err => {
//         console.log('err:', err);
//     }, () => {
//         console.log('complete!!');
//     });

// obs.next(1);
// subscription.unsubscribe();
// obs.next(2);
// obs.next(3);
// obs.next(4);
// // obs.error('我是错误信息哦');
// obs.complete();
// obs.next(5);
// obs.complete();

// of(123).subscribe(ms => {
//     console.log('next:', ms);
// }, err => {
//     console.log('err:', err);
// }, () => {
//     console.log('complete!!');
// });

// from([1, 2, 3, 4, 5])

//     .subscribe({
//         next: v => {

//         },
//         error: e => {

//         },
//         complete: () => {

//         }
//     });

// from([1, 2, 3, 4, 5])
//     // .pipe(skip(2))
//     .pipe(map(v => {

//         if (v <= 3) {
//             return '嘻嘻'
//         }

//         return '哈哈'

//     }))
//     .subscribe(ms => {
//         console.log('next:', ms);
//     }, err => {
//         console.log('err:', err);
//     }, () => {
//         console.log('complete!!');
//     });

from([1, 2, 3, 4, 5])
    // .pipe(skip(2))
    .pipe(filter(v => {
        if (v >= 3) {
            return true
        }
        // return;
        // if (v <= 3) {
        //     return '嘻嘻'
        // }

        // return '哈哈'

    }))
    .subscribe(ms => {
        console.log('next:', ms);
    }, err => {
        console.log('err:', err);
    }, () => {
        console.log('complete!!');
    });


// function hello(ms) {
//     return `你给我的消息是:${ms}`
// }



// let s1 = hello('小明');
// console.log(s1);
// s1 = hello('小明1');

// console.log(s1);


// for(let i=0;i<5;i++){

// }

// let arr = [-1, 0, 0.2, 0.3, 1, 2, 3, 4, 5];
// // let res = arr.map((s) => {
// //     if (s > 2) {
// //         return s
// //     }
// //     return null;
// // })
// // console.log(res);

// let r1 = arr.filter((s) => {
//     return s
//     // if (s > -2) {
//     //     return s
//     // }
//     // return null;
// })
// console.log(r1);
