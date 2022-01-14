import Mock from 'mockjs'
Mock.mock('/banner', {
  state: 1,
  banner: [
    {
      id: 2,
      img: require('@/assets/img/banner1.jpg')
    },
    {
      id: 4,
      img: require('@/assets/img/banner2.jpg')
    },
    {
      id: 6,
      img: require('@/assets/img/banner3.jpg')
    },
  ]

});

Mock.mock('/navItem', {
  state: 1,
  navItem: [
    {
      id: 1,
      name: '电脑数码',
      img: require('@/assets/img/3C.jpg')
    },
    {
      id: 2,
      name: '服装专区',
      img: require('@/assets/img/clothing.jpg')
    },
    {
      id: 3,
      name: '水果生鲜',
      img: require('@/assets/img/fruit.jpg')
    },
    {
      id: 4, 
      name: '休闲食品',
      img: require('@/assets/img/snacks.png')
    },
    {
      id: 5,
      name: '景点门票',
      img: require('@/assets/img/admissionTicket.jpg')
    },
    {
      id: 1,
      name: '电脑数码',
      img: require('@/assets/img/3C.jpg')
    },
    {
      id: 2,
      name: '服装专区',
      img: require('@/assets/img/clothing.jpg')
    },
    {
      id: 3,
      name: '水果生鲜',
      img: require('@/assets/img/fruit.jpg')
    },
    {
      id: 4, 
      name: '休闲食品',
      img: require('@/assets/img/snacks.png')
    },
  
  ]
})