<template>
  <footer class="site-footer h-card">
    <div class="wrapper">
      <div class="footer-col-wrapper">
        <div class="footer-col one-half">
          <h2 class="footer-heading">{{ siteTitle }}</h2>
          <ul class="contact-list">
            <li class="p-name">{{ $siteConfig.author ? $siteConfig.author : siteTitle }}</li>
            <li v-if="$siteConfig.email">
              <a class="u-email" :href="`mailto:${$siteConfig.email}`">{{ $siteConfig.email }}</a>
            </li>
          </ul>
        </div>

        <div class="footer-col one-half">
          <p>{{ $siteConfig.description }}</p>
        </div>

        <div class="social-links">
          <Social />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Social from './Social.vue'

export default {
  components: {
    Social
  },
  
  props: {
    siteTitle: {
      type: String,
      required: true
    }
  }
}
</script>
