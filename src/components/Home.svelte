
<script>

  /**
 * @module MainPage
 * 
 * This module handles the main page of the application, including fetching products and categories,
 * filtering and sorting products, and managing the loading state. It also includes the skeleton loading
 * state and product grid display.
 */

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
  <div class="filters">
    <div class="categories">
      <label for="categories">Search by Category:</label>
      <select id="categories" on:change={filterByCategory}>
        <option value="">All Categories</option>
        {#each $categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
    </div>
    <div class="sort">
      <label for="sort">Sort by:</label>
      <select id="sort" on:change={sortProducts}>
        <option value="">Default</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  </div>

  {#if $loading}
  <!-- Skeleton Loading State -->
  <div class="loading-skeleton">
    {#each Array(8) as _, index}
      <div class="skeleton-item" key={index}>
        <div class="skeleton-image"></div>
        <div class="skeleton-title"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-button"></div>
      </div>
    {/each}
    </div>
  {:else}
    <div class="grid">
      {#each $filteredAndSortedProducts as product (product.id)}
        <ProductCard {product} />
      {/each}
    </div>
  {/if}
</main>

<style>
  main {
     margin: 20px auto; 
    max-width: 1200px; 
    padding: 0 16px; 
    box-sizing: content-box; 
  }

  .filters {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    background-color: transparent;
  }

  .categories, .sort {
    display: flex;
    align-items: center;
  }

  .categories label, .sort label {
    margin-right: 8px;
    font-weight: bold;
    color: #333;
  }

  .categories select, .sort select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    font-size: 1rem;
    color: #333;
    cursor: pointer;
  }

  .categories select {
    color: #7b7474;
  }

  .sort select {
    color: #7b7474;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 60px;
  }

  /* Skeleton loading styles */
  .loading-skeleton {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    margin: 20px;
  }

  .skeleton-item {
    background: #f0f0f0;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    animation: pulse 1.5s infinite ease-in-out;
  }

  .skeleton-image {
    background: #e0e0e0;
    height: 150px;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .skeleton-title,
  .skeleton-text,
  .skeleton-button {
    background: #e0e0e0;
    height: 20px;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  .skeleton-title {
    width: 60%;
    margin-bottom: 16px;
  }

  .skeleton-text {
    width: 80%;
  }

  .skeleton-button {
    width: 50%;
    margin-top: 16px;
  }

  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
</style>
