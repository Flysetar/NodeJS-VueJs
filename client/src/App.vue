<template>
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">BLOG DE BG</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
            <router-link class="nav-link" to="/home">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">S'inscrire</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Connexion</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/erreur">404</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/user">Users</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <br/>
      <router-view/>
    </div>
</template>

<script>
export default {
  name: "app"
  };
</script>

