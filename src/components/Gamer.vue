<template>
  <div class="outside">
    <p class="text-center">gamer</p>
    <p class="text-center">{{ point }}</p>
  </div>
</template>

<script>
export default {
  name: "Gamer",
  data() {
    return {
      position: "",
      point: 25000,
    }
  }
}
</script>

<style scoped>
.outside{
  padding: 8px;
}
.text-center{
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
