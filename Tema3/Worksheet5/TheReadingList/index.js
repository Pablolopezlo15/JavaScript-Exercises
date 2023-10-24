class BookList{
    constructor() {

        this.NumReaded = 0;
        this.NumNotReaded = 0;
        this.CurrentBook = -1;
        this.LastBook = -1;
        this.AllBooks = [];
    }

    add(Book){
        if(this.AllBooks.length == 0){
            this.AllBooks.push(Book);
            this.CurrentBook++;
            this.NumNotReaded++;
        }
        else{
            this.AllBooks.push(Book);
            this.NumNotReaded++;

        }
    }

    currentBook(){
        if(this.CurrentBook == -1) {
            console.log("No tienes libros para leer");
        }
        else {
            console.log("El libro que estás leyendo es: "+this.AllBooks[this.CurrentBook].Title)
        }
    }

    finishCurrentBook(){
        console.log("Has terminado un libro")
        this.AllBooks[this.CurrentBook].Read = true;
        this.CurrentBook++;
        this.NumReaded++;
        this.ReadDate = Date();
    }

    nextBook(){
        if(this.CurrentBook == 0){
            let next = this.CurrentBook+1;

        }
    }
    
}

class Book{
    constructor(Title,Genre,Author){
        this.Title = Title;
        this.Genre = Genre;
        this.Author = Author;
        this.Read = false;
        this.ReadDate = null;
    }
}


//Lista1 = new BookList();
//Libro1 = new Book("Don Quijote", "Aventura", "Miguel de Cervantes",false);
//Libro2 = new Book("El Señor de los Anillos", "Ficción", "J.R.R Tolkien", false);
//Libro3 = new Book("Libro1", "Ficción", "J.R.R Tolkien", false);
//Libro4 = new Book("Libro2", "Ficción", "J.R.R Tolkien", false);
//Libro5 = new Book("Libro3", "Ficción", "J.R.R Tolkien", false);
//Lista1.add(Libro1);
//Lista1.add(Libro2);
//Lista1.add(Libro3);
//
//Lista1.currentBook();
//Lista1.finishCurrentBook();
//Lista1.currentBook();
//console.log(Lista1.AllBooks);

function asociarEventos() {
    const nuevoLibro = document.getElementById("nuevolibro");
    nuevoLibro.addEventListener("click", añadirLibro);
}
function nuevaLibreria() {
    const nombre = document.getElementById("form2").nombreLibreria;
    nombre = new BookList();

}
function añadirLibro() {
    const titulo = document.getElementById("form").titulo;
    const genero = document.getElementById("form").genero;
    const autor = document.getElementById("form").autor;
    let contador;
    for(i = 0; i < this.AllBooks.length; i++){
        contador++;
    }
    libro = new Book(titulo, genero, autor);
    Lista1.add(libro)
}
