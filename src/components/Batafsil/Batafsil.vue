<template>
  <div class="bg min-h-screen">
    <swiper class="swiper !container !py-10" :modules="modules" :slides-per-view="4" :free-mode="true"
      :pagination="{ clickable: true }">
      <swiper-slide class="slide !flex !justify-center">
        <img src="@/assets/img/land.jpg" alt="" class="fixed-width-img" />
      </swiper-slide>
      <swiper-slide class="slide !flex !justify-center">
        <img src="../../assets/img/kitchen.jpg" alt="" class="fixed-width-img" />
      </swiper-slide>
      <swiper-slide class="slide !flex !justify-center">
        <img src="../../assets/img/room.jpg" alt="" class="fixed-width-img" />
      </swiper-slide>

      <swiper-slide class="slide !flex !justify-center">
        <img src="../../assets/img/pool.jpg" alt="" class="fixed-width-img" />
      </swiper-slide>
      <swiper-slide class="slide !flex !justify-center">
        <img src="../../assets/img/dav.jpg" alt="" class="fixed-width-img" />
      </swiper-slide>
    </swiper>
    <div class="batafsil container">
      <p class="text-[#4E6B20] text-base font-bold">"CHINOBOD" SANATORIYSI - ovqat hazm qilish aʼzolari (meʼda, ichak,
        jigar
        va oʻt pufagi) kasalliklarini davolashga
        ixtisoslashgan tibbiy sogʻlomlashtirish maskani. Toshkentning Yunusobod tumanida joylashgan. Sanatoriy hududi
        1938-yilda paxta tozalash zdlari ishchilarining dam olish zonasi boʻlgan, 1941-yil evakuatsiya qilingan gospital
        joylashtirilgan, 1946-yil sanatoriyga (75 oʻrinli) aylantirilgan. "CH." s.ning hozirgi maydoni 19 ga, atrofi
        mevali
        va manzarali daraxtlar bilan koʻkalamzorlashtirilgan. 1963-yil sanatoriy hududida 1554 m chuqurliqsan burgʻi
        qudugʻi
        orqali Toshkent mineral suvi chiqarilgan. Sanatoriy 370 oʻrinli, unda davolash va diagnostika boʻlimlari,
        jumladan,
        shifobaxsh mineral suv, balchiq, ozokerit va elektr bilan davolash boʻlimlari, badan tarbiya zali, aerosolyariy,
        ingalyatoriy, rentgen, rektoromonoskopiya, stomatologiya xonalari, biokimyo, bakteriologiya va klinik lablari bor.
        Mineral suvdan asosan vannalar uchun, ichish, ichaklarni chayish, tyubaj, dush, suv osti massaji qilishda
        foydalaniladi. "CH."s. meʼda va 12 barmoq ichakni tekshiradigan zamonaviy tibbiy tekshiruv asboblari bilan
        jihozlangan. 1997—98 yildan sanatoriyning davolash ixtisosligi kengaytirildi: qandli diabet, ginekologiya,
        urologiya, andrologiya boʻlimlari faoliyat koʻrsata boshlai. 1999-yildan fol akupunktura diagnostikasi joriy
        etiddi, bunda biologik faol nuqtalar (BFN) va kompyuter yordamida aniq tashxis qoʻyiladi.

        Bemorlarga tabiiy mineral suvdan tashqari, doridarmonlar, shifobaxsh giyohlardan tayyorlangan damlamalar, parhez
        ovqatlar va boshqa beriladi. Yiliga 6000 kishi davolanadi (2004).

        Sanatoriyda 370 oʻringa moʻljallangan yotoq korpuslari (bir va ikki oʻrinli), 2 ta oilaviy kottej, klub,
        kutubxona,
        sport maydonchalari bor. "CH."s.da bekamu kust davolanish, marokli dam olish uchun barcha qulayliklar va orombaxsh
        mikroiqlim mavjud.</p>

    </div>
    <div class="flex justify-end container">
      <router-link to="/"
        class="bg-[#3D5F01] text-white font-roboto px-4 py-4 rounded-tl-3xl rounded-br-3xl text-center ">
        <img src="../../assets/img/arrow.svg" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Pagination, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

export default defineComponent({
  name: 'swiper-example-free-mode',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, FreeMode]
    }
  }
})
</script>

<style scoped>
.fixed-width-img {
  width: 400px !important;
  height: 250px !important;
  object-fit: cover;
  /* Ensures the image covers the entire area without stretching */
}
</style>
