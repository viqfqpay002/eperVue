<template>
    <div id="caterigres">
      <header class="header flex midcenter">
        <ul class="header_bar flex midcenter rowflex rowflexbteew p30">
          <li class="item flag">
            <span class="icon icon_flag" id="js_flag_select"><img src="../assets/img/fr.png" alt="fr"/></span>
            <span class="icon icon_arrow"></span>
            <div class="item_list" >
              <dl>
                <span class="icon icon_flag icon_CN"><img src="../assets/img/fr.png" alt="fr"/></span>
                中文
              </dl>
              <dl>
                <span class="icon icon_flag icon_EN"><img src="../assets/img/fr.png" alt="fr"/></span>
                English
              </dl>
              <dl>
                <span class="icon icon_flag icon_FR"><img src="../assets/img/fr.png" alt="fr"/></span>
                Francais
              </dl>
            </div>
          </li>
          <li class="item search flex-big">
            <h3 class="title">Categories</h3>
            <!--  <input type="text" class="search_input" placeholder="Search..."> -->
            <span class="icon iconfont icon-search icon-sousuo"></span>
          </li>
          <li class="item email">
            <a href="javascript:;" class="icon iconfont icon-email icon-xinfeng"></a>
          </li>

        </ul>
      </header>
      <article>
        <section class="scroll-box swiper-container" id="cag_list">
          <div class="swiper-wrapper">
            <ul class="scroll_nav flex swiper-slide rowflexbteew ">
              <li class="item"><a href="index.html">
					<span class="icon">
						<img src="../assets/img/catetips.png" alt="tip" title="tips"/>
					</span>
                <p class="info">Organic</p>
              </a></li>
              <li class="item"><a href="javascript:;">
					<span class="icon">
						<img src="../assets/img/catetips.png" alt="tip" title="tips"/>
					</span>
                <p class="info">Vegetarian</p>
              </a></li>
              <li class="item"><a href="javascript:;">
					<span class="icon">
						<img src="../assets/img/catetips.png" alt="tip" title="tips"/>
					</span>
                <p class="info">Sugar Free</p>
              </a></li>
              <li class="item"><a href="javascript:;">
					<span class="icon">
						<img src="../assets/img/catetips.png" alt="tip" title="tips"/>
					</span>
                <p class="info">Diet</p>
              </a></li>
            </ul>
            <ul class="scroll_nav flex swiper-slide p30 rowflexbteew ">
              <li class="item"><a href="javascript:;">
					<span class="icon">
						<img src="../assets/img/catetips.png" alt="tip" title="tips"/>
					</span>
                <p class="info">Gluten Free</p>
              </a>
              </li>
              <li class="item"><a href="javascript:;">
					<span class="icon">
						<img src="../assets/img/catetips.png" alt="tip" title="tips"/>
					</span>
                <p class="info">Hala</p>
              </a>
              </li>
              <li class="item"><a href="javascript:;">
					<span class="icon">
						<img src="../assets/img/catetips.png" alt="tip" title="tips"/>
					</span>
                <p class="info">Gluten Free</p>
              </a>
              </li>
              <li class="item"><a href="javascript:;">
					<span class="icon">
						<img src="../assets/img/catetips.png" alt="tip" title="tips"/>
					</span>
                <p class="info">Hala</p>
              </a>
              </li>
            </ul>
          </div>
        </section>
        <section class="select_cate">
          <div class="select_ul flex">
            <a href="javascript:;" class="item active"><span class="icon"></span>The Market</a>
            <a href="javascript:;" class="item "><span class="icon"></span>Dairy</a>
            <a href="javascript:;" class="item"><span class="icon"></span>Bakery</a>
            <a href="javascript:;" class="item"><span class="icon"></span>Pantry</a>
            <a href="javascript:;" class="item"><span class="icon"></span>Snacks&Sweets</a>
            <a href="javascript:;" class="item"><span class="icon"></span>Frozen Food</a>
            <a href="javascript:;" class="item"><span class="icon"></span>Beverages</a>
            <a href="javascript:;" class="item"><span class="icon"></span>Baby&Body care</a>
            <a href="javascript:;" class="item"><span class="icon"></span>Pet / House</a>
          </div>
        </section>
        <section class="cate_list_show p30">
          <h3 class="title flex rowflexbteew">
            <p><span id="showTab">The Market</span> <span class="icon"></span> <em></em></p>
            <a href="javascript:;">All <span class="icon iconfont icon-jiantouxi"></span></a>
          </h3>
          <ul class="cate_show_ul flex">
            <li class="item">
              <a href="javascript:;">
                <img src="../assets/img/cateimg.png" alt="l02" title='img01'/>
                <p class="info">Butcher Shop</p>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;">
                <img src="../assets/img/cateimg.png" alt="l02" title='img01'/>
                <p class="info">Butcher Shop</p>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;">
                <img src="../assets/img/cateimg.png" alt="l02" title='img01'/>
                <p class="info">Butcher Shop</p>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;">
                <img src="../assets/img/cateimg.png" alt="l02" title='img01'/>
                <p class="info">Butcher Shop</p>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;">
                <img src="../assets/img/cateimg.png" alt="l02" title='img01'/>
                <p class="info">Butcher Shop</p>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;">
                <img src="../assets/img/cateimg.png" alt="l02" title='img01'/>
                <p class="info">Butcher Shop</p>
              </a>
            </li>
          </ul>
        </section>
        <a class="bottomImg p30">
          <img src="../assets/img/cateBottomimg.png" alt="bottomimg" title="bottom"/>
        </a>
      </article>
    </div>
</template>

<script>
  export default {
    name: 'caterigres',
    data () {
      return {

      }

    },
    mounted () {
      new Swiper('#cag_list', {})
    }
  }
</script>

<style scoped="scoped">
  @import "../assets/css/categories.css";
</style>
