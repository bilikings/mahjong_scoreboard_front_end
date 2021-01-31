<template>
  <div>
    <navbar title="查找房间"/>
    <van-button block :round="true" size="large">创建东风场</van-button>
    <van-button block :round="true" size="large">创建南风场</van-button>
    <van-button block :round="true" size="large" @click="showPop">加入房间</van-button>
    <van-popup
        v-model="showPopup"
        position="bottom"
    >
      <div style="height: 300px; padding-top: 10px; background: #F2F3F5">
        <van-password-input
            :mask="false"
            :value="val"
            :gutter="10"
        />
        <van-number-keyboard
            v-model="val"
            :show="true"
            @input="onInput"
            :maxlength="6"
            @blur="onBlur"
        />
      </div>
    </van-popup>


    <van-button block :round="true" to="/room">Test</van-button>
    <stomp/>
  </div>
</template>

<script>
import navbar from '../components/NavBar'
import {Toast} from "vant";
import stomp from "../stomp"
export default {
  name: "Home",
  components: {
    navbar,
    stomp
  },
  data:function () {
    return {
      val:'',
      showPopup: false
    }
  },
  methods: {
    showPop() {
      this.showPopup = true;
    },
    onInput(key) {
      this.val += key;
      if (this.val.length === 6){
        Toast("查找房间");
      }
    },
    onBlur() {
      this.val='';
    }
  }
}
</script>

<style scoped>

</style>
