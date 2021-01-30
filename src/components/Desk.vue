<template>
  <div>
    <van-grid
        square
        :column-num="3"
    >
      <van-grid-item>
        <p>本场数</p>
      </van-grid-item>
      <van-grid-item>
        <gamer></gamer>
      </van-grid-item>
    </van-grid>
    <van-grid
        square
        :column-num="3"
    >
      <van-grid-item>
        <gamer></gamer>
      </van-grid-item>
      <van-grid-item>
        <p>gameState</p>
      </van-grid-item>
      <van-grid-item>
        <gamer></gamer>
      </van-grid-item>
    </van-grid>
    <van-grid
        square
        :column-num="3"
    >
      <van-grid-item />
      <van-grid-item>
        <gamer></gamer>
      </van-grid-item>
      <van-grid-item />
    </van-grid>
  </div>
</template>

<script>
import gamer from './Gamer'
export default {
  name: "Desk",
  components: {
    gamer
  }
}
</script>

<style scoped>
</style>
