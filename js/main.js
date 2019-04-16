var produto = 'Meias'

var app = new Vue({
    el: '#app',
    data: {
        produto: "Meias",
        descricao: "Um par de meias quentes para o inverno",
        imagem: "./img/meia-azul.png",
        descricaoImagem: "Um par de meias",
        urlDaImagem: "https://cdn2.vectorstock.com/i/1000x1000/59/31/city-street-background-with-shop-building-cartoon-vector-7975931.jpg",
        noEstoque: false,
        inventario: 0,
        detalhes: ["80% cotton", "20% poliéster", "unisex"],
        variantes: [{varianteId: 2234, varianteCor: "green", varianteImagem:"./img/meia-verde.jpg"}, {varianteId: 2235, varianteCor: "blue", varianteImagem:"./img/meias-azuis.jpg"}],
        carrinho:0

    },
    methods: {
        adicionaCarrinho(){
            this.carrinho +=1;
        },
        atualizaProduto(varianteImagem){
            this.imagem = varianteImagem
        },
        removeCarrinho(){
            this.carrinho --;
        }
    }
})