class BookList{
    constructor(NumReaded,NumNotReaded,NextBook,CurrentBook,LastBook,AllBooks) {

        this.NumReaded = NumReaded;
        this.NumNotReaded = NumNotReaded;
        this.NextBook = NextBook;
        this.CurrentBook = CurrentBook;
        this.LastBook = LastBook;
        this.AllBooks = AllBooks;

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

    add(Title,Genre,Author){
        new Book(Title,Genre,Author,false,null);
    }
}

