function addFavBook(bookname) {
    !bookname.includes('Great') && favBooks.push(bookname);
}

function printFavBook() {
    for (let books of favBooks) {
        let count = 0;
        const botao = document.querySelector('.button');
        botao.addEventListener('click', () => {
            document.querySelector('.resultado').innerText += ` > ${books} \n`;
            count++;
            if (count === 6) {
                document.querySelector('.resultado').innerText = 'ta bom né?';
                console.log(`chegaaa`);
                botao.disabled = true;
            }
        });
    }
}

let favBooks = [];

addFavBook('A song of ice and fire');
addFavBook('The Great gatsby');
addFavBook('Crime and Punishment');
addFavBook('Great Expectations');
addFavBook('You don`t know js');

printFavBook();
