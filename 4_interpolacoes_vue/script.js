let app = new Vue({
  el: '#app',
  data: {
    aviso: true,
    divId: 'idDaDiv',
    linkGoogle: 'https://www.google.com.br/',
    n: 14
  },
  methods: {
    'clicou': () => {
      alert('Clicou!');
    },
    'enviou': () => {
      alert('Enviou...');
    }
  }
});