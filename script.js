console.log("Ready to go! 🚀");

const userInfo = {
  userId : 1,
  fullName: 'Rafael Guerra',
}

const book1 = {
  title: '1984',
  author: 'George Orwell',
  isbn: '',
  category: 'Dystopian'

}

const book2 = {
  title: 'Mice and men',
  author: 'John Steinbeck',
  isbn: '',
  category: 'drama'
}


userInfo.books = [book1, book2];

const library = [];

library.push(userInfo);



const book3 = {
  title: 'Mice and men',
  author: 'John Steinbeck',
  isbn: '',
  category: 'drama'
}

library[0].books.push(book3);

library.forEach(user => {
  user.books.forEach(book => {
    console.log(book.title);
  })

})