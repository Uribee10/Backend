class Usuario {
    constructor( nombre, apellido, libros, mascotas ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }
}
getFullName() {
    return 'El nombre completo es: ${this.nombre} ${this.apellido}';
}

addMascota(nuevaMascota){
    this.mascotas.push(nuevaMascota);
}

countMascotas (){
    return 'El total de mascotas actual es ${ this.mascotas.length }';
}

addBook (nombreLibro, nombreAutor) {
    this.libros.push({nombre: nombreLibro, autor: nombreAutor})
}

getBookNames() {
    const nombresLibros = [];

    this.libros.forEach(libro => {
      nombresLibros.push(libro.nombre);
    });

    return nombresLibros;
  }


const usuario1 = new Usuario(
  "Andres",
  "Uribe",
  [
    {
      nombre: "Tenias que ser tu ",
      autor: "Niky Moliviatis"
    },
    {
      nombre: "El curioso impertinente",
      autor: "Miguel de Cervantes"
    }
  ],
  ["Salome", "Bruno"]
);

let nombreCompletoUsuario = usuario1.getFullName();
usuario1.addMascota("Bruno");
let totalMascotas = usuario1.countMascotas();
usuario1.addBook("El curioso", "Miguel ed cervantes");
let nombresLibrosUsuario = usuario1.getBookNames();

console.log(nombreCompletoUsuario, totalMascotas, nombresLibrosUsuario);
