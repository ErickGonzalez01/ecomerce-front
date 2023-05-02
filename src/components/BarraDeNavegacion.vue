<template>
    <div>
        <b-navbar class="p-0" toggleable="md" type="dark" variant="primary">

            <b-navbar-brand href="#"> <b-avatar variant="info" src="https://placekitten.com/300/300"
                    class="mr-3"></b-avatar> CatCorp.com</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse class="justify-conten" id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#/">Ofertas</b-nav-item>
                    <b-nav-item href="#">Categoria</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <div class="input-group">
                        <span class="tamano input-group-text m-0 p-0">
                            <select v-model="categoria" class="form-select form-select-sm"
                                aria-label=".form-select-sm example">
                                <option selected>Categoria</option>
                                <option v-for="(item, index) in categorias" :value="item.id" v-bind:key="index">
                                    {{ item.name }}</option>
                            </select>
                        </span>
                        <input :value="categoria" type="text" class="form-control"
                            aria-label="Amount (to the nearest dollar)">
                        <span class="input-group-text"><b-icon icon="search"></b-icon></span>
                    </div>
                </b-navbar-nav>
                <b-navbar-nav class="item-center">
                    <div class="fondo p-2">
                        <b-icon icon="cart-check-fill"></b-icon>
                        <b-badge class="badge">4</b-badge>
                    </div>
                    <div @click="showmodalUsuario" class="datos_usuario">
                        <b-avatar v-b-modal.modal-center class="usuario"></b-avatar>
                        <h5>{{ usuario.user.nombre }}</h5>
                    </div>
                </b-navbar-nav>
            </b-collapse>

        </b-navbar>
        <div>
            <b-modal ref="modalCenter" hide-footer id="modalCenter" title="Iniciar Sesion">
                <div class="img-estilos">
                    <img src="../assets/user.jpg" />
                </div>
                <div class="form-secion">
                    <div>
                        <label>Correo electronico-{{ datos_login.correo }}</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><b-icon icon="envelope"></b-icon></span>
                            <input v-model="datos_login.correo" type="text" class="form-control"
                                placeholder="Introduce tu correo" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                    </div>

                    <div>
                        <label>Contraseña-{{ datos_login.password }}</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon2"><b-icon icon="key-fill"></b-icon></span>
                            <input v-model="datos_login.password" id="password" type="password" class="form-control"
                                placeholder="Introduce tu contraseña" aria-label="Recipient's username"
                                aria-describedby="basic-addon2">
                        </div>
                    </div>
                    <div>
                        <div class="form-check">
                            <input v-model="datos_login.recordarme" class="form-check-input" type="checkbox" value=""
                                id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">Recordar contraseña-{{
                                datos_login.recordarme }}</label>
                        </div>
                    </div>
                    <p><a href="#" class="link-primary">¿Olvidaste tu contraseña? click aqui</a></p>
                    <p><a href="#" class="link-primary">¿No tienes cuenta? registrate dando click aqui</a></p>
                    <hr>
                    <div>
                        <button type="button" class="btn btn-primary">Registrate</button>
                        <button v-on:click="login" type="button" class="btn btn-secondary">Iniciar Secion</button>
                    </div>
                </div>

            </b-modal>
            <b-modal ref="ModalUsuario" hide-footer id="ModalUsuario" title="Iniciar Sesion">
                <div class="img-estilos">
                    <img src="../assets/user.jpg" />
                    <h3>{{ usuario.user.nombre }}</h3>
                    <h4>{{ usuario.user.apellido }}</h4>
                </div>
                <a class="btn btn-primary">Perfil</a>
                <button @click="cerrarSesscion" class="btn btn-primary">Cerrar sescion</button>
                <div class="form-secion">

                </div>

            </b-modal>
            
            <div id="modal_exito" class="modal_exito">
                <div class="modal_contenedor">
                    <div class="imagen_modal">
                        <img src="../assets/comprobado.png" />
                    </div>

                    <div>
                        <h4>Exito, se inicio sesion como:</h4>
                        <h3>{{ usuario.user.nombre }}</h3>
                    </div>
                    <div @click="modal_exito(false)" class="cerrar">
                        <button>x</button>
                    </div>
                </div>
            </div>



        </div>

        <div id="spiner-sesscion" class="spiner-sesscion">
            <b-spinner label=""></b-spinner>
        </div>
    </div>
</template>
<style scoped>
.imagen_modal img {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
}

.modal_contenedor {
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 2rem;
}

.cerrar {
    position: absolute;
    top: 0px;
    right: 5px;
}

.close_modal_exito {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color:rgba(0,0,0,0.5);
    z-index:999;
}

.modal_exito {
    width: 350px;
    height: 190px;
    background-color: #ffe601e0;
    border-radius: 5px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    z-index:1000
}

.spiner-sesscion {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    display: none;
}

.datos_usuario {
    display: flex;
    flex-direction: row;
    justify-items: center;
}

.form-secion {
    display: flex;
    flex-direction: column;
}

.img-estilos img {
    display: block;
    margin: auto auto;
    height: 100px;
}

.tamano {
    width: 6rem;
}

.badge {
    margin-left: 5px;
    background-color: black;
}

.fondo {
    background-color: darkslateblue;
    border-radius: 10px;
    width: 59.5px;
    height: 40px;
}

.usuario {
    border-radius: 50%;
    background-color: darkslategrey;
    width: 40px;
    height: 40px;
}

@media(min-width: 767px) {
    .justify-conten {
        justify-content: space-between;

    }

    .item-center {
        align-items: center;
        justify-content: space-around;
    }

    .usuario {
        border-radius: 50%;
        background-color: darkslategrey;
        margin-left: 2rem;
    }
}
</style>
<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
    name: "BarraDeNavegacion",
    data: () => {
        return {
            categorias: [
                { id: 1, name: "Ropa" },
                { id: 2, name: "Zapatos" },
                { id: 3, name: "Electrodomesticos" },
                { id: 4, name: "Elextronica" },
                { id: 5, name: "Informatica" },
                { id: 6, name: "Impresoras" }
            ],
            categoria: "",
            datos_login: {
                correo: "",
                password: "",
                recordarme: "",
                error: []
            }
        }
    },
    components: {

    },
    methods: {
        modal_exito: function (visible) {
            const modal_exito = document.getElementById("modal_exito");
            if (visible == true) {
                modal_exito.style.display = "block";
            }
            if (visible == false) {
                modal_exito.style.display = "none";
            }

        },
        filtro_de_busqueda: () => {
            const filtro_buqueda = document.getElementById("filtro_buqueda");
            let listaclases = filtro_buqueda.classList.contains("oculto");
            if (listaclases == true) {
                filtro_buqueda.classList.replace("oculto", "visible");
            }
            if (listaclases == false) {
                filtro_buqueda.classList.replace("visible", "oculto");
            }
            console.log(listaclases);
        },
        login: function () {
            const formData = new FormData();
            formData.append("correo", this.datos_login.correo);
            formData.append("password", this.datos_login.password);
            const spinersesscion = document.getElementById("spiner-sesscion");
            spinersesscion.style.display = "block";
            axios.post(this.URL_BASE + "/api/login", formData, { timeout: 10000 }).then(response => {
                if (response.data.sesion == true) {
                    spinersesscion.style.display = "none";
                    this.$refs["modalCenter"].hide();
                    this.setUsuario(response.data);
                    this.modal_exito(true);
                }
            }).catch(error => {
                console.log("error");
                spinersesscion.style.display = "none";
                if (error.response.data.sesion == false) {
                    alert(error.response.data.error);
                } else {
                    alert("Se produjo un error inesperado");
                }
            });
        },
        showmodalUsuario: function () {
            if (this.usuario.sesion == false) {
                this.$refs["modalCenter"].show();
                console.log("modalcenter");
            }
            if (this.usuario.sesion == true) {
                this.$refs["ModalUsuario"].show();
                console.log("modalUser");
            }

            console.log(this.usuario.sesion);
            console.log("showmodalUsuario");
        },
        cerrarSesscion: function () {
            this.CerrarSesion();
            this.$refs["ModalUsuario"].hide();
        },
        ...mapMutations(["setUsuario", "CerrarSesion"])
    },
    computed: {
        ...mapState(["usuario", "URL_BASE"])
    }
}

</script>