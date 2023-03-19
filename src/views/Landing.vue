<script>
/**
 * Card Design paractices
 * https://uxdesign.cc/8-best-practices-for-ui-card-design-898f45bb60cc
 **/
import { ref } from 'vue';
import Card from '../components/Card.vue';
import CardDetails from '../components/CardDetails.vue';
import Modal from '../components/Modal.vue';
import { BlindsService } from '../services/Blinds.js';

export default {
  setup() {
    const modalRef = ref({
      buttonTrigger: false,
    });
    const toggleModal = (trigger) => {
      modalRef.value[trigger] = !modalRef.value[trigger];
    };

    return {
      Modal,
      modalRef,
      toggleModal,
    };
  },
  name: 'Landing',
  components: {
    Card,
    CardDetails,
    Modal,
  },
  data: () => ({
    description: '',
    products: [],
    selectedProduct: null,
  }),
  created: async function () {
    const blindsResp = await BlindsService.getListOfBlinds();

    this.products = blindsResp.data.products;
    this.description = blindsResp.data.description;
  },

  methods: {
    getPriceHandler: function () {
      this.toggleModal('buttonTrigger');
    },
  },
};
</script>

<template>
  <div class="container mt-2">
    <div class="row justify-content-center">
      <div>
        <div class="heading-wrapper text-center text-uppercase">
          <div class="fw-bold title">Blinds Direct</div>
          <div class="secondary-title">Defined by Quality</div>
        </div>

        <hr class="text-muted" />

        <p class="text-center">{{ description }}</p>

        <hr class="text-muted" />
      </div>
    </div>

    <div class="d-flex flex-wrap justify-content-center cards">
      <div v-for="(item, index) in products" :key="iindex">
        <Card
          :id="index"
          :title="item.name"
          :img="item.images.thumb"
          :price="
            Math.round(
              item.limits.width.min *
                item.limits.drop.min *
                (item.price_per_metre_squared / 10000)
            ) // Change square per meter price to per square centimeter, assuming that width and drop values are in cm
          "
          @handleButton="getPriceHandler(id)"
        />
      </div>
    </div>

    <Modal
      v-if="modalRef.buttonTrigger"
      :toggleModal="() => toggleModal('buttonTrigger')"
    >
      <CardDetails />
    </Modal>
  </div>
</template>

<style>
.title {
  font-size: 1.5rem;
  color: #5d38e0;
}

.secondary-title {
  font-size: 0.65rem;
  color: #aaa5a1;
}

.heading-wrapper {
  line-height: 1.12;
}

.cards {
  gap: 1rem;
}
</style>
