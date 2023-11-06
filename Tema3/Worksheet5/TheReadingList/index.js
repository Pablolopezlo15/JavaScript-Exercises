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
        this.ReadDate = new Date().toLocaleString();
    }

    nextBook(){
        if(this.CurrentBook == 0){
            let next = this.CurrentBook+1;

        }
    }

    numLibros(){
        let contador;
        for(i = 0; i < this.AllBooks.length; i++){
            contador++;
        }
        return contador;
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


Lista1 = new BookList();


function asociarEventos() {
    nuevoLibro = document.getElementById("nuevolibro");
    nuevoLibro.addEventListener("click", añadirLibro);
    mostrarListaDeLibros();
}

function añadirLibro() {
    const titulo = document.getElementById("titulo").value;
    const genero = document.getElementById("genero").value;
    const autor = document.getElementById("autor").value;
    const libro = new Book(titulo, genero, autor);
    Lista1.add(libro);
    mostrarListaDeLibros();
}

function mostrarListaDeLibros() {
    const bookListDiv = document.getElementById("bookList");
    bookListDiv.innerHTML = ""; 

    Lista1.AllBooks.forEach((book, num) => {

        const bookInfo = document.createElement("div");
        bookInfo.className = "book-entry"; 

        if (book.Read) {
            bookInfo.classList.add("read-yes"); 
        } else {
            bookInfo.classList.add("read-no"); 
        }
        
        bookInfo.innerHTML = `
            <h2>${book.Title}</h2>
            <p><strong>Género:</strong> ${book.Genre}</p>
            <p><strong>Autor:</strong> ${book.Author}</p>
            <p><strong>Leído:</strong> ${book.Read ? "Sí" : "No"}</p>
            <p><strong>Fecha de lectura:</strong> ${book.ReadDate ? book.ReadDate : ""}</p>
            <button class="leido">Marcar como leído</button>
            <button class="borrarlibro">Eliminar</button>
        `;
        bookListDiv.appendChild(bookInfo);

        const marcarLeido = bookInfo.querySelector(".leido");
        const borrarlibro = bookInfo.querySelector(".borrarlibro");

        marcarLeido.addEventListener("click", () => marcarComoLeido(num));
        borrarlibro.addEventListener("click", () => eliminarLibro(num));
    
    
    });
}




function marcarComoLeido(num) {
    if (Lista1.AllBooks[num]) {
        Lista1.AllBooks[num].Read = true;
        Lista1.AllBooks[num].ReadDate = new Date().toLocaleString();
        mostrarListaDeLibros(); 
    }
}

function eliminarLibro(num) {
    if (Lista1.AllBooks[num]) {
        Lista1.AllBooks.splice(num, 1);
        mostrarListaDeLibros(); 
    }
}