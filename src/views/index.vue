<template>
  <div>
    <PublicHeader :title="'Components'">
      <div class="col-xs-6">
        <p>Teste de componente header</p>
      </div>
    </PublicHeader>
    <Breadcrumb />
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-4">
          <label>Datepicker</label>
          <Datepicker v-model="selectDate" />
        </div>
        <div class="col-xs-12 col-sm-4">
          <PDFImport v-model="filePDF" />
        </div>
      </div>
    </div>
    <Footer :email="'portaldatransparencia@santos.sp.gov.br'">
      <h4>OUVIDORIA</h4>
      <p>
        Paço Municipal<br />
        Praça Visconde de Mauá, s/n<br />
        Piso Térreo<br />
        Cep: 11010-900<br />
        Tel.: <a href="tel:192">162</a><br />
        <a href="mailto:ouvidoria@santos.sp.gov.br">
          ouvidoria@santos.sp.gov.br
        </a>
      </p>
    </Footer>
  </div>
</template>

<script>
import {
  PublicHeader,
  Footer,
  Breadcrumb,
  Datepicker,
  PDFImport,
} from "../components";

export default {
  name: "main-view",
  components: {
    PublicHeader,
    Footer,
    Breadcrumb,
    Datepicker,
    PDFImport,
  },
  data() {
    return {
      selectDate: null,
      filePDF: null,
    };
  },
};
</script>
