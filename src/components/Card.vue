<script>
export default {
  name: 'Card',
};
</script>

<template>
  <div class="card justify-content-center text-center">
    <img
      src="https://via.placeholder.com/350x150"
      class="card-img-top rounded-10"
      alt="Card image"
    />

    <div>Blider</div>
    <div>Price</div>

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
