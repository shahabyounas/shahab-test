<template>
  <div class="card-details row p-2">
    <div class="col-lg-6 col-sm-12">
      <div class="card-img-bg py-1">
        <img :src="img" class="card-img-top rounded" :alt="title" />
      </div>
    </div>
    <div class="col-lg-6 col-sm-12 card-body">
      <h5 class="card-title fw-bold text-capitalize my-lg-0 my-sm-3">
        {{ name }}
      </h5>

      <p class="card-text">{{ description }}</p>

      <div class="d-flex flex-column input-block">
        <label for="" class="fw-bold my-2">
          <!-- Static Card details label -->
          {{ inputsLable }}
        </label>

        <div class="row gy-4">
          <div class="col-lg-6 gap-2">
            <input
              type="number"
              class="form-control col-lg-6"
              placeholder="Width (cm)"
              v-model="width"
              placehoder="width fo the cm"
              min="0"
              @change="inputWidthHandler"
              @input="inputWidthHandler"
            />
            <span v-if="!isWidthInRange && width > 0" class="small text-danger">
              limits: {{ limits.width.min }} - {{ limits.width.max }}
            </span>
            <span v-if="isWidthInRange">
              <i class="fa-solid fa-check text-success fa-xl"></i
            ></span>
          </div>

          <div class="col-lg-6">
            <input
              type="number"
              class="form-control col-lg-6"
              placeholder="Drop (cm)"
              v-model="drop"
              min="0"
              @change="inputDropHandler"
              @input="inputDropHandler"
            />
            <span v-if="!isDropInRange && drop > 0" class="small text-danger">
              limits: {{ limits.drop.min }} - {{ limits.drop.max }}
            </span>
            <span v-if="isDropInRange">
              <i class="fa-solid fa-check text-success fa-xl"></i
            ></span>
          </div>
        </div>

        <span
          class="text-center fw-bold"
          v-if="isWidthInRange && isDropInRange"
        >
          {{ currency
          }}{{
            Math.round(
              this.width * this.drop * (price_per_metre_squared / 10000)
            )
          }}
        </span>

        <div class="mt-aut" v-if="isWidthInRange && isDropInRange">
          <button class="mt-3 form-control card-details-btn" @click="addToCart">
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
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      default: '',
    },
    limits: {
      type: Object,
      required: true,
    },
    inputsLable: {
      type: String,
      default: 'Enter Measurements to get a price',
    },
    price_per_metre_squared: {
      type: Number,
      required: true,
    },
    currency: { type: String, required: true, default: '£' },
  },
  data() {
    return {
      width: null,
      drop: null,
      isWidthInRange: false,
      isDropInRange: false,
    };
  },

  created: function () {
    console.log(this.width, this.drop);
  },
  methods: {
    inputWidthHandler: function (e) {
      const parsedValue = parseInt(e.target.value);
      const minWidth = this.limits.width.min;
      const maxWidth = this.limits.width.max;
      const isWidthInRange = parsedValue >= minWidth && parsedValue <= maxWidth;

      if (isWidthInRange) {
        this.isWidthInRange = true;
      } else {
        this.isWidthInRange = false;
      }
      this.width = e.target.value;
    },
    inputDropHandler: function (e) {
      const parsedValue = parseInt(e.target.value);
      const minDrop = this.limits.width.min;
      const maxDrop = this.limits.width.max;
      const isDropInRange = parsedValue >= minDrop && parsedValue <= maxDrop;

      if (isDropInRange) {
        this.isDropInRange = true;
      } else {
        this.isDropInRange = false;
      }
      this.drop = e.target.value;
    },

    addToCart: function () {
      this.width = null;
      this.drop = null;
      this.$emit('handleAddToCard');
    },
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

.input-block {
  height: 13rem;
}
</style>
