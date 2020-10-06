test('test', ()=>{
    expect(2+2).toBe(4);
    expect(2+3).not.toBe(6);
})

test('true or false',() => {
    expect(1).toBeTruthy();
    expect(0).toBeFalsy();
})

test('object',()=>{
    expect({name:'a'}).toEqual({name:'a'});
})