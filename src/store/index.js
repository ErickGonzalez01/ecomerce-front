import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    URL_BASE:"http://192.168.1.2",
    usuario:{
      Messague: "",
      token: "",
      sesion: false,
      user: {
        nombre: "",
        apellido: "",
        fecha_nacimiento: "",
        telefono: "",
        direccion: "",
        correo: "",
        departamento: "",
        municipio: "",
        barrio_comarca_colonia: ""
      }
    }
  },
  getters: {
    //codigo aqui
  },
  mutations: {
    //codigo aqui
    setUsuario:function(state,objeto){
      state.usuario.Messague=objeto.Messague;
      state.usuario.token=objeto.token;
      state.usuario.sesion=objeto.sesion;
      state.usuario.user.nombre=objeto.user.nombre;
      state.usuario.user.apellido=objeto.user.apellido;
      state.usuario.user.fecha_nacimiento=objeto.user.fecha_nacimiento;
      state.usuario.user.telefono=objeto.user.telefono;
      state.usuario.user.direccion=objeto.user.direccion;
      state.usuario.user.correo=objeto.user.correo;
      state.usuario.user.departamento=objeto.user.departamento;
      state.usuario.user.municipio=objeto.user.municipio;
      state.usuario.user.barrio_comarca_colonia=objeto.user.barrio_comarca_colonia;
    },
    setSesion:function(state,sesion){
      state.usuario.sesion=sesion;
    },
    CerrarSesion:function(state){
      state.usuario.Messague="";
      state.usuario.token="";
      state.usuario.sesion=false;
      state.usuario.user.nombre=""
      state.usuario.user.apellido="";
      state.usuario.user.fecha_nacimiento="";
      state.usuario.user.telefono="";
      state.usuario.user.direccion="";
      state.usuario.user.correo=""
      state.usuario.user.departamento="";
      state.usuario.user.municipio="";
      state.usuario.user.barrio_comarca_colonia="";
    }
  },
  actions: {
    //codigo aqui
  },
  modules: {
    //codigo aqui
  }
})
