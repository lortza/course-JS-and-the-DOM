// performance timer
const startingTime = performance.now();


// document.addEventListener('click', function(){
//   const mainHeading = document.querySelector('h1')
//   mainHeading.style.backgroundColor = 'red'
// })


// document.body.addEventListener('keypress', function(){
//   console.log('removing the child')
//   document.querySelector('#contain-all').firstElementChild.remove()
// })


// document.addEventListener('click', function () {
//    console.log('The document was clicked');
// }, true);

// document.body.addEventListener('click', function () {
//     console.log('The body element was clicked');
// });






// const myCustomDiv = document.createElement('div');

// function respondToTheClick(evt) {
//     console.log('A paragraph was clicked: ' + evt.target.textContent);
// }

// for (let i = 1; i <= 200; i++) {
//     const newElement = document.createElement('p');
//     newElement.textContent = 'This is paragraph number ' + i;

//     myCustomDiv.appendChild(newElement);
// }

// document.body.appendChild(myCustomDiv);

// myCustomDiv.addEventListener('click', respondToTheClick);




// const pHolder = document.createDocumentFragment();

// for (let i = 1; i <= 200; i++) {
//     const myP = document.createElement('p');
//     myP.textContent = 'This is paragraph ' + i;

//     pHolder.appendChild(myP);
// }
// document.body.appendChild(pHolder);


let count = 1
function generateParagraphs() {
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 500; i++) {
        const newElement = document.createElement('p');
        newElement.textContent = 'This is paragraph number ' + count;
        count = count + 1;

        fragment.appendChild(newElement);
        console.log('hola');
    }

    document.body.appendChild(fragment);

    if (count < 10000) {
        setTimeout(generateParagraphs, 0);
    }
}

generateParagraphs();


// performance timer
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');

