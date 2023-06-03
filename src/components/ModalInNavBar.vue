<script>   
    export default{
        name:"ModalInNavBar",
        methods: {
            Close:function(){
                console.log("cerrar componente que lo contiene");
                this.$emit("CloseMethod");                
            }
        },
        props:{
            store: Boolean
        }
    }
</script>
<template>
    <div :style="{display: store ? 'block' : 'none'}">
        <div class="fondo-oscuro"></div>
        <div class="contenido">
            <div class="close">
                <img @click="Close" src="@/assets/close.svg" alt="close"/>
            </div>            
            <div class="container">
                <slot></slot>
            </div>            
        </div>
    </div>
</template>
<style scoped>
.close{
    display:flex;
    justify-content: flex-end;
}
.close img{
    margin-right:0.5rem;
    margin-top:0.5rem;
}
.close img:hover{
    cursor:pointer;
}
.fondo-oscuro{
    position:fixed;
    width: 100% ;
    height: 100%;
    background: #1C1414;
    opacity: 80%;
    margin: 0px;
    padding: 0px;
    top:0px;
    left: 0px;
}
.contenido{
    position: fixed;
    background: #594C4C;
    width: 360px;
    height:auto;
    top:10%;
    left:50%;
    transform: translate(-50%,-10%);
    border-radius: 0.6rem;
    color:#fff;
}
@media(min-width: 768px){
    .contenido{
        width: 655px;
        height:auto;
    }
}
</style>