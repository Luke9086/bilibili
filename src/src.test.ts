import { test, expect } from 'vitest';

function sum(a:number,b:number):number{
    return a+b;
}

test('learn test', ()=>{
    expect(sum(1,1)).toBe(2);
    expect(sum(1,2)).toBe(3);
})