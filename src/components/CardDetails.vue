<template>
  <div class="card-details p-2">
    <div class="d-flex justify-content-center">
      <div class="justify-content-center card-img-bg py-2 px-4 img-thumbnai">
        <img :src="image" class="card-img-top" :alt="title" />
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title fw-bold text-capitalize my-2 h2">{{ title }}</h5>

      <p class="card-text">{{ description }}</p>

      <p>{{ containerDetails }}</p>

      <div class="d-flex flex-column">
        <label for="" class="fw-bold my-2">
          Enter Measurements to get a price
        </label>
        <input
          type="number"
          class="form-control"
          placeholder="Width (cm)"
          v-model="width"
          placehoder="width fo the cm"
        />
        <input
          type="number"
          class="form-control my-2"
          placeholder="Drop (cm)"
          v-model="drop"
        />
      </div>
    </div>
  </div>
</template>

<script>
import defaultImage from '../assets/blinder-image.jpg';
export default {
  name: 'Card',
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      default:
        'This chic and contemporary blackout roller blind is, unsurprisingly, one of the very bestselling products on our website.',
    },
    containerDetails: {
      type: String,
      required: true,
    },
    priceLabel: {
      type: String,
      default: 'Price',
    },
  },
  data() {
    return {
      width: null,
      drop: null,
      image: defaultImage,
    };
  },
};
</script>

<style scoped>
.card-details {
  width: 300px;
  margin: 1rem;
  border: 1px solid black;
  border-radius: 10px;

  /* background-color: grey; */
}

.card-img-bg {
  /* background-color: #f1eefd !important; */
}

.card-img-top {
  height: 10rem;
  object-fit: cover;
}
</style>
