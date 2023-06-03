export default{
    namespaced:true,
    state:{
        modalInicioDeSecion:false,
        otrostate:true
    },
    mutations:{
        AsignarValorModalFondoOscuro:function(state, valor){
            state.modalInicioDeSecion=valor;
        }

    },
    actions:{

    },
    getters:{
        ObtenerValorModalFondoOscuro:function(state){
            return state.modalInicioDeSecion;
        }
    }
}