function wrapInArray<T>(data: T): T[] {
  return [data];
}

const numberArray = wrapInArray<number>(123);
const stringArray = wrapInArray<string>("xyz");

interface IUser {
  name: string;
  email: string;
}

interface IBlog {
  title: string;
  description: string;
}

interface APIResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

const userResponse: APIResponse<IUser> = {
  data: {
    name: "John Doe",
    email: "john@gmail.com",
  },
  success: true,
  statusCode: 200,
};

const fetchUser = async (): Promise<IUser | undefined> => {
  try {
    const res = await fetch("/api/v1/endpoint");
    const data = (await res.json()) as APIResponse<IUser>;
    if(!res.ok || !data.data){
        throw new Error("Failed to fetch user data")
    }
    return data.data;
  } catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }else{
        console.log("Something Went Wrong!")
    }
  }
};

const userData = await fetchUser();
console.log(userData?.name)
