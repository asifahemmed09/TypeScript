enum Size {
  SMALL,
  MEDIUM,
  LARGE,
}

const cupSize = Size.LARGE;
console.log(cupSize);

// auto increment enum
enum Values {
  FIRST = 1,
  SECOND,
  THIRD,
}

const rank = Values.FIRST;
console.log(rank);

// enum with value
enum Status {
  STATUS1 = 'PENDING',
  STATUS2 = 'SUCCESS',
  STATUS3 = 'FAILED',
}

const apiResponse = Status.STATUS1;
console.log(apiResponse);
