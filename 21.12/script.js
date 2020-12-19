/**
 *
 * Дан массив people с объектами, которые содерержат в себе имя и работу человека.
 *
 * - Добавить <h1> элемент на страницу для каждого из имени человека 
 * - Добавить <h2> элемент на страницу для каждой из работ человека
 *
 * Весь HTML должен идти в <div> с id="content"
 *
 * <div id="content">
 *      <h1>{Имя}</h1>
 *      <h2>{Работа}</h2>
 *      .....
 * </div>
 */

function exerciseOne(arrayOfPeople) {
  const content = document.querySelector("#content");

  people.forEach(people => {
    const name = document.createElement('h1');
    const job = document.createElement('h2');

    name.innerText = people.name;
    job.innerText = people.job;

    content.appendChild(name);
    content.appendChild(job);
  })
}

/**
 *
 * Создайте список покупок. Используйте unordered list.
 *
 * Весь HTML должен идти в <div> с id="content"
 *
 */
function exerciseTwo(shopping) {
  const content = document.querySelector("#content");
  const shoppingList = document.createElement('ul');
  
  content.appendChild(shoppingList);

  shopping.forEach(item => {
    goods = document.createElement('li');
    goods.innerText = item;
    shoppingList.appendChild(goods);
  })
}

/**
    Дан массив с книгами
    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];
    Пройдитесь по массиву.
    - Для каждой книги создайте <p> элемент с названием книги и ее автором и добавьте на страницу.
    - Используйте <ul> и <li> для отображения книг.
    - Добавьте <img> для каждой книги с ее обложкой.
    - Измените стиль книги в зависимости от того прочитана она (зеленый) или нет (красный).
**/
function exerciseThree(books) {
  const content = document.querySelector("#content");
  const booksList = document.createElement('ul');

  booksList.style.display = 'grid';
  booksList.style.gridTemplateColumns = 'repeat(3, 1fr)';
  booksList.style.gridColumnGap = '30px';
  booksList.style.listStyleType = 'none';

  books.forEach(book => {
    const booksListItem = document.createElement('li');
    const booksDiscr = document.createElement('p');
    const booksCover = document.createElement('img');

    content.appendChild(booksList);
    booksList.appendChild(booksListItem);
    booksListItem.appendChild(booksDiscr);
    booksListItem.appendChild(booksCover);

    booksDiscr.innerText = `${book.title} - ${book.author}`;

    booksCover.src = `img/${book.title}.png`;

    booksListItem.style.padding = '10px';
    booksCover.style.height = '300px';
    booksCover.style.width = '200px';

    if (book.alreadyRead) {
      booksListItem.style.backgroundColor = 'green';
    } else {
      booksListItem.style.backgroundColor = 'red';
    }
  });
}

//
//
//
//
// НЕ РЕДАКТИРОВАТЬ ВСЕ ЧТО НИЖЕ
//
//
//
//

const people = [{
    name: "Chris",
    job: "Teacher"
  },
  {
    name: "Joanna",
    job: "Student"
  },
  {
    name: "Boris",
    job: "Prime Minister"
  }
];

exerciseOne(people);

const shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [{
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);