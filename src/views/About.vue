<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-checkbox-group v-model="result" direction="horizontal">
        <van-checkbox @click="test(demo.a)"  v-for="(demo, index) in numberTest" :key="index" :name="demo.a">复选框 {{demo.a}}</van-checkbox>
    </van-checkbox-group>
<!--    <van-checkbox-group v-model="result" direction="horizontal">-->
<!--      <van-checkbox name="a">复选框 a</van-checkbox>-->
<!--      <van-checkbox name="a">复选框 b</van-checkbox>-->
<!--      <van-checkbox name="a">复选框 a</van-checkbox>-->
<!--      <van-checkbox name="a">复选框 b</van-checkbox>-->
<!--      <van-checkbox name="a">复选框 a</van-checkbox>-->
<!--      <van-checkbox name="a">复选框 b</van-checkbox>-->
<!--    </van-checkbox-group>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: []
    }
  },
  computed: {
    numberTest () {
      return [
        { a: 'a' },
        {
          a: '我是元和',
          b: '哈哈'
        },
        { a: '我是测试' },
        { a: 'd' }
      ]
    }
  },
  created () {
    this.result.push(this.$store.state.a)
  },
  methods: {
    test (e) {
      console.log(this.result)
      console.log(e)
      if (this.result.includes(e)) {
        console.log(1)
        this.$store.commit('addSomeThings', this.result)
        console.log(this.$store.state.a)
      }
    }
  }
}
</script>
