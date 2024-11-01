<script lang="ts">  
    export let form: { invalid?: boolean; credentials?: boolean } = {}; // Define las propiedades esperadas  
    let btnSignUp;  
    let signIn = false;  
    import '$lib/CSS/inicio_sesion.css';  
    import Swal from 'sweetalert2';  

    // Función para mostrar el modal  
    function showWelcomeModal() {  
        // Verificar si el modal ya fue mostrado  
        if (!localStorage.getItem('modalShown')) {  
            Swal.fire({  
                title: "¡Importante!",  
                text: 'Debes registrarte (o iniciar sesión si ya tienes una cuenta) para acceder a Sport Score.',  
                icon: 'warning',  
                confirmButtonText: 'Aceptar'  
            }).then(() => {  
                // Al confirmar, almacena en localStorage que se ha visto el modal  
                localStorage.setItem('modalShown', 'true');  
            });  
        }  
    }  
    // Llamar a la función al iniciar el componente (cuando se monta)  
    showWelcomeModal();  
</script>  

<svelte:head>  
    <script  
        type="module"  
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"  
    ></script>  
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>  
</svelte:head>  

<div  
    class="container"  
    class:toggle={signIn}  
    data-sveltekit-preload-data="tap"  
    data-sveltekit-reload  
>  
    <div class="container-form">  
        <form class="sign-in" action="?/login" method="POST">  
            <h2>Iniciar Sesión</h2>  
            <div class="social-networks">  
                <ion-icon name="logo-facebook"></ion-icon>  
                <ion-icon name="logo-instagram"></ion-icon>  
                <ion-icon name="logo-google"></ion-icon>  
            </div>  
            {#if form?.invalid}  
                <p class="error">Se requiere nombre de usuario y contraseña</p>  
            {/if}  

            {#if form?.credentials}  
                <p class="error">Usuario o contraseña invalido</p>  
            {/if}  
            <span>Ingresa tus datos para comenzar</span>  
            <div class="container-input">  
                <ion-icon name="mail-outline"></ion-icon>  
                <input name="email" type="text" placeholder="Email" required />  
            </div>  
            <div class="container-input">  
                <ion-icon name="lock-closed-outline"></ion-icon>  
                <input name="password" type="password" placeholder="Password" required />  
            </div>  
            <a href="/olvidar_contraseña">¿Olvidaste tu contraseña?</a>  
            
            <button class="button">INICIAR SESIÓN</button>  
        </form>  
    </div>  

    <div class="container-form" class:toggle={signIn} data-sveltekit-preload-data="tap">  
        <form class="sign-up" action="?/register" method="POST">  
            <h2>¿No tienes una cuenta?¡Registrate!</h2>  
            <div class="social-networks">  
                <ion-icon name="logo-facebook"></ion-icon>  
                <ion-icon name="logo-instagram"></ion-icon>  
                <ion-icon name="logo-google"></ion-icon>  
            </div>  
            <span>Ingresa los siguientes datos para registrarte</span>  
            <div class="container-input">  
                <ion-icon name="person-outline"></ion-icon>  
                <input name="nombre" type="text" placeholder="Nombre" required />  
            </div>  
            <div class="container-input">  
                <ion-icon name="person-outline"></ion-icon>  
                <input name="apellido" type="text" placeholder="Apellidos" required />  
            </div>  
            <div class="container-input">  
                <ion-icon name="calendar"></ion-icon>  
                <input name="nacimiento" type="date" placeholder="Fecha de nacimiento" required />  
            </div>  
            <div class="container-input">  
                <ion-icon name="mail-outline"></ion-icon>  
                <input name="email" type="text" placeholder="Email" required />  
            </div>  
            <div class="container-input">  
                <ion-icon name="lock-closed-outline"></ion-icon>  
                <input name="password" type="password" placeholder="Password" required />  
            </div>  
            <button class="button">REGISTRARSE</button>  
        </form>  
    </div>  

    <div class="container-welcome">  
        <div class="welcome-sign-up welcome">  
            <h3>¡Bienvenido!</h3>  
            <p>Ingrese sus datos personales para continuar y poder disfrutar de nuestros servicios</p>  
            <button  
                onclick={() => (signIn = !signIn)}  
                bind:this={btnSignUp}  
                class="button"  
                id="btn-sign-up">Registrarse</button  
            >  
        </div>  
        <div class="welcome-sign-in welcome">  
            <h3>¡Hola!</h3>  
            <p>Regístrate con tus datos personales para utilizar todos los beneficiso de nuestro sitio</p>  
            <button  
                onclick={() => (signIn = !signIn)}  
                bind:this={btnSignUp}  
                class="button"  
                id="btn-sign-in">Iniciar Sesion</button  
            >  
        </div>  
    </div>  
</div>