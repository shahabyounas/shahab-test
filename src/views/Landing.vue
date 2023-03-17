<script>
/**
 * Card Design paractices
 * https://uxdesign.cc/8-best-practices-for-ui-card-design-898f45bb60cc
 **/
import Card from '../components/Card.vue';
export default {
  name: 'Landing',
  components: {
    Card,
  },
  data: () => ({
    rollersList: [{}, {}, {}, {}, {}, {}, {}],
  }),
};
</script>

<template>
  <div class="container mt-2">
    <div class="row justify-content-center">
      <div>
        <div class="text-center text-uppercase">
          <div class="fw-bold title">Blinds Direct</div>
          <div class="text-muted">Defined by Quality</div>
        </div>

        <hr />

        <p class="text-center">
          For a crisp and contemporary window solution, look no further than our
          collection of roller blinds. Roller blinds are a simple and practical
          window dressing, with a versatility that makes them suitable for every
          room in the home.
        </p>
      </div>
    </div>

    <div class="d-flex flex-wrap justify-content-center cards">
      <div v-for="item in rollersList" :key="item.id">
        <Card />
      </div>
    </div>
  </div>
</template>

<style>
.title {
  font-size: 1.5rem;
}

.cards {
  gap: 1rem;
}
</style>
