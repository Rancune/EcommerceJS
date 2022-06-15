const shopCart = document.querySelectorAll('Button');
const cart = document.querySelector('#cart');

let totalCart = 0;

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
    

    const articleRemove = document.createElement('button');
    articleRemove.classList.add('articleRemove');
    articleRemove.innerText = 'X';
    articleRemove.addEventListener('click', listingRemovable());
    

    
    totaleCart(price);

    article.appendChild(articleImg);
    article.appendChild(articlePrice);
    article.appendChild(articleRemove);

    cart.appendChild(article);
    


  });
}
);




function listingRemovable() {
  const removable = document.querySelectorAll('.articleRemove');
  removable.forEach(function(item) {
    item.addEventListener('click', deleteItem(this) 
    );
  }
  );
}






function deleteItem(removable) {
  console.log('delete');
  const parent = removable.parentElement;
  const price = parent.querySelector('.articlePrice').innerText;
  totaleCart(-price);
  parent.remove();

  // const removable = document.querySelectorAll('.articleRemove');
  // removable.forEach(function(item) {
  //   item.addEventListener('click', function() {
  //     const parent = this.parentElement;
  //     const price = parent.querySelector('.articlePrice').innerText;
  //     //const removePrice = this.parentElement.querySelector('.articlePrice').innerText;
  //     totaleCart(-price);
  //     parent.remove();
  //   })
  //   ;
  // }
  // );



}


function totaleCart(price) {
  
  const total = document.querySelector('.total');
  totalCart += parseInt(price);
  total.innerText = 'Total: ' + totalCart;
  console.log(price);
}