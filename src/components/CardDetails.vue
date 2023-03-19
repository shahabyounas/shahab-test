<template>
  <div class="card-details row p-2">
    <div class="col-lg-6 col-sm-12">
      <div class="card-img-bg py-2">
        <img :src="image" class="card-img-top" :alt="title" />
      </div>
    </div>
    <div class="col-lg-6 col-sm-12 card-body">
      <h5 class="card-title fw-bold text-capitalize my-2 h2">{{ title }}</h5>

      <p class="card-text">{{ description }}</p>

      <p>{{ containerDetails }}</p>

      <div class="d-flex flex-column" style="background: gree">
        <label for="" class="fw-bold my-3">
          Enter Measurements to get a price
        </label>

        <div class="row gy-4">
          <div class="col-lg-6 gap-2">
            <input
              type="number"
              class="form-control col-lg-6"
              placeholder="Width (cm)"
              v-model="width"
              placehoder="width fo the cm"
            />
          </div>

          <div class="col-lg-6">
            <input
              type="number"
              class="form-control col-lg-6"
              placeholder="Drop (cm)"
              v-model="drop"
            />
          </div>
        </div>

        <div class="mt-auto">
          <button class="mt-3 form-control card-details-btn">
            Add to basket
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultImage from '../assets/roller_two.jpg';
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
  margin: 1rem;
}

.card-bock {
  flex: 1 1 0;
}

.card-details-btn {
  background-color: #5d38e0;
  color: #ffffff;
}

.card-details-btn {
  filter: saturate(2);
}

.card-img-top {
  height: 20rem;
  object-fit: cover;
}
</style>
