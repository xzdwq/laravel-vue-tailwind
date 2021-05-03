<template>
  <nav>
    <div>
      <ul class="flex">
        <li  class="mr-6" v-for="link in links" :key="link">
          <router-link class="text-blue-500 hover:text-blue-800" :to="link.href">{{link.title}}</router-link>
        </li>
      </ul>
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