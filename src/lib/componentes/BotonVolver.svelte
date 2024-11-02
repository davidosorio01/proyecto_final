<script>
	import Swal from 'sweetalert2';

	function showAlert() {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si aceptas, volverás a la página principal.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Si el usuario hace clic en 'Aceptar', redirigirá a la página empezar
                window.location.href = "/empezar";
            }
        });
    }
</script>

<a href="javascript:void(0);" on:click={showAlert} class="btn__quote" data-sveltekit-preload-data="tap" data-sveltekit-reload>Volver</a>

<style>
   .btn__quote {
    display: block;
    color: white;
    padding: 8px 40px;
    border: 2.5px solid black;
    border-radius: 8px;
    font-weight: 500;
    position: absolute;
    top: 8px;
    right: 30px; 
    transition: all 300ms;
    text-decoration: none;
}


    .btn__quote:hover {
        color: white;
        background: #e9284e;
    }
</style>