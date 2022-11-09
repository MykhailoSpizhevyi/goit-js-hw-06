const categoriesTotal = document.querySelector('#categories')
function totalItems() {
  const list = categoriesTotal.querySelectorAll('.item')
  console.log('Number of categories:',list.length);

  list.forEach(el => {
    console.log('Category:',el.firstElementChild.textContent);
    console.log('Elements:',
      el.querySelectorAll('li').length,
    );
  });
}

totalItems();