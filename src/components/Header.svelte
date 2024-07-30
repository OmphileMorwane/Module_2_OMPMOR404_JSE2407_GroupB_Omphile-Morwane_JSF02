<script>
        let navbarOpen = false;
      
        function toggleNavbar() {
          navbarOpen = !navbarOpen;
        }
      </script>
      
      <header class="sticky">
        <nav class="navbar">
          <div class="navbar-container">
            <a href="/" class="navbar-logo">
              <img src="src/assets/online-shop.png" alt="Flowbite Logo" />
              <span>SwiftCart</span>
            </a>
            <button on:click={toggleNavbar} type="button" class="navbar-toggle" aria-controls="navbar-dropdown" aria-expanded={navbarOpen}>
              <svg class="cart-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div class={`navbar-menu ${navbarOpen ? 'open' : ''}`} id="navbar-dropdown">
              <ul>
                <li><a href="/wishlist">Wishlist</a></li>
                <li class="hidden-lg">
                  <a href="/cart">
                    <div class="cart-notification">2</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cart-icon">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                    </svg>
                  </a>
                </li>
                <li><a href="/cart" class="hidden-lg">Cart</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <style>
  .sticky {
    position: sticky;
    top: 0;
    z-index: 50;
  }
  .navbar {
    background-color: #6b7280;
    border-color: #d1d5db;
    width: 100%;
    padding: 0 1rem;
  }
  .navbar-container {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0.5rem 0rem;
  }
  .navbar-logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
  }
  .navbar-logo img {
    height: 2rem;
  }
  .navbar-logo span {
    margin-left: 0.75rem;
    font-size: 1.5rem;
    font-weight: 600;
    white-space: initial;
  }
  .navbar-toggle {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    justify-content: center;
    font-size: 0.875rem;
    color: white;
    border-radius: 0.5rem;
    background-color: #6b7280; 
    border: none;
    cursor: pointer;
  } 
  .navbar-toggle:hover {
    background-color: #f3f4f6;
  }

  /* Hide hamburger menu on larger screens */
  @media (min-width: 768px) {
    .navbar-toggle {
      display: none;
    }
  }
  
  .navbar-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .navbar-menu.open {
    display: block;
  }
  .navbar-menu ul {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    width: 100%
  }
  .navbar-menu li {
    list-style: none;
    position: relative;
  }
  .navbar-menu a {
    display: block;
    padding: 0.5rem 0.75rem;
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
  }
  .navbar-menu a:hover {
    background-color: #f3f4f6;
    color: #1d4ed8;
  }
  @media (max-width: 767px) {
    .navbar-menu {
      display: none;
      width: 100%;
      flex-direction: column;
      background-color: #6b7280;
      position: absolute;
      top: 100%;
      left: 0;
      padding: 1rem;
      border: 1px solid #d1d5db;
      border-radius: 0.5rem;
    }
    .navbar-menu.open {
      display: flex;
    }
    .navbar-menu ul {
      flex-direction: column;
    }
    .navbar-menu a {
      display: block;
      padding: 0.5rem 0.75rem;
      color: white;
      text-decoration: none;
      border-radius: 0.25rem;
    }
  }
  .navbar-links {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
  .cart-notification {
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
    display: flex;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: #ef4444;
    padding: 0.75rem;
    font-size: 0.75rem;
    color: white;
    font-weight: bold;
  }
  .cart-icon {
    height: 2.5rem;
    width: 1.5rem;
    stroke: white;
    cursor: pointer;
  }
  .cart-icon-container {
    position: relative;
    display: inline-flex;
    align-items: center;
  }
</style>
