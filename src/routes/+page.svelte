<script>
    let btnSignUp 
    let signIn = false
</script>

<div class="container" class:toggle={signIn}>
    <div class="container-form">
        <form class="sign-in" action="Menu1.html">
            <h2>Iniciar Sesión</h2>
                <div class="social-networks">
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-google"></ion-icon>
                </div>  
            <span>Ingresa tus datos para comenzar</span>
                <div class="container-input">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="text" placeholder="Email" required>
                </div>
                <div class="container-input">
                    <ion-icon name="tablet-landscape-outline"></ion-icon>
                    <input type="text" placeholder="T.I" required>
                </div>
                <div class="container-input">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" placeholder="Password" required>
                </div>
                <a href="l">¿Olvidaste tu contraseña?</a>
            <button  class="button">INICIAR SESIÓN</button>
        </form>
    </div>

    <div class="container-form" class:toggle={signIn} >
        <form class="sign-up">
            <h2>¿No tienes una cuenta?¡Registrate!</h2>
                <div class="social-networks">
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-google"></ion-icon>
                </div>
            <span>Ingresa los siguientes datos para registrarte</span>
            <div class="container-input">
                <ion-icon name="person-outline"></ion-icon>
                <input type="text" placeholder="Nombre" required>
            </div>
            <div class="container-input">
                <ion-icon name="person-outline"></ion-icon>
                <input type="text" placeholder="Apellidos" required>
            </div>
            <div class="container-input">
                <ion-icon name="tablet-landscape-outline"></ion-icon>
                <input type="text" placeholder="T.I" required>
            </div>
            <div class="container-input">
                <ion-icon name="calendar"></ion-icon>
                <input type="date" placeholder="Fecha de nacimiento" required>
            </div>
            <div class="container-input">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="text" placeholder="Email" required>
            </div>
            <div class="container-input">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" placeholder="Password" required>
            </div>
            <button class="button" >REGISTRARSE</button>
        </form>
    </div>

    <div class="container-welcome">
        <div class="welcome-sign-up welcome">
            <h3>¡Bienvenido!</h3>
            <p>Ingrese sus datos personales para continuar y poder disfrutar de nuestros servicios</p>
            <button onclick={()=> signIn = !signIn} bind:this={btnSignUp} class="button" id="btn-sign-up">Registrarse</button>
        </div>
        <div class="welcome-sign-in welcome">
            <h3>¡Hola!</h3>
            <p>Regístrate con tus datos personales para utilizar todos los beneficiso de nuestro sitio</p>
            <button onclick={()=> signIn = !signIn} bind:this={btnSignUp} class="button" id="btn-sign-in" >Iniciar Sesion</button>
        </div>
    </div>
</div>

<style>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    background-color: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 10px rgb(0, 0,0,0.3)
}
.container-form{
    width: 100%;
    overflow: hidden;
}
.container-form form{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s ease-in;
}
.container-form h2{
    font-size: 30px;
    margin-bottom: 20px;
}
.social-networks{
    display: flex;
    gap: 12px;
    margin-bottom: 25px;
}
.social-networks ion-icon{
    border: 1px solid #C9CCCB;
    border-radius: 6px;
    padding: 8px;
    cursor: pointer;
}
.container-form span{
    font-size: 18px;
    margin-bottom: 15px;
}
.container-input{
    width: 300px;
    height: 40px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 0 15px;
    border-radius: 8px;
    background-color: #EEEEEE;
}
.container-input input{
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    background-color: inherit;
}
.container-form a{
    color: black;
    font-size:  17px;
    margin-bottom: 20px;
    margin-top: 10px;
}
.button{
    width: 170px;
    height: 45px;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;  
    background-color: #124076;  
    color: white;
}
/*Animation form*/

.sign-up{
    transform: translateX(-100%);
}
.container.toggle .sign-in{
    transform: translateX(100%);
}
.container.toggle .sign-up{
    transform: translateX(0);
}

/*Welcome*/
.container-welcome{
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    transform: translateX(100%);
    background-image: url(Champions.webp);
    transition: transform 0.5s ease-in-out, border-radius 0.5s ease-in-out;
    overflow: hidden;
    border-radius: 50% 0 0 50%;
}
.container.toggle .container-welcome{
    transform: translateX(0);
    border-radius: 0 50% 50% 0;
    background-image: url(Atlanta.webp);
}
.container-welcome .welcome{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 0 50px;
    color: white;
    transition: transform 0.5s ease-in-out;
}
.welcome-sign-in{
    transform: translateX(100%);
}
.container-welcome h3{
    font-size: 40px;
}
.container-welcome p{
    font-size: 18px;
    text-align: center;
}
.container-welcome .button{
    border: 2px solid white;
    background-color: transparent;
}

.container.toggle .welcome-sign-in{
    transform: translateX(0);
}
.container.toggle .welcome-sign-up{
    transform: translateX(-100%);
}
</style>