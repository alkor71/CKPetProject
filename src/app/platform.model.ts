export class Platform 
{
  id!: number;
  name!: string;
  publisher!: string;
  genre!: string;
  price!: number;

  constructor(init?: Partial<Platform>) 
  {
    Object.assign(this, init);
  }
}