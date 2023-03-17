<script>
/**
 * Reference
 * The card defalut icon taken from flaticon
 * https://www.flaticon.com/free-icons/window-blinds
 **/
import defaultImage from '../assets/blinds.png';
export default {
  name: 'Card',
  data: () => ({
    image: defaultImage,
  }),
  props: {
    img: { type: String, required: true },
    title: {
      type: String,
      required: true,
      default: 'Best Roller Blinds',
    },
    price: { type: Number, required: true, default: 10 },
    currency: { type: String, required: true, default: '£' },
  },
};
</script>

<template>
  <div class="card justify-content-center text-center">
    <img :src="image" class="card-img-top rounded-10" alt="Card image" />

    <div class="fw-bold">{{ title }}</div>
    <div class="my-1">From {{ currency }}{{ price }}</div>

    <button>Get price</button>
  </div>
</template>

<style>
.card {
  width: 200px;
}

.card-img-top {
  object-fit: cover;
}

.rounded-10 {
  border-radius: 10px;
}
</style>
