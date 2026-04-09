const book = [{
    "id": 42,
    "title": "The Hitchhiker's Guide to the Galaxy",
    "author": "Douglas Adams",
    "year": 1979,
    "genres": ["Science Fiction", "Comedy", "Adventure"],
    "pages": 224,
    "language": "English",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81XSN3hA5gL.jpg"
},
{
    "id": 43,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "year": 1937,
    "genres": ["Fantasy", "Adventure"],
    "pages": 310,
    "language": "English",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"
},
{
    "id": 47,
    "title": "Harry Potter and the Philosopher's Stone",
    "author": "J.K. Rowling",
    "year": 1997,
    "genres": ["Fantasy", "Adventure"],
    "pages": 223,
    "language": "English",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg"
},
]

const container = document.createElement('.book-card');
book.forEach((result) => {
    const card = document.createElement("div");
    card.classList = "card-body";

    const content = `
        <div class="card">
        <div class="card-header" id="book-card">
        <img src="${result.imageUrl}" class="cardImage">
        
        </div>

            <div class="card-body"
             <h5>${result.title}</h5>
             <p>${result.author}</p>

            </div>
        </div>
    `;

    container.innerHTML += content;
});


    


