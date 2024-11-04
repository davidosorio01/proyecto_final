<script>
    import '$lib/CSS/olvidar_contraseña.css';
</script>
<section>
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="box">
        <div class="square" style="--i:0;"></div>
        <div class="square" style="--i:1;"></div>
        <div class="square" style="--i:2;"></div>
        <div class="square" style="--i:3;"></div>
        <div class="square" style="--i:4;"></div>
         <div class="container">
             <div class="form">
                 <h2>Recuperar contraseña</h2>
                 <form action="?/recuperar">
                     <div class="inputBox">
                         <input name="email" type="text" placeholder="Correo electronico" required>
                     </div>
                     <div class="inputBox">
                         <input type="submit" value="Enviar" />
                     </div>
                     <p class="forget">
                         ¿Ya tienes una cuenta? <a href="/" data-sveltekit-preload-data="tap" data-sveltekit-reload>Iniciar sesión</a>
                     </p>
                 </form>
             </div>
         </div>
    </div>
</section>