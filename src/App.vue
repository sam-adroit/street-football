<template>
  <header class="header">
    <router-link to="/" class="router-link">
      <div class="logo-container">
        <img src="./assets/logo.png" alt="">
        <h2>Street Football</h2>
      </div>
    </router-link>
  </header>

  <RouterView />
</template>

<style>
  .header{
    width: 100%;
    border-bottom: 2px solid white;
  }
  .header .router-link{
    text-decoration: none;
  }
  .logo-container{
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 1em 1em 0.5em 1em;
  }
  .logo-container h2{
    font-family: 'Monoton', sans-serif;
    text-decoration: none;
    color: white;
    font-size: 28px;
  }
  .header img{
    width: 35px;
    height: 35px;
    background-color: white;
    border-radius: 50%;
  }
  @media screen and (max-width: 600px){
    .logo-container h2{
      font-size: 20px;
    }
  }
</style>
