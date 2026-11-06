type Status = "complete" | "pending" | "failed"

const orderStatus: string = "complete"

function getOrderStatus(status: Status): void{
    console.log(status)
}

getOrderStatus(orderStatus as Status)
