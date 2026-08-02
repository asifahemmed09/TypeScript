function getTea(kind: string | number){
  if (typeof kind === "string"){
    return `Making ${kind} tea`
  }
  return `Tea order: ${kind}`
}

function serveTea(kind?: string){
  if(kind){
    return `Serving ${kind}`
  }
  return "Serving default tea"
}

function orderTea(size: "small" | "medium" | "large" | number){
  if(size === "small"){
    return "small cup"
  }
  if(size === "medium"){
    return "medium cup"
  }
  if(size === "large"){
    return "large cup"
  }
  return `${size} cups`
}

class MasalaTea{
  serve(){
    return "serving masala tea"
  }
}

class RawTea{
  serve(){
    return "serving raw tea"
  }
}

function serve(tea: MasalaTea | RawTea){
  if (tea instanceof MasalaTea) {
    tea.serve()
  }
}

type ChaiOrder = {
  type: string
  sugar: number
}

function isTeaOrder(obj: any): obj is ChaiOrder{
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  )
}

function serveOrder(item: ChaiOrder | string){
  if (isTeaOrder(item)){
    return `serving ${item.type} with ${item.type} spoon of sugar`
  }
  return `serving ${item}`
}

type SpiceTea = {
  type: "spicy",
  spicyLevel: number
}
type GingerTea = {
  type: "ginger",
  amount: number
}

type ElaichiTea = {
  type: "elaichi",
  aroma: number
}
type Tea = SpiceTea | GingerTea | ElaichiTea

function makeTea(tea: Tea){
  switch (tea.type) {
    case "spicy":
      return "Making spicy tea"
    case "elaichi":
      return "Making elaichi tea"
    case "ginger":
      return "Making ginger tea"
  }
}
