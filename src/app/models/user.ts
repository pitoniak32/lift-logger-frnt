
export class User {
  id: string
  firstName: string
  lastName: string
  username: string
  password: string
  confirmPassword: string
  email: string
  weight: number
  height: number

  constructor(
    id: string, 
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    confirmPassword:string,
    email: string,
    weight: number,
    height: number,
  ) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.username = username
    this.password = password
    this.confirmPassword = confirmPassword
    this.weight = weight
    this.height = height
    this.email = email
  }
}
