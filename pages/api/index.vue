<template> 
<Docs>
  <div class="container mt-4" v-html="post.content"></div>
</Docs>
</template>
<script> 
const Docs = () => import('~/components/API/Docs')
export default {
  layout: 'api', 
  components: { Docs },
  async asyncData({ $axios, params }) {
    let post = await $axios.$get('/docs/index')
    return {
      post: post
    }
  }
}
</script>