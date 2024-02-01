class Cat extends Animal 
{
  constructor(name)
  {
    super(name);
  } 
  speak()//override
  {
    return `${this.name} meows.`;
  }
}