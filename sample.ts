function identity<T>(value: T): T{
    return value

}


console.log("function",identity<number>(12))
console.log("function 2",identity<string>('kasdk'))