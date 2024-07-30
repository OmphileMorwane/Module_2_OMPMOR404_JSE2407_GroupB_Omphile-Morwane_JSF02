import { writable } from 'svelte/store';

export const selectedCategory = writable('');
export const sortOrder = writable('');
export const products = writable([]);
export const categories = writable([]);
export const productDetail = writable(null);