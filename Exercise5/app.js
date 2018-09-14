new Vue({
    el: '#exercise',
    data: {
    	toggleParas: true,
      array: ['Biblo', 'Frudo', 'Gandalf', 'Sam'],
      myObject: {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkiens',
        books: '3'
      },
      testData: {
        name: 'Vue Training',
        id: 45,
        data: [0.45, 1.45, 8.87, 6.23]
      }
    },
    methods:{
    	doMagic: function() {
      	this.toggleParas = !this.toggleParas;
      }
    }
  });