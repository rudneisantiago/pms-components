<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <ol class="breadcrumb">
          <li>
            <router-link :to="'/'"> Início </router-link>
          </li>
          <li v-for="{ named_link, link, label } in links" :key="label">
            <router-link
              v-if="named_link || link"
              :to="named_link ? named_link : link"
            >
              {{ label }}&nbsp;
            </router-link>
            {{ named_link || link ? "" : label }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-breadcrumb",
  props: {
    links: {
      type: Array,
      default: () => [
        {
          named_link: "",
          link: "",
          label: "",
        },
      ],
    },
  },
};
</script>

<style scoped>
.breadcrumb {
  padding: 15px 0px;
  margin-bottom: 0px;
  background-color: inherit;
}
</style>
