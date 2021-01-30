<template>
  <div>
    <navbar title="Room Id">
      <van-icon name="wap-home-o" />
    </navbar>
    <desk />
    <van-button block type="info" size="large" @click="liZhi">立直</van-button>
    <van-button block type="info" size="large" @click="showHu = !showHu">和</van-button>
    <div v-show="showHu">
      <van-form @submit="onSubmit">
        <van-field
            v-model="fanShu"
            name="fanShu"
            label="番数"
            placeholder="番数"
            :rules="[{require:true, message: '请输入番数'}]"
            type="digit"
        />
        <van-field
            readonly
            clickable
            name="huPai"
            :value="huPai"
            label="胡牌方式"
            placeholder="请选择胡牌方式"
            @click="showPopup = true"
        />
        <van-popup v-model="showPopup" position="bottom">
          <van-picker
              title="和牌方式"
              show-toolbar
              :columns="type"
              @cancel="showPopup = false"
              @confirm="onConfirm"
          />
        </van-popup>
        <van-button round block type="info" native-type="submit" @click="showHu = false">确定</van-button>
      </van-form>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/NavBar'
import desk from '@/components/Desk'
import {Dialog} from "vant";
export default {
  name: "Room",
  components: {
    desk,
    navbar,
  },
  data() {
    return {
      fanShu:'',
      huPai:'',
      type:['自摸','上家放铳','对家放铳','下家放铳'],
      showPopup:false,
      showHu:false
    }
  },
  methods: {
    onSubmit(value) {
      console.log(value)
    },
    onConfirm(value) {
      this.huPai = value;
      this.showPopup = false;
    },
    liZhi() {
      Dialog.confirm({
        title: '立直',
        message: '确认立直？需支付1000点',
      })
          .then(() => {
            console.log('确认立直')
          })
          .catch(() => {
            console.log('取消立直')
          })
    }
  }
}
</script>

<style scoped>

</style>
