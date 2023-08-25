<template>
  <div class="container">
    {{ count }}
  </div>
  <van-button type="primary" @click="fn">主要按钮</van-button>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import { showDialog } from 'vant'
const count = ref(0)
const fn = () => {
  showDialog({
    title: '标题',
    message: '代码是写出来给人看的，附带能在机器上运行。'
  }).then(() => {
    // on close
  })
}
</script>

<style lang="less" scoped>
.container {
  height: 100px;
  width: 100px;
  background-color: red;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
