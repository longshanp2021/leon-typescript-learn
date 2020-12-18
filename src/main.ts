import "zone.js";

Zone.current.fork({
    name: 'myZone',
    onIntercept: (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, delegate: Function, source: string) => {
        console.log('onIntercept', delegate,source);
        return delegate;
    },
    onInvoke: (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, delegate: Function, applyThis: any, applyArgs?: any[], source?: string) => {
        console.log('onIntercept', delegate);
        return delegate();
    },
    // onHasTask: (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, hasTaskState: HasTaskState) => {
    //     console.log('has task',parentZoneDelegate);
    // },
    // onScheduleTask: (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, task: Task) => {
    //     // console.log('onScheduleTask',task);

    //     return task;
    // },
    // onInvokeTask: (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, task: Task, applyThis: any, applyArgs?: any[]) => {
    //     console.log('onInvokeTask', applyThis, applyArgs);
    //     // return task;
    // }
}).run(() => {

    const generateLog = (funName: string) => {
        return () => {
            console.log(`${funName} work`);
        };
    };

    const foo = generateLog('foo');
    const bar = generateLog('bar');
    const baz = () => {
        setTimeout(generateLog('baz'));
    };

    foo();
    baz();
    bar();

});

