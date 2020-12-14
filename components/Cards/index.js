// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function articleMaker(obj){
    const card = document.createElement('div'); 
    const headLine = document.createElement('div') 
    const author = document.createElement('div');  
    const imgDiv = document.createElement('div');
    const img = document.createElement('img'); 
    const span = document.createElement('span'); 

    //setting class names
    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgDiv.classList.add('img-container');
    img.setAttribute('src',obj.authorPhoto); // img src

    span.textContent = obj.authorName;
    headLine.textContent = obj.headline;
    card.addEventListener('click', event => {
        console.log(obj.headline)
    })

    imgDiv.appendChild(img);
    author.append(imgDiv,span);
    card.append(headLine,author);

    return card;
}
const myArr = [
    "javascript",
    "bootstrap",
    "technology",
    "jquery",
    "node"
];

