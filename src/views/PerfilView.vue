<script>
export default {
    name: "PerfilView",
    data: function () {
        return {

        }
    },
    methods: {
        sidebar: function () {
            const sidebar = document.getElementById("sidebar");
            sidebar.style.left = "0rem";
        },
        sidebarOcultar: function () {
            const sidebar = document.getElementById("sidebar");
            sidebar.style.left = "-18rem";
        }
    }
}
</script>
<template>
    <div class="caja">
        <div class="caja-button">
            <b-button @click="sidebar"> <b-icon icon="menu-button-wide"></b-icon> Opciones</b-button>
        </div>
        <div class="caja-chil caja-chil-1">
            <h5>Caja 1</h5>
            <div class="caja-chil-1-perfil">
                <h4>Perfil del usuario</h4>
                <b-avatar src="https://placekitten.com/300/300" size="10rem"></b-avatar>
                <h4>Nombre</h4>
                <h6>Apellido</h6>
            </div>

        </div>
        <div id="sidebar" class="caja-chil caja-chil-2 side-bar">
            <div class="caja-chil-2-opciones">
                <div class="sidebar-titulo">
                    <h5>Caja 2</h5>
                    <b-button class="sidebar-titulo-button" @click="sidebarOcultar">X</b-button>
                </div>

                <ul>
                    <li>Informacion</li>
                    <li>Actualizar datos</li>
                    <li>Historial de compras</li>
                    <li>En transito</li>
                </ul>
            </div>
        </div>
        <div class="caja-chil caja-chil-3">
            <h5>Caja 3</h5>
            <div>
                <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat reiciendis quibusdam sed, similique, unde a alias modi dolorem illum dolor eveniet rem saepe assumenda repellat tempora non sit repudiandae quisquam.</p>
                </b-jumbotron>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>
<style scoped>
.caja-chil-2-opciones{
    margin: 5px;
}
.caja-chil-2-opciones ul li:hover{
    color:white;
    background-color: darkslategray;
    border-radius: 5px;
}
.caja-chil-2-opciones ul li{
    padding: 0.5rem;
    background-color: rgb(71, 143, 143);
    margin-top: 1rem;
    border-radius: 5px;
}
.caja-chil-2-opciones ul{
  list-style: none;
}
.caja-chil-1-perfil {
    background-color: white;
    border: solid white 2px;
    border-radius: 10px;
    margin: 20px;
    padding: 5px;
}

.sidebar-titulo {
    display: flex;
    justify-content: space-between;
}

.caja-chil {
    background-color: #fff;
}

.side-bar {
    position: fixed;
    height: 100%;
    width: 18rem;
    top: 0;
    left: -18rem;
}

.caja-chil-1 {
    background-color: #dcf7f3;
}

.caja-chil-2 {
    background-color: #14888b;
}

@media(min-width:740px) {
    .caja-button {
        display: none;
    }

    .sidebar-titulo-button {
        display: none;
    }

    .side-bar {
        position: static;
    }

    .caja {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
/*cajas de los grid*/
    .caja-chil-1 {
        grid-column: 1 / 2;
        grid-row: 1/2;
        background-color: #14888b;

    }

    .caja-chil-2 {
        grid-column: 1 / 2;
        grid-row: 2/3;
        background-color: #14888b;
        width:auto;
    }

    .caja-chil-3 {
        grid-column: 2 / 4;
        grid-row: 1/3;
    }
}
</style>