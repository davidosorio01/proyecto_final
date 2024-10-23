<script>
    import '$lib/CSS/buzon.css'
</script>

<svelte:head>
    <script src="https://kit.fontawesome.com/eb496ab1a0.js" crossorigin="anonymous"></script>
</svelte:head>

<div class="container-form">
    <div class="info-form">
        <h2>Contáctanos</h2>
        <p>¡Tu opinión es muy importante para nosotros! Te invitamos a que compartas tus pensamientos sobre nuestra página web. Nos encantaría conocer tus sugerencias, ideas e incluso cualquier inconformidad que hayas podido experimentar durante tu navegación. Cada comentario nos ayuda a mejorar y a ofrecerte una mejor experiencia. No dudes en dejar tu comentario; estamos aquí para escucharte y hacer de nuestra plataforma un lugar aún más valioso para ti.</p>
         <p><i class="fa fa-phone"></i> 319 6170872</p>
         <p><i class="fa fa-envelope"></i> sportscores24@gmail.com</p>
         <p><i class="fa fa-map-marked"></i> Medellín, Colombia</p>
    </div>
    <form action="#" autocomplete="off">
        <input type="text" name="nombre" placeholder="Tu nombre" class="campo" required>
        <input type="emal" name="email" placeholder="Correo electronico" class="campo" required>
        <textarea name="mensaje" placeholder="Tu Mensaje..." required></textarea required>
        <input type="submit" name="enviar" value="Enviar Mensaje" class="btn-enviar" required>
    </form>
</div>