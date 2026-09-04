type Counters = {[key: string]: number}

const counters: Counters = {likes: 20}


type Metrics = Record<"likes"|"comments"|"shares", number>

const social: Metrics = {likes:20, comments:20, shares:20}
