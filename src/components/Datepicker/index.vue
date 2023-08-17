<template>
  <div class="input-group">
    <date
      placeholder="Selecione a data"
      input-class="form-control"
      :format="format"
      :language="ptBR"
      v-model="inputVal"
    >
      <span slot="afterDateInput" class="animated-placeholder"></span>
    </date>
    <span class="input-group-btn">
      <button
        class="btn btn-default"
        :disabled="!value"
        type="button"
        @click="limpar()"
      >
        <font-awesome-icon :icon="'times'" />
      </button>
    </span>
  </div>
</template>

<script>
import date from "vuejs-datepicker";
import { ptBR } from "vuejs-datepicker/dist/locale";

export default {
  name: "main-datepicker",
  props: {
    value: { type: Date },
    format: {
      type: String,
      default: "dd MMM yyyy",
    },
  },
  components: {
    date,
  },
  data() {
    return {
      ptBR: ptBR,
      language: "pt-BR",
    };
  },
  methods: {
    limpar() {
      this.inputVal = null;
    },
    dateSelected() {
      return null;
    },
    formatarData(date) {
      return date.toLocaleDateString();
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>
