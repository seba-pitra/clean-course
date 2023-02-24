(() => {
  interface Product {
    id: number;
    name: string;
  }

  //Sin SRP
  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  // class ProductBloc {
  //   loadProduct(id: number) {
  //     // Realiza un proceso para obtener el producto y retornarlo
  //     console.log("Producto: ", { id, name: "OLED Tv" });
  //   }

  //   saveProduct(product: Product) {
  //     // Realiza una petición para salvar en base de datos
  //     console.log("Guardando en base de datos", product);
  //   }

  //   notifyClients() {
  //     console.log("Enviando correo a los clientes");
  //   }

  //   onAddToCart(productId: number) {
  //     // Agregar al carrito de compras
  //     console.log("Agregando al carrito ", productId);
  //   }
  // }

  // const productBloc = new ProductBloc();

  // productBloc.loadProduct(10);
  // productBloc.saveProduct({ id: 10, name: "OLED TV" });
  // productBloc.notifyClients();
  // productBloc.onAddToCart(10);

  // _____________________________________________________________________________________________________

  class ProductService {
    //el service se encarga de hacer peticiones

    private httpAdapter: Object;

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    private masterEmail: string;

    sendEmail(emailList: string[], template: "to-clients" | "to-admins") {
      //este meotodo tampoco debe ir aqui. NO tiene relacion con el producto
      console.log("Enviando correo a los clientes", template, emailList);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    //Pero necesitamos los metodos que estaban aqui
    //asi que...
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    // la parte de cargar y guardar un producto deberia ser independiente al block. Debe ser un servicio
    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.productService.loadProduct(id);
    }
    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      this.productService.saveProduct(product);
    }
    notifyClients() {
      //este meotodo tampoco debe ir aqui. NO tiene relacion con el producto
      this.mailer.sendEmail(["example@gmail.com"], "to-clients");
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    onAddToCart(productId: number) {
      //este metodo tiene que ir en otra clase
      // Aqui esta bien
      console.log("Agregando al carrito ", productId);
    }
  }

  const mailer = new Mailer();
  const productService = new ProductService();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);
})();
