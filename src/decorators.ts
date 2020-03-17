// method decorator
export function LogShout(log?: boolean) {
    console.log('LogShout evaluated');
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('propertyKey: ', propertyKey);
        return descriptor;
    }
}