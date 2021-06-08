<template>
  <div class="card">
      <img :src="image" class="image" />
                  <h1 class="position-absolute judul">Cinta Romantis</h1>
            <h2 class="position-absolute subjudul">Awal Kehidupan Baru</h2> 
  </div>
</template>

<script>
export default {
    data() {
        return {
            image: require('@/static/img/wedding.jpg')
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap');
.image {
  height:350px;
}
.judul {
    font-family: 'Mountains of Christmas', cursive;
    font-weight: 2000;
    font-size: 4rem;
    color: #6673dc;
}

.subjudul {
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 4rem;
    margin-left: 0.5rem;
    color: #D64627;
}
</style>