export interface IUsuario {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  isTop10: boolean;
  birthdate: Date;
  gender: String;
  percent: number;
}
export class Usuario implements IUsuario {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public age: number,
    public isTop10: boolean,
    public birthdate: Date,
    public gender: String,
    public percent: number
  ) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
