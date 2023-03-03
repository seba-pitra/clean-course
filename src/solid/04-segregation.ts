interface IBird {
  eat() :void
}

interface IFlyingBirds {
  fly() :void
}

interface IRunningBird {
  run() :void
}

interface ISwimmerBird {
  swim():void
}

class Tucan implements IBird, IFlyingBirds{
  public eat() {}
  public fly() {}
}

class HumminBird implements IBird, IFlyingBirds{
  public fly() {}
  public eat() {}
}

class Ostrich implements IBird, IRunningBird{
  public eat() {}
  public run() {}
}

class Penguin implements IBird, ISwimmerBird {
  public eat() {}
  public swim() {}
} 
