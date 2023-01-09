import { Subject, from, Observable } from "rxjs";

// const subject = new Subject<string>();

// subject.subscribe({ next: (v) => console.log(`observerA${v}`) });

// subject.subscribe({ next: (v) => console.log(`observerB${v}`) });

const observable = new Observable((value: any) => {
  value.next(1);
  value.next(2);
  setTimeout(() => {
    value.next(3);
    value.next(4);
    value.complete();
  }, 1000);
});

observable.subscribe({
  next(v) {
    console.log("v=", v);
  },
  error(err) {
    console.log("err=", err);
  },
  complete() {
    console.log("done");
  },
});

// console.log('just before subscribe');
// observable.subscribe({
//   next(x) {
//     console.log('got value ' + x);
//   },
//   error(err) {
//     console.error('something wrong occurred: ' + err);
//   },
//   complete() {
//     console.log('done');
//   },
// });
// console.log('just after subscribe');

// subject.next('这个第一次订阅')
// subject.next('这个第二次订阅')
// subject.next('这个第三次订阅')
// const observable = from(['11','22','33'])

// observable.subscribe(subject)

// from(["444", "555", "666", "777"]).subscribe(subject);
