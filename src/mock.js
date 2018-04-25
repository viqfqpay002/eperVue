/**
 * Created by user on 2018/4/2.
 */
 const  mock = require('mockjs');
//用户
mock.mock('/api/user',(req,res)=>{
 return{
   data:[
   {
     username:"",
     mobile :"18516182707",
     grade:"Gold Member",
     password:"111666vv",
     integral:"10000",
     cartNum:"3",
     account:6000.00,
     coupons:3,
     cartList:[
     {
       pid:"0042",
       pimg:"assets/img/cartimg.png",
       ptitle:"Vineyard, Shine Muscat Green Grapes600g±5%",
       price:"100.00",
       country:"China",
       count:1
     },{
       pid:"0052",
       pimg:"../src/img/cartimg.png",
       ptitle:"Vineyard, Shine Muscat Green Grapes600g±5%",
       price:"101.03",
       country:"China",
       count:1
     },{
       pid:"0058",
       pimg:"src/img/cartimg.png",
       ptitle:"Vineyard, Shine Muscat Green Grapes600g±5%",
       price:"106.00",
       country:"China",
       count:1
     }
     ],
     sixTotal:12000,
     pointsHistory:[
     {
      date:"2017/06/06",
      msg:"订单积分",
      integral:"+1400"
    },
    {
      date:"2017/05/01",
      msg:"活动送积分",
      integral:"+100"
    },
    {
      date:"2017/04/08",
      msg:"订单积分",
      integral:"+1400"
    },
    {
      date:"2017/04/01",
      msg:"完善个人信息",
      integral:"+5000"
    }
    ],
    pointsExchange:[
    {
      date:"2018/01/04",
      present:"优惠劵",
      integral:"-2000",
      state:"未使用"
    },{
     date:"2018/01/04",
     present:"课程",
     integral:"-3000",
     state:"已完成"
   },{
     date:"2018/01/04",
     present:"周末午餐",
     integral:"-16000",
     state:"已完成"
   }
   ]
 },{
   username:"Amy",
   mobile:"18516182706",
   grade:"Diamond Member",
   password:"111777vv",
   integral:"50",
   cartNum:"1",
   account:60.10,
   coupons:1,
   cartList:[
   {
     pid:"0045",
     pimg:"src/img/cartimg.png",
     ptitle:"Vineyard, Shine Muscat Green Grapes600g±5%",
     price:"110.00",
     country:"China",
     count:1
   }
   ],
   sixTotal:10000,
   pointsHistory:[
   {
     date:"2017/03/06",
     msg:"订单积分",
     integral:"+100"
   },
   {
     date:"2017/04/01",
     msg:"活动送积分",
     integral:"+300"
   },
   {
     date:"2017/03/08",
     msg:"订单积分",
     integral:"+100"
   },
   {
     date:"2017/03/01",
     source:"完善个人信息",
     integral:"+5000"
   }
   ],
   pointsExchange:[
   {
     date:"2018/01/01",
     present:"优惠劵",
     integral:"-2000",
     state:"未使用"
   },{
     date:"2018/01/03",
     present:"课程",
     integral:"-3000",
     state:"已完成"
   },{
     date:"2018/01/02",
     present:"周末午餐",
     integral:"-1000",
     state:"已完成"
   }
   ]
 }
 ]
}
});
//index显示的列表
mock.mock('/api/indexList',(req,res)=>{
  return{
   banners:[{
     bImg:"/static/img/banner.075d338.png",
     bhref:"http://www.baidu.com"
   },
   {
     bImg:"/static/img/banner.075d338.png",
     bhref:"http://www.taobao.com"
   },
   {
     bImg:"/static/img/banner.075d338.png",
     bhref:"http://www.jd.com"
   },{
     bImg:"/static/img/banner.075d338.png",
     bhref:"http://www.suning.com"
   },
   {
     bImg:"/static/img/banner.075d338.png",
     bhref:"http://www.taobao.com"
   }

   ],
   Brands:[
   "/static/img/brands01.9702d32.png",
   "/static/img/brands02.8eb970b.png",
   "/static/img/brands03.964d607.png",
   "/static/img/brands04.b46a27b.png",
   "/static/img/brands05.0fda76a.png",
   "/static/img/brands06.c862c24.png",
   "/static/img/brands07.8785d6c.png",
   "/static/img/brands08.2ec4d32.png",
   "/static/img/brands09.0d426c2.png",
   "/static/img/brands01.9702d32.png",
   "/static/img/brands01.9702d32.png",
   "/static/img/brands01.9702d32.png",
   ],
   data:[{
    pId:1000,
    pTitle:"Organic Italian Lettuce",
    pIcon:1,
    pOrigin:"China",
    price:19.00,
    pImg:"/static/img/product.4eba28a.png",
    inventory :1000,
    specification:"300g±5%",
    shelf:"3"
  },{
    pId:1001,
    pTitle:"Organic Italian Lettuce ",
    pIcon:3,
    pOrigin:"America",
    price:20.00,
    pImg:"/static/img/product.4eba28a.png",
    inventory :10,
    specification:"320g ±5%",
    shelf:"5"
  },{
    pId:1002,
    pTitle:"Organic Italian Lettuce ",
    pIcon:6,
    pOrigin:"France",
    price:25.00,
    pImg:"/static/img/product.4eba28a.png",
    inventory :0,
    specification:"330g ±5%",
    shelf:"3"
  },{
    pId:1003,
    pTitle:"Organic Italian Lettuce",
    pIcon:9,
    pOrigin:"China",
    price:30.30,
    pImg:"/static/img/product.4eba28a.png",
    inventory :1,
    specification:"340g ±5%",
    shelf:"7"
  },{
    pId:1004,
    pTitle:"Organic Italian Lettuce",
    pIcon:2,
    pOrigin:"France",
    price:100.00,
    pImg:"/static/img/product.4eba28a.png",
    inventory :500,
    specification:"330g ±5%",
    shelf:"180"
  },{
    pId:1006,
    pTitle:"Organic Italian Lettuce ",
    pIcon:3,
    pOrigin:"China",
    price:20.00,
    pImg:"/static/img/product.4eba28a.png",
    inventory :1120,
    specification:"340g ±5%",
    shelf:"180"
  }] 
}

})
//详情页的显示信息
mock.mock('/api/detail/:id=null',(req,res)=>{
  return {
   data:[{
    pId:1000,
    pTitle:"Organic Italian Lettuce",
    pIcon:1,
    pOrigin:"China",
    price:19.00,
    pImg:[
    "/static/img/product.4eba28a.png",
    "/static/img/product.4eba28a.png",
    "/static/img/product.4eba28a.png",   
    ],
    inventory :1000,
    specification:"300g±5%",
    shelf:"3"
  },{
    pId:1001,
    pTitle:"Organic Italian Lettuce ",
    pIcon:3,
    pOrigin:"America",
    price:20.00,
    pImg:[
    "/static/img/product.4eba28a.png",
    "/static/img/product.4eba28a.png",
    ],
    inventory :10,
    specification:"320g ±5%",
    shelf:"5"
  },{
    pId:1002,
    pTitle:"Organic Italian Lettuce ",
    pIcon:6,
    pOrigin:"France",
    price:25.00,
    pImg:["/static/img/product.4eba28a.png"],
    inventory :0,
    specification:"330g ±5%",
    shelf:"3"
  },{
    pId:1003,
    pTitle:"Organic Italian Lettuce",
    pIcon:9,
    pOrigin:"China",
    price:30.30,
    pImg:["/static/img/product.4eba28a.png"],
    inventory :1,
    specification:"340g ±5%",
    shelf:"7"
  },{
    pId:1004,
    pTitle:"Organic Italian Lettuce",
    pIcon:2,
    pOrigin:"France",
    price:100.00,
    pImg:["/static/img/product.4eba28a.png"],
    inventory :500,
    specification:"330g ±5%",
    shelf:"180"
  },{
    pId:1006,
    pTitle:"Organic Italian Lettuce ",
    pIcon:3,
    pOrigin:"China",
    price:20.00,
    pImg:["/static/img/product.4eba28a.png"],
    inventory :1120,
    specification:"340g ±5%",
    shelf:"180"
  }] 
}

})

//Categories页面
mock.mock('/api/categories',(req,res)=>{
  return{  
   navList:[
   {
    classilyId:1,
    navMsg:"Organic",
    navIcon:"/static/img/catetips.png",
  },{
    classilyId:2,
    navMsg:"Vegetarian",
    navIcon:"/static/img/catetips.png",
  },
  {
    classilyId:3,
    navMsg:"Sugar Free",
    navIcon:"/static/img/catetips.png",
  },{
    classilyId:4,
    navMsg:"Diet",
    navIcon:"/static/img/catetips.png",
  },
  {
    classilyId:5,
    navMsg:"Gluten Free",
    navIcon:"/static/img/catetips.png",
  },{
    classilyId:6,
    navMsg:"Hala",
    navIcon:"/static/img/catetips.png",
  },
  {
    classilyId:7,
    navMsg:"Gluten Free",
    navIcon:"/static/img/catetips.png",
  },{
    classilyId:8,
    navMsg:"Hala",
    navIcon:"/static/img/catetips.png",
  }
  ],
  menuList:[
  {
    txt:"The Market",
    classilyList:[{
      classilyId:101,
      title:"Butcher Shop",
      classilyImg:"/static/img/cateimg.31360a2.png"
    },{
     classilyId:102,
     title:"Fruits",
     classilyImg:"/static/img/cateimg.31360a2.png"
   },{
    classilyId:103,
    title:"Fruits",
    classilyImg:"/static/img/cateimg.31360a2.png"
  },{
    classilyId:104,
    title:"Fruits",
    classilyImg:"/static/img/cateimg.31360a2.png"
  },{
    classilyId:105,
    title:"Fruits",
    classilyImg:"/static/img/cateimg.31360a2.png"
  },{
   classilyId:106,
   title:"Deli",
   classilyImg:"/static/img/cateimg.31360a2.png"
 },{

   classilyId:107,
   title:"Easy Cooking",
   classilyImg:"/static/img/cateimg.31360a2.png"

 }]
},
{
  txt:"Dairy",
  classilyList:[{
    classilyId:201,
    title:"Butcher Shop",
    classilyImg:"/static/img/cateimg.31360a2.png"
  },{
    classilyId:202,
    title:"Butcher Shop",
    classilyImg:"/static/img/cateimg.31360a2.png"
  }]
},{
 txt:"Bakery",
 classilyList:[{
  classilyId:301,
  title:"Butcher Shop",
  classilyImg:"/static/img/cateimg.31360a2.png"
}]
},{
  txt:"Snacks&Sweets",
  classilyList:[{
    classilyId:401,
    title:"Butcher Shop",
    classilyImg:"/static/img/cateimg.31360a2.png"
  }]
},{
  txt:"Frozen Food",
  classilyList:[{
    classilyId:501,
    title:"Butcher Shop",
    classilyImg:"/static/img/cateimg.31360a2.png"
  }]
},{
  txt:"Beverages",
  classilyList:[{
    classilyId:601,
    title:"Butcher Shop",
    classilyImg:"/static/img/cateimg.31360a2.png"
  }]
},{
  txt:"Baby&Body care",
  classilyList:[{
    classilyId:701,
    title:"Butcher Shop",
    classilyImg:"/static/img/cateimg.31360a2.png"
  }] 
},{
  txt:"Pet / House",
  classilyList:[{
    classilyId:801,
    title:"Butcher Shop",
    classilyImg:"/static/img/cateimg.31360a2.png"
  }] 
},{
  txt:"Dairy",
  classilyList:[{
    classilyId:901,
    title:"Butcher Shop",
    classilyImg:"/static/img/cateimg.31360a2.png"
  }] 
}

]
}
});
//分类列表
mock.mock('/api/classily',(res,req)=>{
  return{
    navClassily:[{
      navId:"01",
      navTxt:"类别",
      selectList:[
      {
        sId:101,
        txt:"新鲜水果",
      },{
        sId:102,
        txt:"有机蔬菜"
      },{
        sId:103,
        txt:"蛋类"
      },{
        sId:104,
        txt:"即食食品"
      },{
        sId:105,
        txt:"健康油类"
      },{
        sId:106,
        txt:"食醋/酱油/调味料"
      },{
        sId:107,
        txt:"香料/调料"
      },{
        sId:108,
        txt:"酱菜"
      },{
        sId:109,
        txt:"即食食品/南北干货"
      },{
        sId:110,
        txt:"坚果/时锦水果/肉脯"
      },{
        sId:111,
        txt:"家禽"
      },{
        sId:112,
        txt:"鱼类/海鲜"
      },{
        sId:113,
        txt:"谷米/土豆泥"
      },{
        sId:114,
        txt:"猪肉"
      },{
        sId:115,
        txt:"葡萄酒"
      }
      ]
    },{
      navId:"02",
      navTxt:"原产地",
      selectList:[
      {
        sId:201,
        txt:"中国"
      },{
        sId:202,
        txt:"日本"
      },{
        sId:303,
        txt:"澳大利亚"
      },{
        sId:304,
        txt:"法国"
      },{
        sId:305,
        txt:"美国"
      },{
        sId:306,
        txt:"意大利"
      },{
        sId:307,
        txt:"英国"
      },{
        sId:308,
        txt:"丹麦"
      },{
        sId:309,
        txt:"斯里兰卡"
      },{
        sId:310,
        txt:"瑞典"
      },{
        sId:311,
        txt:"奥地利"
      },{
        sId:312,
        txt:"墨西哥"
      }
      ]
    },{
      navId:"03",
      navTxt:"品牌",
      selectList:[
      {
        sId:301,
        txt:"天热路"
      },{
        sId:302,
        txt:"徽名山"
      },{
        sId:303,
        txt:"哈维斯特"
      },{
        sId:304,
        txt:"金牌"
      },{
        sId:305,
        txt:"瑞哥"
      },{
        sId:306,
        txt:"禾然"
      },{
        sId:307,
        txt:"有机呢奥"
      },{
        sId:308,
        txt:"真味"
      },{
        sId:309,
        txt:"币活原"
      },{
        sId:310,
        txt:"宾丽"
      },{
        sId:311,
        txt:"Arla"
      },{
        sId:312,
        txt:"Resparkle"
      },{
        sId:313,
        txt:"美和居"
      },{
        sId:314,
        txt:"伊莎拉贝"
      },{
        sId:315,
        txt:"九州丰园"
      }
      ]
    }],
 classilyitem:[
        {
          pId:10101,
          pTitle:"Organic Italian Lettuce",
          pIcon:1,
          pOrigin:"中国",
          price:19.00,
          pImg:"/static/img/product.4eba28a.png",
          inventory :1000,
          specification:"300g±5%",
          shelf:"3",
          selectListId:"101",
          navId:"01"
        },{
          pId:10102,
          pTitle:"Organic Italian Lettuce",
          pIcon:2,
          pOrigin:"美国",
          price:50.08,
          pImg:"/static/img/product.4eba28a.png",
          inventory :1000,
          specification:"300g±5%",
          shelf:"6",
          selectListId:"101",
          brandsId:"301"
        },{

          pId:10103,
          pTitle:"Organic Italian Lettuce",
          pIcon:3,
          pOrigin:"日本",
          price:24.00,
          pImg:"/static/img/product.4eba28a.png",
          inventory :1000,
          specification:"300g±5%",
          shelf:"4",
          selectListId:"101",
          brandsId:"302"
        },{
          pId:10104,
          pTitle:"Organic Italian Lettuce",
          pIcon:1,
          pOrigin:"澳大利亚",
          price:85.60,
          pImg:"/static/img/product.4eba28a.png",
          inventory :1000,
          specification:"300g±5%",
          shelf:"0",
          selectListId:"101",
          brandsId:"305"
        },{
          pId:10105,
          pTitle:"Organic Italian Lettuce",
          pIcon:1,
          pOrigin:"澳大利亚",
          price:85.60,
          pImg:"/static/img/product.4eba28a.png",
          inventory :1000,
          specification:"300g±5%",
          shelf:"0",
          selectListId:"102",
          brandsId:"305"     
        },{
          pId:10106,
          pTitle:"Organic Italian Lettuce",
          pIcon:1,
          pOrigin:"澳大利亚",
          price:85.60,
          pImg:"/static/img/product.4eba28a.png",
          inventory :1000,
          specification:"300g±5%",
          shelf:"0",
          selectListId:"102",
          brandsId:"305"  
        }           
       ]

  }
   
})