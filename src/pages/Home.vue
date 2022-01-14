<template>
  <div class="contanier">

    <section class="header">
      <span class="navBtn"></span>
      <div class="serchWrap">
        <span>路飞商城</span>
        <router-link to="/serch" >
          <div class="serch showIcon">
          </div>
        </router-link>
      </div>
      <span class="userIcon"></span>
    </section>

    <section class="banner">
      <van-swipe class="my-swipe"
                 :autoplay="3000"
                 indicator-color="white">
        <van-swipe-item v-for="(item , index ) in banner"
                        :key="index">
          <img :src="item.img"
               alt="banner">
        </van-swipe-item>
      </van-swipe>
    </section>

    <section class="navItem">
      <ul>
        <li v-for=" (item,index) in navItem"
            :key="index">
          <img :src="item.img"
               alt="img">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </section>

    <section>
      <h3>热卖商品</h3>
      <ul>
        <li>

        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: [],
      navItem: [],
    };
  },

  mounted() {
    // banner
    this.$http.get("/banner").then((res) => {
      if (res.data.state) {
        this.banner = res.data.banner;
      }
    });

    // 栏目导航
    this.$http.get("/navItem").then((res) => {
      if (res.data.state) {
        this.navItem = res.data.navItem;
      }
    });
  },

  methods: {
    getInfo() {
      this.$http.get("/index").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped lang="less">
@font: 37.5rem;
.contanier {
  .header {
    width: 100%;
    height: 37px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .navBtn {
      display: inline-block;
      height: 32px;
      width: 32px;
      background-size: 100% 100%;
      background-image: url(../assets/img/navBtn.png);
    }

    .serchWrap {
      height: 32px;
      width: 279px;

      span {
        width: 107px;
        height: 30px;
        float: left;
        font-size: 18px;
        border: solid 1px #1296db;
        border-radius: 30px 0 0 30px;
        text-align: center;
        line-height: 30px;
        font-weight: 500;
        color: #1296db;
      }

      .serch {
        width: 168px;
        height: 30px;
        float: left;

        width: 168px;
        height: 30px;
        border: solid 1px #1296db;
        border-radius: 0 30px 30px 0;
        border-left: none;

        font-size:14px;
        text-indent:14px;
        color: #1296db;
        line-height: 30px;
        input {
          float: left;
          width: 168px;
          height: 30px;
          border: solid 1px #1296db;
          border-radius: 0 30px 30px 0;
          border-left: none;
          overflow: hidden;
          outline: none;
          text-indent:14px;
        }
      }

      .showIcon {
        position: relative;
        &:before {
          content: "";
          display: block;
          position: absolute;
          background-size: 80% 80%;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-image: url(../assets/img/serch.png);
          width: 25px;
          height: 25px;
          top: 50%;
          transform: translateY(-50%);
          left: (8 / @font);
          opacity: 0.7;
        }
      }
    }

    .userIcon {
      width: 30px;
      height: 30px;
      background-size: 100% 100%;
      background-image: url(../assets/img/userIcon.png);
    }
  }

  .banner {
    width: 100%;
    max-height: 500px;
    overflow: hidden;

    .my-swipe {
      color: #fff;
      font-size: 20px;
      text-align: center;
      background-color: #39a9ed;
      width: 100%;

      .van-swipe-item {
        float: left;

        img {
          width: 100%;
        }
      }
    }
  }

  .navItem {
    width: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;
      font-size: 12px;
      li {
        display: inline-block;
        width: 20%;
        text-align: center;
        img {
          width: 40px;
          display: block;
          margin: 6px auto;
        }
      }
    }
  }
}
</style>