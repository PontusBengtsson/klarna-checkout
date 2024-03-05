import fetch from 'node-fetch';

export async function getProducts() {
	const res = await fetch(`https://fakestoreapi.com/products`);
	const products = await res.json();
	return products;
}

export async function getProduct(id) {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`);
	const product = await res.json();
	return product;
}
