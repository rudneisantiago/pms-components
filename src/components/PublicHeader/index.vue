<template>
  <div class="public-header">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2 v-if="showTitle" class="mega">{{ title }}</h2>
          <div v-else>&nbsp;</div>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "public-header",
  props: {
    title: {
      type: String,
      default: "Título",
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.public-header {
  background: #0d291b none repeat scroll 0 0;
  color: #dcf9c1;
  padding: 15px 15px 30px 15px;
}

.public-header p,
.public-header span.label {
  font-size: 1.2em;
}

.public-header span.destaque-header {
  color: #f0f8ff;
}

.public-header span.label {
  color: #03dd49;
  display: block;
  text-align: left;
  margin-left: 0px;
  padding-left: 0px;
}

.public-header h2 {
  margin-bottom: 30px;
}

.public-header .mega {
  font-size: 3em;
}

@media (min-width: 768px) {
  .public-header .mega {
    font-size: 4em;
  }
}
</style>
