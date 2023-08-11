<template>
  <div>
    <PublicHeader :title="'Components'">
      <div class="col-xs-6">
        <p>Teste de componente header</p>
      </div>
    </PublicHeader>
    <Breadcrumb />
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
import { PublicHeader, Footer, Breadcrumb } from "../components";

export default {
  name: "main-view",
  components: {
    PublicHeader,
    Footer,
    Breadcrumb,
  },
};
</script>
