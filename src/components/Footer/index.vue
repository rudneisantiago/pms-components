<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div class="col-xs-12 col-sm-6 info-content">
        <div class="info">
          <h4>ERROS NO SISTEMA?</h4>
          <p>
            Entre em contato através do email: <br />
            <a :href="`mailto:${email}`">
              {{ email }}
            </a>
          </p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 info-content">
        <div class="info">
          <slot></slot>
        </div>
      </div>
      <div class="col-xs-12" style="padding-top: 15px">
        <p style="text-align: center">Prefeitura de Santos - 2023</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "main-footer",
  props: {
    email: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h4 {
  font-weight: 500;
  margin-bottom: 18px;
}
p {
  line-height: 1.65em;
}
.footer {
  background: #0d291b none repeat scroll 0 0;
  font-size: 1em;
  width: 100%;
  color: #dcf9c1;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 30px;
}
.info-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.info {
  margin-left: unset;
  margin-right: unset;
}

@media screen and (min-width: 768px) {
  .info {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
