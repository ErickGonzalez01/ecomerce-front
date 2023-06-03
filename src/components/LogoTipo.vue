<script>
    export default{
        name:"LogoTipo"
    }

</script>
<template>
    <div class="estilosLogo">
        <img width="30" height="30" src="@/assets/cat.svg"/>
        <h5>CatCorp.com</h5>
    </div>
</template>
<style scoped>
    .estilosLogo h5{
        margin-bottom: 0rem;
    }
    .estilosLogo {
        display: flex;
        flex-direction: row;
        justify-content:start;
        align-items: center;
        gap: 0.2rem;
    }
</style>