<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <h1 class="title">Chào mừng đến với giày hàng hiệu!</h1>
        <p class="subtitle">Khám phá bộ sưu tập giày đẳng cấp của chúng tôi</p>
        <button class="btn">Xem bộ sưu tập</button>
      </div>
    </section>
    <section class="about">
      <div class="about-content">
        <h2 class="section-title">Về chúng tôi</h2>
        <p class="section-text">Chúng tôi là một thương hiệu giày hàng hiệu với nhiều năm kinh nghiệm trong ngành thời trang. Chúng tôi tự hào mang đến cho khách hàng những sản phẩm chất lượng cao với kiểu dáng đẹp và thiết kế độc đáo.</p>
      </div>
    </section>
    <section class="collection">
      <div class="collection-content">
        <h2 class="section-title">Bộ sưu tập</h2>
        <div class="shoes-list">
          <template>
    <img class="animate__animated.animate__fast " src="../static/men/001 trail running shoesP00733475.jpg" alt="trail running shoes">
    <img class="animate__animated.animate__fast " src="../static//men/2002R leather sneakersP00662788.jpg">
</template>
        </div>
        <button class="btn">Xem thêm</button>
      </div>
    </section>
    <section class="contact">
      <div class="contact-content">
        <h2 class="section-title">Liên hệ</h2>
        <p class="section-text">Hãy liên hệ với chúng tôi để biết thêm thông tin chi tiết về sản phẩm và dịch vụ của chúng tôi.</p>
        <button class="btn">Liên hệ ngay</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* CSS của trang chủ */
@import "../node_modules/animate.css/animate.css";
.hero {
  background-color: #f0f0f0;
  color: #333;
  text-align: center;
  padding: 80px 0;
}

.title {
  font-size: 36px;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 24px;
  margin-bottom: 32px;
}

.btn {
  background-color: #333;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}

.about {
  background-color: #fff;
  color: #333;
  text-align: center;
  padding: 80px 0;
}

.section-title {
  font-size: 28px;
  margin-bottom: 16px;
}

.section-text {
  font-size: 18px;
  margin-bottom: 32px;
}

.collection {
  background-color: #f0f0f0;
  color: #333;
  text-align: center;
  padding: 80px 0;
}

.contact {
  background-color: #fff;
  color: #333;
  text-align: center;
  padding: 80px 0;
}
</style>


<script>
export default {
  name: 'IndexPage',
}
</script>
