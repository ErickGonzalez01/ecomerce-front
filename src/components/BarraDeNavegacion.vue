<script>
import ModalInNavBar from "@/components/ModalInNavBar.vue";
//import {mapGetters, mapMutations} from "vuex";
import LogoTipo from "@/components/LogoTipo.vue";

export default {
    name: "BarraDeNavegacion",
    data: function () {
        return {
            registrarse:{
                etado_registro:false,
                departamento:"Seleccione",
                municipio:"Seleccione"
            },
            modalIniciarSecion: false,
            modalRegistroOne: false,//:store="RegistrarseOne" @CloseMethod=""
            modalRegistroTwo: false,
            modalRegistroThree: false,
            modalRegistroFour: false,
            municipiosYDepartamentosDeNicaragua:[
                {
                    departamento:"RACCS",
                    municipios:[
                        "Bluefields",
                        "Corn Island",
                        "Kukra hill",
                        "El Ayote",
                        "Nueva Guinea",
                        "Laguna de Perlas",
                        "La Cruz del Río Grande",
                        "Rama",
                        "Muelle de los Bueyes",
                        "Bocana de Paiwas",
                        "El Tortuguero",
                        "Desembocadura de Río Grande"
                    ]
                },
                {
                    departamento:"RACCN",
                    municipios:[
                        "Bonanza",
                        "Mulukukú",
                        "Prinzapolka",
                        "Puerto Cabezas",
                        "Rosita",
                        "Siuna",
                        "Waslala",
                        "Waspán"
                    ]
                },
                {
                    departamento:"Boaco",
                    municipios:[
                        "BOACO",
                        "CAMOAPA",
                        "TEUSTEPE",
                        "SAN LORENZO",
                        "SANTA LUCÍA",
                        "SAN JOSÉ DE LOS REMATES"
                    ]
                },
                {
                    departamento:"Carazo",
                    municipios:[
                        "San Marcos",
                        "Diriamba",
                        "Dolores",
                        "Jinotepe",
                        "El Rosario",
                        "La Paz de Centro",
                        "Santa Teresa",
                        "La Conquista"
                    ]
                },
                {
                    departamento:"Chinandega",
                    municipios:[
                        "El Viejo",
                        "Puerto Morazán Tonalá",
                        "Somotillo",
                        "Santa Tomás del Norte",
                        "Cinco Pinos",
                        "San Pedro del Norte",
                        "San Francisco del Norte",
                        "Villanueva",
                        "Chinandega Chichigalpa",
                        "El Realejo",
                        "Corinto",
                        "Chichigalpa Chinandega",
                        "Posoltega"
                    ]
                },
                {
                    departamento:"Chontales",
                    municipios:[
                        "Comalapa",
                        "Juigalpa",
                        "La Libertad",
                        "Santo Domingo",
                        "San Pedro de Lóvago",
                        "Santo Tomás",
                        "Acoyapa",
                        "Villa Sandino"
                    ]
                },
                {
                    departamento:"Esteli",
                    municipios:[
                        "Pueblo Nuevo",
                        "Condega",
                        "San Juan de Lima",
                        "Estelí",
                        "La Trinidad",
                        "San Nicolás"
                    ]
                },
                {
                    departamento:"Granada",
                    municipios:[
                        "Granada",
                        "Diriá",
                        "Diriomo",
                        "Nandaime"  
                    ]
                },
                {
                    departamento:"Jinotega",
                    municipios:[
                        "Wiwilí",
                        "Cuá Bocay",
                        "San Sebastián de Yalí",
                        "La Concordia",
                        "San Rafael del Norte",
                        "Santa María de Pantasma",
                        "Jinotega"
                    ]
                },
                {
                    departamento:"León",
                    municipios:[
                        "León",
                        "Quezalguaque",
                        "Telica",
                        "Larreynaga Malpaisillo",
                        "El Sauce",
                        "Achuapa",
                        "Santa Rosa del Peñón",
                        "El Jicaral",
                        "La Paz Centro",
                        "Nagarote"
                    ]
                },
                {
                    departamento:"Madriz",
                    municipios:[
                        "Somoto",
                        "Totogalpa otogalpa",
                        "Telpaneca",
                        "San Juan del Río Coco",
                        "Yalaguina",
                        "Palacaguina",
                        "San Lucas",
                        "Las Sabanas",
                        "San José de Cusmapa"
                    ]
                },
                {
                    departamento:"Managua",
                    municipios:[
                        "San Francisco Libre",
                        "Tipitapa",
                        "Mateare",
                        "Villa Carlos Fonseca",
                        "San Rafael del Sur",
                        "Managua",
                        "Ticuantepe"
                    ]
                },
                {
                    departamento:"Masaya",
                    municipios:[
                        "La Concepción",
                        "Nindirí",
                        "Masaya",
                        "Tisma",
                        "Masatepe",
                        "Nandasmo",
                        "Catarina",
                        "Niquinohomo",
                        "San Juan de Oriente"
                    ]
                },
                {
                    departamento:"Matagalpa",
                    municipios:[
                        "San Isidro",
                        "Sébaco",
                        "Ciudad Darío",
                        "Terrabona",
                        "San Dionisio",
                        "Esquipulas",
                        "Muy Muy",
                        "Matagalpa",
                        "San Ramón",
                        "-El Tuma La Dalia",
                        "-Rancho Grande",
                        "-Matiguás",
                        "-Río Blanco",
                    ]
                },
                {
                    departamento:"Nueva Segovia",
                    municipios:[
                        "Santa María",
                        "Macuelizo",
                        "Dipilto",
                        "Ocotal",
                        "Mosonte",
                        "San Fernando",
                        "Ciudad Antigua",
                        "El Jícaro Ciudad Sandino",
                        "Jalapa",
                        "Murra",
                        "Quilalí"
                    ]
                },
                {
                    departamento:"Rio San Juan",
                    municipios:[
                        "Morrito",
                        "El Almendro",
                        "San Miguelito",
                        "San Carlos",
                        "El Castillo Boca de Sábalos",
                        "San Juan del Norte"
                    ]
                },
                {
                    departamento:"Rivas",
                    municipios:[
                        "Tola",
                        "Belén",
                        "Potosí",
                        "Buenos Aires",
                        "Rivas",
                        "San Jorge",
                        "San Juan del Sur",
                        "Cárdenas",
                        "Moyogalpa",
                        "-Altagracia"
                    ]
                }
            ]
        }
    },
    methods: {
        //Modal iniciar secion
        ModalIniciarSecionOpen: function () {
            this.modalIniciarSecion = true;
        },
        ModalIniciarSecionClose: function () {
            this.modalIniciarSecion = false;
        },
        //Modal Registr One
        ModalRegistroOneClose: function () {
            this.modalRegistroOne = false;
        },
        ModalRegistroOneOpen: function () {
            this.modalRegistroOne = true;
        },
        ModalInicioSecioCloseModalRegistroOneOpen: function () {
            this.modalIniciarSecion = false;
            this.modalRegistroOne = true;
        },
        //Modal Registro Two
        ModalRegistroTwoOpen: function () {
            //this.ModalRegistroOneClose();
            this.modalRegistroOne = false;
            this.modalRegistroTwo = true;
        },
        ModalRegistroTwoClose: function () {
            this.modalRegistroTwo = false
        },
        ModalRegistroTwoAnterior: function () {
            this.modalRegistroTwo = false;
            this.modalRegistroOne = true;
            //this.ModalRegistroTwoClose();
            //this.ModalRegistroOneOpen();
        },
        ModalRegistroTwoSiguiente: function () {
            this.modalRegistroTwo = false;
            this.modalRegistroThree = true;
            //this.ModalRegistroTwoClose();
            //this.ModalRegistroThreeOpen();
        },
        //Modal Registro Three
        ModalRegistroThreeOpen: function () {
            this.modalRegistroThree = true;
        },
        ModalRegistroThreeClose: function () {
            this.modalRegistroThree = false;
        },
        ModalRegistroThreeAnterior:function(){
            this.modalRegistroThree=false;
            this.modalRegistroTwo=true;
        },
        ModalRegistroThreeSiguiente:function(){
            this.modalRegistroThree=false;
            this.modalRegistroFour=true;
        },
        //Modal Registro Four
        ModalRegistroFourOpen:function(){
            this.modalRegistroFour=true;
        },
        ModalRegistroFourClose:function(){
            this.modalRegistroFour=false;
        },
        ModalRegistroFourAnterior:function(){
            this.modalRegistroThree=true;
            this.modalRegistroFour=false;
        }

    },
    computed: {
        MunicipiosPorDepartamentos: function(){
            const municipios = this.municipiosYDepartamentosDeNicaragua.find(
                (item)=> item.departamento===this.registrarse.departamento
            );
            if(municipios){                
                return municipios.municipios;
            }
            return[];
        },
        //Modal Iniciar secion
        ModalIniciarSecionValue: function () {
            return this.modalIniciarSecion;
        },
        //Modal Registro One
        RegistrarseOne: function () {
            return this.modalRegistroOne;
        },
        //Modal Registro Two
        RegistrarseTwo: function () {
            return this.modalRegistroTwo;
        },
        //Modal Registro Three
        RegistrarseThree: function () {
            return this.modalRegistroThree;
        },
        //Modal Registro FOur
        RegistrarseFour:function(){
            return this.modalRegistroFour;
        }
    },
    components: {
        ModalInNavBar,
        LogoTipo
    }

}
</script>
<template>
    <nav class="eposition-relative">
        <div class="estilos">
            <ul class="estilos margin-left">
                <li>
                    <img width="20" height="15.56" src="@/assets/🦆 icon _menu_.svg">
                </li>
                <li>
                    <img width="30" height="30" src="@/assets/cat.svg" />
                </li>
                <li>
                    <h5>CatCorp.com</h5>
                </li>
            </ul>
            <ul class="estilos margin-right">
                <li class="btn-iniciarsesion-and-registrate">
                    <button v-on:click="ModalIniciarSecionOpen" class="btn-iniciarscion">Iniciar secion</button>
                    <button v-on:click="ModalRegistroOneOpen"
                        class="btn-iniciarscion btn-registrate-visible">Registrate</button>
                </li>
                <li>
                    <div class="carritoDeComplas">
                        <img width="33" height="29" src="@/assets/Group 35.svg" />
                        <p class="numeroCarrito">+9</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="eposition-absolute">
            <div class="nav-busqueda">
                <img src="@/assets/🦆 icon _search_.svg" />
                <input type="text" class="nav-input-text" />
                <img src="@/assets/🦆 icon _cancel_.svg" />
            </div>
        </div>

        <ModalInNavBar :store="ModalIniciarSecionValue" @CloseMethod="ModalIniciarSecionClose">
            <logoTipo />
            <h5>Iniciar secion:</h5>
            <div>
                <div class="mb-3">
                    <label for="correo" class="form-label">Correo electronico:</label>
                    <input type="email" class="form-control" id="correo" placeholder="name@example.com">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña:</label>
                    <input type="password" class="form-control" id="password" placeholder="12345678">
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="recordarme">
                    <label class="form-check-label" for="recordarme">Recordarme</label>
                </div>
                <div>
                    <ul>
                        <li>
                            <a v-on:click="ModalInicioSecioCloseModalRegistroOneOpen" class="enlace_iniciar_ecion"
                                href="#">¿No tines una cuenta? registrate dando <span>click aquí</span></a>
                        </li>
                        <li>
                            <a class="enlace_iniciar_ecion" href="#">¿Olvidaste tu contraseña? <span>click aquí</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="contenedor-btn-iniciar-secion">
                <button>Iniciar secion</button>
            </div>
        </ModalInNavBar>
        <ModalInNavBar :store="RegistrarseOne" @CloseMethod="ModalRegistroOneClose">
            <LogoTipo />
            <h5>Registrarse:</h5>
            <div>
                <div class="mb-3">
                    <label for="correo_registro" class="form-label">Correo:</label>
                    <input type="email" class="form-control" id="correo_registro" placeholder="name@example.com">
                </div>
                <div class="mb-3">
                    <label for="password_registro" class="form-label">Contraseña:</label>
                    <input type="email" class="form-control" id="password_registro" placeholder="12345678">
                </div>
                <div class="mb-3">
                    <label for="password1_registro" class="form-label">Confirmar contraseña:</label>
                    <input type="email" class="form-control" id="password1_registro" placeholder="12345678">
                </div>
            </div>
            <div class="contenedor-btn-iniciar-secion ">
                <button v-on:click="ModalRegistroTwoOpen" class="btn-siguiente">
                    <p>Siguiente</p>
                    <img src="@/assets/FlechaDerecha.svg" alt="flecha derecha" />
                </button>
            </div>
        </ModalInNavBar>
        <ModalInNavBar :store="RegistrarseTwo" @CloseMethod="ModalRegistroTwoClose">
            <LogoTipo />
            <h5>Registrarse:</h5>
            <div>
                <div class="mb-3">
                    <label for="nombre_registro" class="form-label">Nombre:</label>
                    <input type="text" class="form-control" id="nombre_registro" placeholder="Juan Ramon">
                </div>
                <div class="mb-3">
                    <label for="apellido_registro" class="form-label">Apellido:</label>
                    <input type="text" class="form-control" id="apellido_registro" placeholder="Ruiz Rueda">
                </div>
                <div class="mb-3">
                    <label for="fecha_de_nacimiento_registro" class="form-label">Fecha de nacimiento:</label>
                    <input type="date" class="form-control" id="fecha_de_nacimiento_registro" placeholder="15/02/1987">
                </div>
                <div class="contenedor-btn-iniciar-secion contenedor-btn-iniciar-seciono_justifi_content_space_between">
                    <button v-on:click="ModalRegistroTwoAnterior" class="btn-siguiente">
                        <img src="@/assets/FlechaIzquierda.svg" alt="flecha izquierda" />
                        <p>Anterior</p>
                    </button>
                    <button v-on:click="ModalRegistroTwoSiguiente" class="btn-siguiente">
                        <p>Siguiente</p>
                        <img src="@/assets/FlechaDerecha.svg" alt="flecha derecha" />
                    </button>
                </div>
            </div>
        </ModalInNavBar>
        <ModalInNavBar :store="RegistrarseThree" @CloseMethod="ModalRegistroThreeClose">
            <LogoTipo />
            <h5>Registrarse:</h5>
            <div>
                <div class="mb-3">
                    <label for="telefono_registro" class="form-label">Telefono:</label>
                    <input type="text" class="form-control" id="telefono_registro" placeholder="+505 87024545">
                </div>
                <div class="mb-3">
                    <label for="direccion_registro" class="form-label">Direccion:</label>
                    <textarea class="form-control" id="direccion_registro" rows="2"></textarea>
                </div>
                <!--Aqui que vaya barrio o colonia despues de escribir la direcion-->
                <div class="mb-3">
                    <label for="colonia_o_barrio_registro" class="form-label">colonia o barrio:</label>
                    <input type="text" class="form-control" id="colonia_o_barrio_registro" placeholder="+505 87024545"/>
                </div>
                <div class="contenedor-btn-iniciar-secion contenedor-btn-iniciar-seciono_justifi_content_space_between">
                    <button v-on:click="ModalRegistroThreeAnterior" class="btn-siguiente">
                        <img src="@/assets/FlechaIzquierda.svg" alt="flecha izquierda" />
                        <p>Anterior</p>
                    </button>
                    <button v-on:click="ModalRegistroThreeSiguiente" class="btn-siguiente">
                        <p>Siguiente</p>
                        <img src="@/assets/FlechaDerecha.svg" alt="flecha derecha" />
                    </button>
                </div>
            </div>
        </ModalInNavBar>        
        <ModalInNavBar :store="RegistrarseFour" @CloseMethod="ModalRegistroFourClose">
            <LogoTipo/>
            <h5>Hola Four</h5>
            <div>
                <div class="mb-3">
                    <label for="departamento_registro" class="form-label">Departamento:</label>
                    <select v-model="registrarse.departamento" id="departamento" class="form-select" aria-label="Default select example">
                        <option selected>Seleccione</option>
                        <option v-for="(item, key) in municipiosYDepartamentosDeNicaragua" :key="key" :value="item.departamento">
                            {{ item.departamento }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="municipio_registro" class="form-label">Municipio:</label>
                    <select v-model="registrarse.municipio" id="municipio" class="form-select" aria-label="Default select example">
                        <option selected>Seleccione</option>
                        <option v-for="(item, key) in MunicipiosPorDepartamentos" :key="key" :value="item">
                            {{ item }}
                        </option>
                    </select>
                </div>
                <div class="contenedor-btn-iniciar-secion contenedor-btn-iniciar-seciono_justifi_content_space_between">
                    <button v-on:click="ModalRegistroFourAnterior" class="btn-siguiente">
                        <img src="@/assets/FlechaIzquierda.svg" alt="flecha izquierda" />
                        <p>Anterior</p>
                    </button>
                    <button class="btn-siguiente">
                        <p>Registrarse</p>
                    </button>
                </div>
            </div>
        </ModalInNavBar>
        <ModalInNavBar :store="false">
            <LogoTipo/>
            <div v-if="registrarse.etado_registro === true" class="registro mb-3">
                <img class="mb-3" src="@/assets/check.svg" alt="exito" />
                <p>Se a enviado un correo electronico de confirmacion.</p>
            </div>
            <div v-if="registrarse.etado_registro === false" class="registro mb-3">
                <img class="mb-3" src="@/assets/faild.svg" alt="faild" />
                <p>Se envio un correo de recuperacion , revise e intente nuevamente.</p>
            </div>
            <div class="contenedor-btn-iniciar-secion contenedor-btn-iniciar-seciono_justifi_content_space_between">
                <button class="btn-siguiente" v-on:click="registrarse.etado_registro=false">False</button>
                <button class="btn-siguiente" v-on:click="registrarse.etado_registro=true">True</button>
            </div>
        </ModalInNavBar>
        
    </nav>
</template>
<style scoped>
@font-face{
    font-family:"Itim";
    src: url("@/assets/fonts/Itim.ttf") format("truetype");
}
h5 {
    margin: 0rem;
}

p {
    margin: 0rem;
}

nav {
    background: #405EAB;
    padding-bottom: 0.31rem;
    padding-top: 0.1rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
}

ul {
    list-style-type: none;
    padding: 0rem;
    margin: 0rem;
    gap: 0.2rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
}

.btn-siguiente {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.contenedor-btn-iniciar-secion {
    display: flex;
    justify-content: center;
}

.contenedor-btn-iniciar-seciono_justifi_content_space_between {
    justify-content: space-between;
}

.contenedor-btn-iniciar-secion button {
    background: #0F6E83;
    border: none;
    border-radius: 0.3rem;
    color: #fff;
    height: 46px;
    width: 140px;
    margin-bottom: 13px;
}

.contenedor-btn-iniciar-secion button:hover {
    border: solid 0.2rem #0b282e;
}

.contenedor-btn-iniciar-secion button:active {
    /*border:solid 5px #9ab1b6;*/
    background: #0b282e;
}

.enlace_iniciar_ecion {
    color: #fff;
    text-decoration: none;
}

.enlace_iniciar_ecion span {
    text-decoration: underline;
    color: #0E234C;
}

.estilos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

/*
.margin-left{
    margin-left: 0.4rem;
}
.margin-right{
    margin-right: 0.4rem;
}*/

.btn-iniciarscion {
    background: #D9D9D9;
    border: none;
    border-radius: 0.2rem;
}

.numeroCarrito {
    color: white;
    font-size: 0.8rem;
    position: absolute;
    top: -1px;
    right: 2px;
}

.carritoDeComplas {
    position: relative;
    width: 33px;
    height: 29px;
}

.nav-busqueda {
    background: #fff;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0.1rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
}

.nav-input-text {
    border: none;
    width: 82%;
}

.nav-input-text:focus {
    outline: none;
}

.btn-registrate-visible {
    display: none;
}

.registro{
    display:flex;
    flex-direction: column;
    /*justify-content: center;*/
    align-items: center;
}
.registro img {
    width: 45px;
    height: 32.14px;
}

.registro p{
    font-family: 'Itim';
    font-size:18px;
}

/* 
    Estilos para version de escritorio
*/
@media(min-width: 768px) {
    .eposition-relative {
        position: relative;
    }

    .eposition-absolute {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40%;
    }

    .btn-registrate-visible {
        display: inline-block;
    }

    .btn-iniciarsesion-and-registrate {
        display: flex;
        gap: 0.5rem;
        flex-direction: row;
    }
}
</style>