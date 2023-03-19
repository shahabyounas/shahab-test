<script>
/**
 * Reference
 * The card defalut icon taken from flaticon
 * https://www.flaticon.com/free-icons/window-blinds
 * https://www.uidesign.tips/blog/12-box-shadows-for-your-next-ui-project
 **/
import defaultImage from '../assets/blinds.png';
export default {
  name: 'Card',
  data: () => ({
    image: defaultImage,
  }),
  props: {
    id: { type: String, required: true }, // Unique Id is usually in String format
    img: { type: String, required: true },
    title: {
      type: String,
      required: true,
      default: 'Best Roller Blinds',
    },
    price: { type: Number, required: true, default: 10 },
    currency: { type: String, required: true, default: '£' },
  },

  methods: {},

  created: function () {
    this.image = this.img;
  },
};
</script>

<template>
  <div class="card justify-content-center text-center py-3">
    <img :src="image" class="card-img-top" alt="Card image" />

    <div class="fw-bold small title mt-2">{{ title }}</div>
    <div class="my-1">From {{ currency }}{{ price }}</div>

    <button class="price-btn rounded my-2" @click="$emit('handleButton', id)">
      Get price
    </button>
  </div>
</template>

<style>
.card {
  max-width: 220px;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.05);
}

.card:hover {
  box-shadow: 0px 0px 0px 2px #5d38e0;
  background-color: #fbfafe !important;
}

.card-img-top {
  object-fit: cover;
  height: 9.5rem;
}

.rounded-10 {
  border-radius: 10px;
}

.price-btn {
  background-color: #5d38e0;
  color: #ffffff;
  font-size: 0.8em;
}

.price-btn:hover {
  filter: saturate(2);
}

@media (max-width: 576px) {
  .card {
    max-width: 175px;
  }
}
</style>
