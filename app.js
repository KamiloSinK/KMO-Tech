var app = new Vue ({
    el: '#app',
    data: {
        mainTitle: "KMO Tech Store",
        subTitle:'Lista de Disponibilidad',
        allProd: [],
        newProd:'',
        newCant:'',
        newDesc:'',
        table: false,
        likebar: 0
    },

    methods:{
        addProd(){
            this.allProd.push({
                name: this.newProd,
                cant: this.newCant,
                desc: this.newDesc
            });
            localStorage.setItem('productos', JSON.stringify(this.allProd));
            this.newProd='';
            this.newCant='';
            this.newDesc='';
        },
        delProd(index){
            this.allProd.splice(index, 1);
            localStorage.setItem('productos', JSON.stringify(this.allProd));
        }
    },
    created(){
        let datosDB = JSON.parse(localStorage.getItem('productos'));
        if(datosDB === null){
            this.allProd = [];
        }else{
            this.allProd = datosDB;
        }
    },

    computed:{
        barColor(){
            return{
                'red' : this.likebar < 50,
                'green' : this.likebar >= 50   
            }
        }
    }
});