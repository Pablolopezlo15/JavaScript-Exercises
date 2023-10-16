class BookList{
    constructor(NumReaded,NumNotReaded,NextBook,CurrentBook,LastBook,AllBooks) {

        this.NumReaded = NumReaded;
        this.NumNotReaded = NumNotReaded;
        this.NextBook = NextBook;
        this.CurrentBook = 0;
        this.LastBook = -1;
        this.AllBooks = [];

    }
    add(Book){
        this.AllBooks.push(book);
        if (this.currentBookIndex === 0) {
            this.currentBookIndex = this.findFirstUnreadBookIndex();
        }
        new Book(Title,Genre,Author,false,null);
    }
    finishCurrentBook(){

    }
}

class Book{
    constructor(Title,Genre,Author,Read,ReadDate){
        this.Title = Title;
        this.Genre = Genre;
        this.Author = Author;
        this.Read = Read;
        this.ReadDate = ReadDate;
    }
}

add("Don Quijote", "Aventura", "Miguel de Cervantes");
console.log();

