<script>
  import Navbar from './Header.svelte';
  import { onMount } from 'svelte';
  import { fetchProducts, fetchCategories } from './api';
  import ProductCard from './ProductCard.svelte';
  import { writable, derived } from 'svelte/store';

  let products = writable([]);
  let categories = writable([]);
  let selectedCategory = writable('');
  let sortOrder = writable('');
  let loading = writable(true);

  const filteredAndSortedProducts = derived(
    [products, selectedCategory, sortOrder],
    ([$products, $selectedCategory, $sortOrder]) => {
      let result = [...$products];
      
      if ($selectedCategory) {
        result = result.filter(product => product.category === $selectedCategory);
      }

      if ($sortOrder === 'asc') {
        result.sort((a, b) => a.price - b.price);
      } else if ($sortOrder === 'desc') {
        result.sort((a, b) => b.price - a.price);
      }

      return result;
    }
  );

  const loadProducts = async () => {
    try {
      const productsData = await fetchProducts();
      products.set(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      loading.set(false);
    }
  };

  const loadCategories = async () => {
    try {
      const categoriesData = await fetchCategories();
      categories.set(categoriesData);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  onMount(() => {
    loadProducts();
    loadCategories();
  });

  const filterByCategory = (event) => {
    selectedCategory.set(event.target.value);
  };

  const sortProducts = (event) => {
    sortOrder.set(event.target.value);
  };
</script>

<Navbar />

<main>
  <div>
    <select on:change={filterByCategory}>
      <option value="">All Categories</option>
      {#each $categories as category}
        <option value={category}>{category}</option>
      {/each}
    </select>
    <select on:change={sortProducts}>
      <option value="">Sort by</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  </div>
  {#if $loading}
    <p>Loading products...</p>
  {:else}
    <div class="grid">
      {#each $filteredAndSortedProducts as product}
        <ProductCard {product} />
      {/each}
    </div>
  {/if}
</main>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
</style>
