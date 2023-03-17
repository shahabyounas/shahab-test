<script>
import Card from '../components/Card.vue';
export default {
  name: 'Landing',
  components: {
    Card,
  },
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

    <Card />
  </div>
</template>

<style>
.title {
  font-size: 1.5rem;
}
</style>
