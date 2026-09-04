interface Box{
  width: number
}

interface Box{
  height: number
}

const box: Box = {
  width: 20,
  height: 20
}


type Height = {height: number}
type Width = {width: number}

type Box1 =  Height & Width

const box1: Box1 = {
  width: 20,
  height: 20
}
