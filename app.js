var app = new Vue ({
    el: '#app',
    data: {
        mainTitle: "KMO Tech Store",
        subTitle:'Lista de Disponibilidad',
        allProd: [],
        newProd:'',
        newCant:'',
        newDesc:'',
        listProd:'',
        table: false
    },

    methods:{
        addProd(){
            this.allProd.push({
                name: this.newProd,
                cant: this.newCant,
                desc: this.newDesc
            });
            this.newProd='';
            this.newCant='';
            this.newDesc='';
        }
    }
});