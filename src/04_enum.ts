enum Size {
  large = 1,
  medium,
  small
}
console.log(Size.large)

enum Color{
  red = "RED",
  green = "GREEN",
  blue = "BLUE"
}

const color: Color = Color.blue
console.log(color)

// Enum with constant
const enum Response{
  Pending,
  Fulfilled,
  Failed
}

const response = Response.Fulfilled
console.log(response)
