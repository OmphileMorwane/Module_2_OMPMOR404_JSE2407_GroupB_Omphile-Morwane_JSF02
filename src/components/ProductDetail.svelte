<script>
  import { onMount } from 'svelte';
  import { fetchProduct } from './api';
  import { writable } from 'svelte/store';
  import { Link } from "svelte-routing";
  
  export let id;
  let product = writable(null);
  
  const loadProduct = async () => {
    product.set(await fetchProduct(id));
  };
  
  onMount(() => {
    loadProduct();
  });
  </script>
  
  <main>
  {#if $product}
    <div class="product-detail">
      <img src="{$product.image}" alt="{$product.title}" />
      <h1>{$product.title}</h1>
      <p>{$product.description}</p>
      <p>{$product.price}</p>
      <p>{$product.category}</p>
      <p>Rating: {$product.rating.rate}</p>
      <p>Number of Reviews: {$product.rating.count}</p>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
  <Link to="/">Back to products</Link>
  </main>
  
  <style>
  .product-detail {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  .product-detail img {
    max-width: 100%;
    height: auto;
  }
  </style>