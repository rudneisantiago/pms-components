<template>
  <div>
    <label for="">Anexo (PDF)</label>
    <div class="input-group">
      <input
        id="pdf_file"
        type="file"
        ref="pdf_file"
        name="pdf_file"
        accept="application/pdf"
        class="form-control"
        @change="loadPDF"
      />
      <span class="input-group-btn">
        <button
          class="btn btn-default"
          :disabled="!file"
          type="button"
          @click="clean()"
        >
          <font-awesome-icon :icon="'times'" />
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "pdf-import",
  data() {
    return {
      file: null,
    };
  },
  methods: {
    loadPDF(e) {
      const pdf_file = e.target.files[0];
      this.file = pdf_file;
    },
    clean() {
      this.file = null;
      this.$refs.pdf_file.value = null;
    },
  },
  watch: {
    file(newValue) {
      this.$emit("input", newValue);
    },
  },
};
</script>
