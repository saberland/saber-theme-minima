<template>
  <Wrap :page="page">
    <article class="post h-entry" itemscope itemtype="http://schema.org/BlogPosting">
      <header class="post-header">
        <h1 class="post-title p-name" itemprop="name headline">{{ page.title }}</h1>
        <p class="post-meta">
          <time
            class="dt-published"
            :datetime="page.createdAt"
            itemprop="datePublished"
          >{{ formatDate(page.createdAt) }}</time>
        </p>
      </header>

      <div class="post-content e-content" itemprop="articleBody">
        <slot name="default"/>
      </div>

      <Disqus 
        v-if="page.comments !== false && $themeConfig.disqus" 
        :url="$siteConfig.url" 
        :permalink="page.permalink" 
        :shortname="$themeConfig.disqus" 
      />

      <a class="u-url" :href="page.permalink" hidden></a>
    </article>
  </Wrap>
</template>

<script>
import formatDate from '../utils/formatDate'
import Wrap from '../components/Wrap.vue'
import Disqus from '../components/Disqus.vue'

export default {
  components: {
    Wrap,
    Disqus
  },

  props: ['page'],

  methods: {
    formatDate
  }
}
</script>
