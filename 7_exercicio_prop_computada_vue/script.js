let app = new Vue({
  el: '#app',
  data: {
    nome: 'Argel',
  },
  computed: {
    nomeInvertido: function () {
      return this.nome.split('').reverse().join('');
    }
  }
});