<script>
  import { Link } from 'svelte-routing';
  export let product;

  // Helper function to generate an array of stars for rating
  function getRatingStars(rate) {
    const totalStars = 5;
    const roundedRate = Math.round(rate);
    return Array(totalStars).fill(false).map((_, index) => index < roundedRate);
  }

  // Add to Cart button click handler
  function addToCart() {
    // Logic to add product to cart goes here
    console.log('Add to cart:', product.title);
  }
</script>

<div class="product-card">
  <Link to={`/product/${product.id}`}>
    <img src={product.image} alt={product.title} class="product-image" />
    <h2 class="product-title">{product.title}</h2>
    <p class="product-price">${product.price}</p>
    <p class="product-category">{product.category}</p>
    <div class="product-rating">
      {#each getRatingStars(product.rating.rate) as filled, index}
        <svg class="rating-star {filled ? 'filled' : 'empty'}" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      {/each}
      {#each Array(5 - getRatingStars(product.rating.rate).length) as _}
        <svg class="rating-star empty" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      {/each}
    </div>
    <div class="actions">
    <button class="add-to-cart" on:click={addToCart}>Add to Cart</button>
    <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
    </div>
  </Link>
</div>

<style>
  .product-card {
    border: 1px solid #ccc;
    padding: 12px;
    text-align: center;
    cursor: pointer;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    width: 250px; /* Increased width */
    height: 450px; /* Fixed height */
    position: relative;
  }

  .product-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .product-image {
    width: 100%;
    height: 150px; /* Fixed height for images */
    object-fit:contain;
    border-radius: 8px;
  }

  .product-title {
    font-size: 1rem; /* Adjust font size */
    font-weight: bold;
    color: #333;
    margin: 0.5rem 0;
  }

  .product-price {
    font-size: 0.875rem; /* Adjust font size */
    color: #1c1717;
    font-weight: bold;
  }

  .product-category {
    display: inline-block;
    background-color: #e0f7fa;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem; /* Adjust font size */
  }

  .product-rating {
    display: flex;
    justify-content: center;
    margin: 0.5rem 0;
  }

  .rating-star {
    width: 16px; /* Adjust star size */
    height: 16px; /* Adjust star size */
    fill: #ffd902;
    stroke: #ffd902;
  }

  .rating-star.empty {
    stroke: #777474;
    fill: #777474;
  }

  .add-to-cart {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 6px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.75rem; /* Adjust font size */
    font-weight: bold;
    margin-top: 8px;
    transition: background-color 0.3s;
  }

  .add-to-cart:hover {
    background-color: #0056b3;
  }

  .heart-icon {
    width: 24px; /* Adjust icon size */
    height: 24px; /* Adjust icon size */
    fill: grey;
    cursor: pointer;
    margin-top: 8px;
    transition: fill 0.3s;
  }

  .heart-icon:hover {
    fill: red;
  }

  .actions {
  display: flex;
  justify-content: center;
  gap: 40px; 
  margin: 20px 0; 
}
</style>
