<template>
    <div>
        <div class="row">
            <div class="col-md-7">
              <div class="box box-info">
                <div class="box-header with-border">
                  <h3 class="box-title">Resumo</h3>
                </div>
                <div class="box-body">
                  <div class="table-responsive">
                    <table class="table no-margin">
                      <tbody>
                      <tr>
                        <th>Nome</th>
                        <td>{{projeto.nome}}</td>
                      </tr>
                      <tr>
                        <th>Descrição</th>
                        <td>{{projeto.descricao}}</td>
                      </tr>
                      <tr>
                        <th>Horas previstas</th>
                        <td>{{projeto.horasPrevistas}} Horas</td>
                      </tr>
                      <tr>
                        <th>Horas gastas</th>
                        <td>{{projeto.horasGastas}} Horas</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="box box-info">
                <div class="box-header with-border">
                  <h3 class="box-title">Participantes</h3>
                </div>
                <div class="box-body">
                    <table class="table no-margin">
                      <thead>
                        <tr>
                          <th>Nome</th>
                          <th>Função</th>
                          <th>Horas investidas</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr v-for="participante in participantes">
                        <td>{{participante.nome}}</td>
                        <td>{{participante.funcao}}</td>
                        <td>{{participante.horasInvestidas}} Horas</td>
                      </tr>
                      </tbody>
                    </table>
                </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
              <div class="box box-info">
                <div class="box-header with-border">
                  <h3 class="box-title">Eventos</h3>
                </div>
                <div class="box-body">
                    <table class="table no-margin">
                      <thead>
                        <tr>
                          <th>Início</th>
                          <th>Fim</th>
                          <th>Tempo</th>
                          <th>Descrição</th>
                          <th>Usuário</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr v-for="evento in eventos">
                        <td>{{evento.inicio}}</td>
                        <td>{{evento.fim}}</td>
                        <td>{{evento.tempo}} Horas</td>
                        <td>{{evento.descricao}}</td>
                        <td>{{evento.usuario}}</td>
                        <td>
                          <button type="button" class="btn btn-primary btn-flat">
                            <i class="fa fa-pencil"></i>
                          </button>
                          <button type="button" class="btn btn-danger btn-flat">
                            <i class="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Projeto',
  data: function(){
    return {
        projeto: {
          nome: "IgelCar",
          descricao: "Projeto para gerenciamento de compra e venda de veículos.",
          horasPrevistas: 50,
          horasGastas: 30,
        },
        participantes:[{
          nome: "Franklin Dias",
          funcao: "Programador",
          horasInvestidas: 10
        },{
          nome: "Anderson Queiroz",
          funcao: "Programador",
          horasInvestidas: 15
        }],
        eventos:[{
          inicio: "10:00:00",
          fim: "12:00:00",
          tempo: 2,
          descricao: "Finalizada tela de cadastro de carro e leilão",
          usuario: "Franklin Dias"
        }]
    }
  }
}
</script>
