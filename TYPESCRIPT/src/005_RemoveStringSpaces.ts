//Completion Time: 1.5 mins

//BREAKDOWN: split by spaces, then join. Easy.

export function noSpace(x:string) : string {
    return x.split(" ").join("");
  }


// CW top solution:
//return x.replace(/\s/g, ''); //regex instead... Yeah, mine was better B)

