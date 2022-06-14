const shopCart = document.querySelectorAll('Button');
const cart = document.querySelector('#cart');

shopCart.forEach(function(item) {
  item.addEventListener('click', function() {
    const parent = this.parentNode;
    const img = parent.querySelector('img');
    const price = parent.querySelector('p').innerText;
    const article = document.createElement('div');
    article.classList.add('article');

    const articleImg = document.createElement('img');
    articleImg.classList.add('articleImg');
    articleImg.setAttribute('src', img.src);

    const articlePrice = document.createElement('p');
    articlePrice.classList.add('articlePrice');
    articlePrice.innerText = price;

    const articleRemove = document.createElement('button', 'Remove');
    articleRemove.addEventListener('click', deleteItem());
    articleRemove.classList.add('articleRemove');




    cart.appendChild(articleImg);
    cart.appendChild(articlePrice);
    cart.appendChild(articleRemove);

    const total = cart.querySelectorAll('div');

  });
}
);


function deleteItem() {
  const article = document.querySelectorAll('.article');
  article.forEach(function(item) {
    item.addEventListener('click', function() {
      this.remove();
    });
  }
  );
}