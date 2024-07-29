<script>
  import { Router, Route } from "svelte-routing";
  import Home from './components/Filters.svelte';
  import ProductDetail from './components/ProductDetail.svelte';
</script>


<Router>
  <Route path="/" component={Home} />
  <Route path="product/:id" component={ProductDetail} />
</Router>

