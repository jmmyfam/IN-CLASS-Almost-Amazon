import { signOut } from '../utils/auth';
import { booksOnSale, getBooks } from '../api/bookData';
import { emptyBooks, showBooks } from '../pages/books';
import { favoriteAuthors, getAuthors } from '../api/authorData';
import { emptyAuthors, showAuthors } from '../pages/authors';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale().then(showBooks);
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks().then((data) => {
      if (data.length === 0) {
        emptyBooks();
      } else {
        showBooks(data);
      }
    });
  });

  // ALL Authors
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors().then((data) => {
      if (data.length === 0) {
        emptyAuthors();
      } else {
        showAuthors(data);
      }
    });
    // console.warn('CLICKED AUTHORS');
  });

  // Favorite Authors
  document.querySelector('#favAuthors').addEventListener('click', () => {
    favoriteAuthors().then(showAuthors);
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
