// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    const header = document.createElement('div');
    const span = document.createElement('span');
    const h1 = document.createElement('h1');
    const span2 = document.createElement('span');

    header.classList.add('header');
    span2.classList.add('temp'); 

    header.append(span);
    header.append(h1);
    header.append(span2);

    span.textContent = 'SMARCH 28, 2019'; 
    h1.textContent = 'SMARCH 28, 2019'; 
    span2.textContent = '98';

    return header; 

}

const headerContainer = document.querySelector("div.header-container");

headerContainer.appendChild(Header());
