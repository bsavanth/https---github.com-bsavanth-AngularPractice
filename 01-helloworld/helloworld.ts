console.log("Hello World");

let nums : Array<Number> =[];

nums.push(2);

nums.push(3);

for(let num in nums)
{
    console.log(num);
}

let dict = new Map<string, Number>();

dict.set("hello", 2);