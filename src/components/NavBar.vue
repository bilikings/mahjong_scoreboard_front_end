<template>
  <div>
    <van-nav-bar
        :title="title"
        @click-left="clickLeft"
    >
      <template #left>
        <slot/>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: function (){
    return {
    }
  },
  props: {
    title: String
  },
  methods: {
    clickLeft() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>
