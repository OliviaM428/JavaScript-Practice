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

//innerHTML version
function createBookCard(book) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${book.imageUrl}" alt="${book.title}">
        <div class="card-title">${book.title}</div>
        <div class="card-content">
            <p>Author: ${book.author}</p>
            <p>Year: ${book.year}</p>
            <p>Genres: ${book.genres.join(", ")}</p>
            <p>Pages: ${book.pages}</p>
            <p>Language: ${book.language}</p>
        </div>
    `;

    return card;
}

document.getElementById("book-card").appendChild(createBookCard(book));




//long way to create card, add each const individually. 
const container = document.getElementById("book-card");

const card = document.createElement("div");
card.className = "card";

const img = document.createElement("img");
img.src = book.imageUrl;
img.alt = book.title;

const title = document.createElement("div");
title.className = "card-title";
title.textContent = book.title;

const content = document.createElement("div");
content.className = "card-content";

const author = document.createElement("p");
author.textContent = "Author: " + book.author;

const year = document.createElement("p");
year.textContent = "Year: " + book.year;

const genres = document.createElement("p");
genres.textContent = "Genres: " + book.genres.join(", ");

const pages = document.createElement("p");
pages.textContent = "Pages: " + book.pages;

const language = document.createElement("p");
language.textContent = "Language: " + book.language;

content.appendChild(author);
content.appendChild(year);
content.appendChild(genres);
content.appendChild(pages);
content.appendChild(language);

card.appendChild(img);
card.appendChild(title);
card.appendChild(content);

container.appendChild(card);

// const card = document.CreateElement("div"); //set div element to build html using javascript if its not in html
    


