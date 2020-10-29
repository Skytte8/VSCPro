class StringStack{
    push(s){this.stack.push(s)}
    pop(){this.stack.pop()}
    stack=[]
}

let ss = new StringStack();

ss.push("pop");

console.log(ss)

ss.pop();

console.log(ss) 
