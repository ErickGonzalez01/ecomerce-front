<template>
    <div>
        <BarraDeNavegacion/>
        <h1>Cuerpo de la pagina</h1>        
    </div>
</template>
<script>

    import BarraDeNavegacion from "@/components/BarraDeNavegacion.vue"
    //import HelloWorld from "@/components/HelloWorld.vue"

    export default{
        name: "PaginaDeInicio",
        data: function(){
            return{

            }
        },
        components: {
            BarraDeNavegacion
        }
    }

</script>