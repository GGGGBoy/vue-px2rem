<template>
  <section class="contanier">
    <div></div>
    <span>测试文字</span>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.contanier {
   div {
   width: 3rem;
   height: 2rem;
   background: gray;
   margin: 0 auto;
 }
 span {
   font-size: 0.16rem;
 }
}

</style>
