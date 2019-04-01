<template>
  <div>
    <Header :siteTitle="siteTitle"/>
    <main class="page-content" aria-label="Content">
      <div class="wrapper">
        <slot></slot>
      </div>
    </main>
    <Footer :siteTitle="siteTitle"/>
  </div>
</template>

<script>
import variables from 'saber/variables'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Header,
    Footer
  },

  props: ['page'],

  head() {
    const { title, layout, excerpt } = this.page.attributes
    let { description } = this.$siteConfig
    if (layout === 'page' || layout === 'post') {
      if (excerpt) {
        description = excerpt.replace(/<(?:.|\n)*?>/gm, '')
      }
    }
    return {
      title: title ? `${title} - ${this.siteTitle}` : this.siteTitle,
      meta: [
        description && {
          name: 'description',
          content: description
        }
      ].filter(Boolean),
      link: variables.feedLink
        ? [
            {
              rel: 'alternate',
              title: `${this.siteTitle} - Feed`,
              type: `application/${
                variables.feedLinkType === 'atom'
                  ? 'atom+xml'
                  : variables.feedLinkType === 'rss'
                  ? 'rss+xml'
                  : 'json'
              }`,
              href: variables.feedLink
            }
          ].filter(Boolean)
        : []
    }
  },

  computed: {
    siteTitle() {
      return this.$siteConfig.title || 'Your Awesome Title'
    }
  }
}
</script>
