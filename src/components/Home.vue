<template>
  <div class="row">
    <router-link :to="{name:'Projeto', params: {idProjeto: 1}}" >
      <div class="col-md-3" v-for="projeto in projetos">
          <div class="box box-success">
            <div class="box-header with-border">
              <h3 class="box-title">{{ projeto.nome }}</h3>
            </div>
            <div class="box-body">
              <i class="fa fa-users"></i> {{ projeto.participantes.length }} Participantes <br/>
              <i class="fa fa-clock-o"></i> {{ projeto.horasInvestidas }} Horas<br/>
            </div>
          </div>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function(){
    return {
      projetos: [
        {
          nome: "Igelcar",
          valorHora: 40,
          participantes: [{},{}],
          horasInvestidas: 50
        },
        {
          nome: "Radagua",
          valorHora: 30,
          participantes: [{},{}],
          horasInvestidas: 25
        }
      ]
    }
  }
}
</script>
