
export class User {
  firstName: string
  lastName: string
  username: string
  password: string
  email: string
  weight: number
  height: number

  constructor(
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    email: string,
    weight: number,
    height: number,
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.username = username
    this.password = password
    this.weight = weight
    this.height = height
    this.email = email
  }
}
