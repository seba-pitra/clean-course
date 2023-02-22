type Size = "" | "S" | "M" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    //se evita duplicidad de codigo
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key])).length <= 0) {
            throw Error(`${key} is empty`);
          }
        case "number":
          if (<number>(<unknown>this[key]) <= 0) {
            throw Error(`${key} is zero`);
          }
        default:
          throw new Error(`${typeof this[key]} is not supported`);
      }
    }

    return true;
  }

  toString() {
    //No "DRY"
    // if (this.name.length <= 0) throw Error("Name is empty");
    // if (this.price <= 0) throw Error("Price is zero");
    // if (this.size.length <= 0) throw Error("size is empty");
    //

    if (!this.isProductReady) return;

    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("Blue Large Pants", 10, "M");
  console.log(bluePants.toString());
})();
