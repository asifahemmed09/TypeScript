const arr: number[] = [1,2,3,4]

const arr2: Array<number> = [1,2,3,4]

const scores = [10,20,30]
// scores.push("a") //! Argument of type 'string' is not assignable to parameter of type 'number'.

const mix: ( string | number)[] = [1,"1","2",2]


const readonlyArr: readonly number[] = [1,2,3,4]

const readonlyArr2: ReadonlyArray<number> = [1,2,3,4]

function sum(nums: readonly number[]){
  return nums.reduce((curr, acc)=> curr + acc,0)
}

