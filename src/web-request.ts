import axios, {AxiosError, type AxiosResponse } from "axios"

interface Todo{
  userId: number
  id: number
  title: string
  completed: boolean
}

const fetchTodo = async() =>{
  try {
    const response: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response.data)
  } catch (error: any) {
    if(error instanceof AxiosError){
      console.log(error.message)
    }
  }
}
