<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="./">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
          <li class="nav-item text-center" v-for="link in links" :key="link">
            <router-link class="nav-link" :to="link.href">{{link.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'header-navbar',
    data: () => ({
      links: [
        {
          title: 'Главная',
          href: '/'
        },
        {
          title: 'Галерея',
          href: '/galery'
        },
        {
          title: 'Обо мне',
          href: '/about'
        }
      ]
    })
  }
</script>