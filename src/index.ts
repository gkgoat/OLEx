export let chrome = (self as any).chrome;
export function chromeSwitch(normal: (...a: any) => any,chromeFunc: (...a: any) => any){return function(...args: any) {return Function.prototype.call.call((chrome ? chromeFunc : normal),this,...args)}}