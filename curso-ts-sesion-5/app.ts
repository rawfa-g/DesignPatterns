class Rectangle {
  // baseRectangle: number = 2;
  // heightRectangle: number = 3;
  // color: string = "red";

  // //podemos darle parametros al constructor, eso siempre será encesario cuando construyamos un objeto.
  constructor(
    public baseRectangle: number,
    public heightRectangle: number,
    public color: string
  ) {
    // this.baseRectangle = baseRect;
    // this.heightRectangle = heightRect;
    // this.color = colorRect;
  }
  // //Crear un constructor nos permite iniciar las diferentes propiedades que forman parte de la clase para enviar un conjunto de datos al crear el objeto y ese objeto tiene los valores preasignados que mandemos.

  calcularArea(): number {
    const A = this.baseRectangle * this.heightRectangle;
    // //Si queremos usar unas propiedades que están fuera del metodo pero forman parte de la clase y por eso usamos la palabra clave "this"
    this.printResult(A);
    return A;
  }

  calcularPerimetro(): number {
    return 2 * this.baseRectangle + 2 * this.heightRectangle;
  }

  static calcularPerimetroRectangulo(a: number, b: number) {
    return 2 * a + 2 * b;
  }

  printResult(result: number): void {
    // // if (result < 10) {
    // //   console.log("Valores normales");
    // // } else {
    // //   console.log("valores muy altos");
    // // }
    console.log(result);
  }
}

class Circle {
  static circlesNumber: number = 0;

  static readonly PI: number = 3.141592;

  constructor(private radius: number) {
    Circle.circlesNumber++;
  }
  calulateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// //Los metodos deberian reflejar una accion.
// //p.ejemplo calcularPerimetro, calcularArea
// //declarar metodos (un metodo es la equivalencia a una función JS pero en una clase)
// //dentro de la clase no tenemos que declarar ni las variables ni los metodos (con let, const, etc)
// //dentro de el metodo, QUE NO CLASE, si definieremos nuestras variables como solemos hacer

let variable: number = 0;

// //crear instancias u objetos de la clase
// //con new Creamos un nuevo ojeto Rectangulo podemos crear los objetos que queramos con la palabra reservada "new" y la clase.
// //Recomendamos mucho poner los () despues de definir el nuevo objeto para recordar que es una clase
let rectangle1: Rectangle = new Rectangle(2, 5, "red");
let rectangle2: Rectangle = new Rectangle(5, 10, "blue");
let rectangle3: Rectangle = new Rectangle(3, 3, "white");

// //Podemos controlar la accesibilidad de las propiedades y los metodos de la clase
// //Porque? P.ej. si en un metodo hemos llevado unas validaciones para un uso interno luego usarlo dentro de otro metodo, puede ocasionar errores de que se usen cuando no queremos. para eso lo interesante es usar PRIVATE.
// //PRIVTE nos permite que la clase puede usar ese metodo pero no desde fuera.

rectangle1.calcularArea();
rectangle2.calcularArea();
rectangle3.calcularArea();

console.log(Math.pow(2, 0));

const resultadoPerimetro = Rectangle.calcularPerimetroRectangulo(2, 2);
console.log("El resultado es: " + resultadoPerimetro);

// rectangle1.printResult(15);
// rectangle1.color = "Blue";
console.log("");
console.log("");

// // Aqui creamos 4 circulos y llamos a la propiedad estatica de Circle que nos hace el recuento
let circle1: Circle = new Circle(2);
let circle2: Circle = new Circle(5);
let circle3: Circle = new Circle(1);
let circle4: Circle = new Circle(1);

console.log(Circle.circlesNumber);

// Circle.PI = 4
// No podriamos pq es solo lectura
