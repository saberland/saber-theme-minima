<template>
  <ul class="social-media-list">
    <li v-if="social.dribbble">
      <a :href="`https://dribbble.com/${social.dribbble}`" :title="social.dribbble">
        <svg class="svg-icon grey">
          <use :xlink:href="getSvg('dribbble')"></use>
        </svg>
      </a>
    </li>
    <li v-if="social.facebook">
      <a :href="`https://www.facebook.com/${social.facebook}`" :title="social.facebook">
        <svg class="svg-icon grey">
          <use :xlink:href="getSvg('facebook')"></use>
        </svg>
      </a>
    </li>
    <li v-if="social.flickr">
      <a :href="`https://www.flickr.com/photos/${social.flickr}`" :title="social.flickr">
        <svg class="svg-icon grey">
          <use :xlink:href="getSvg('flickr')"></use>
        </svg>
      </a>
    </li>
    <li v-if="social.github">
      <a :href="`https://github.com/${social.github}`" :title="social.github">
        <svg class="svg-icon grey">
          <use :xlink:href="getSvg('github')"></use>
        </svg>
      </a>
    </li>
    <li v-if="social.instagram">
      <a :href="`https://www.instagram.com/${social.instagram}`" :title="social.instagram">
        <svg class="svg-icon grey">
          <use :xlink:href="getSvg('instagram')"></use>
        </svg>
      </a>
    </li>
    <li v-if="social.linkedin">
      <a :href="`https://www.linkedin.com/in/${social.linkedin}`" :title="social.linkedin">
        <svg class="svg-icon grey">
          <use :xlink:href="getSvg('linkedin')"></use>
        </svg>
      </a>
    </li>
    <li v-if="social.pinterest">
      <a :href="`https://www.pinterest.com/${social.pinterest}`" :title="social.pinterest">
        <svg class="svg-icon grey">
          <use :xlink:href="getSvg('pinterest')"></use>
        </svg>
      </a>
    </li>
    <li v-if="social.twitter">
      <a :href="`https://twitter.com/${social.twitter}`" :title="social.twitter">
        <svg class="svg-icon grey">
          <use :xlink:href="getSvg('twitter')"></use>
        </svg>
      </a>
    </li>
    <li v-if="social.youtube">
      <a :href="`https://www.youtube.com/user/${social.youtube}`" :title="social.youtube">
        <svg class="svg-icon grey">
          <use :xlink:href="getSvg('youtube')"></use>
        </svg>
      </a>
    </li>
    <li v-if="social.telegram">
      <a :href="`https://t.me/${social.telegram }`" :title="social.telegram">
        <svg class="svg-icon grey">
          <use :xlink:href="getSvg('telegram')"></use>
        </svg>
      </a>
    </li>
    <li v-if="social.microdotblog">
      <a rel="me" :href="`https://micro.blog/${social.microdotblog}`" :title="social.microdotblog">
        <svg class="svg-icon grey">
          <use :xlink:href="getSvg('microdotblog')"></use>
        </svg>
      </a>
    </li>
    <li v-if="social.googleplus">
      <a :href="`https://plus.google.com/${social.googleplus}`" :title="social.googleplus">
        <svg class="svg-icon grey">
          <use :xlink:href="getSvg('googleplus')"></use>
        </svg>
      </a>
    </li>
    <li v-if="social.rss && $feed">
      <a :href="$feed.permalink" title="rss">
        <svg class="svg-icon grey">
          <use :xlink:href="getSvg('rss')"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
import getSvg from '../utils/getSvg'

export default {
  computed: {
    social() {
      return this.$themeConfig.social
    }
  },

  methods: {
    getSvg
  }
}
</script>

