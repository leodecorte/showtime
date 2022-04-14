<template>
  <nav
    class="
      navbar navbar-expand-md navbar-dark
      flex-column flex-md-row
      bd-navbar
      fixed-top
      bg-dark
    "
    style=""
  >
    <div class="container-fluid">
      
          <a class="navbar-brand" href="#">Let the Music Play</a>
        
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarCollapse" class="navbar-collapse collapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link 
            to="/login"
            class="nav-link"
            >
              <i class="fas fa-user text-white"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/"
            class="nav-link"
            >
              <i class="fas fa-shopping-bag text-white"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="user"
              :to="{ name: 'Edit', params: { id: user._id } }"
            >
              <i class="fas fa-house-user text-white"></i
            ></router-link>
          </li>
        </ul>
        <form class="d-flex" @submit.prevent="onClick">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="query"
          />
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    async onClick() {
      await this.$store.dispatch("concerts/search", this.query);
    },
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style scoped>

</style>

