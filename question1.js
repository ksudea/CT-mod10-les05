// Task 1
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2 
function displayProductList() {
    let productList = document.createElement('ul');
    productList.id = 'products'
    products.forEach(product => {
        let productListItem = document.createElement('li');
        let productName = document.createElement('h4');
        productName.textContent = product.name;
        productListItem.appendChild(productName);
        let productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;
        productListItem.appendChild(productPrice);
        let productDescription = document.createElement('p');
        productDescription.textContent = `Description: ${product.description}`;
        productListItem.appendChild(productDescription);

        productList.appendChild(productListItem);
    });
    document.body.appendChild(productList);
}


// Task 3
window.addEventListener('load', displayProductList);
