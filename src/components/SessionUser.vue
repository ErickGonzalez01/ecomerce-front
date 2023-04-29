<template>
    <div>
        <div v-if="status == true">
            <div class="mb-2">
                <b-avatar icon="people-fill"></b-avatar>
            </div>

        </div>
        <div class="sesscion" v-else>
            <button class="btn btn-primary" >Iniciar Sesion</button>
            <button>Registrese</button>
        </div>
        <div>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SessionUser",
    data: () => {
        return {

        }
    },
    props: {
        name: {
            type: String,
            required: false
        },
        token: {
            type: String,
            required: false
        },
        status: {
            type: Boolean,
            required: true
        }
    }
}

</script>
<style></style>