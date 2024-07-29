<script>
  import { Link } from 'svelte-routing';
  export let product;
</script>

<Link to={`/product/${product.id}`}>
  <div class="product-card">
    <img src={product.image} alt={product.title} />
    <h2>{product.title}</h2>
    <p>${product.price}</p>
    <p>{product.category}</p>
  </div>
</Link>

<style>
  .product-card {
    border: 1px solid #ccc;
    padding: 16px;
    text-align: center;
    cursor: pointer;
  }
  .product-card img {
    max-width: 100%;
    height: auto;
  }
</style>
