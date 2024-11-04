<script lang="ts">  
  import '$lib/CSS/buzon.css';
  let nombre = '';  
  let email = '';  
  let mensaje = '';  
  let nombreInput: HTMLInputElement;  
  let emailInput: HTMLInputElement;  

  function handleSubmit(event: Event) {  
    event.preventDefault();  
    // Aquí puedes manejar el envío del formulario.  
    console.log({ nombre, email, mensaje });  
  }  

  function validateNombre() {  
    if (nombre.length < 4) {  
      nombreInput.setCustomValidity('Necesitas más de 3 letras');  
    } else {  
      nombreInput.setCustomValidity('');  
    }  
  }  

  function validateEmail() {  
    if (!email.includes('@')) {  
      emailInput.setCustomValidity('Ingresa un correo electrónico con @');  
    } else {  
      emailInput.setCustomValidity('');  
    }  
  }  
</script>  

<svelte:head>
  <script src="https://kit.fontawesome.com/eb496ab1a0.js" crossorigin="anonymous"></script>
</svelte:head>

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
      <div class="container-form">  
          <div class="info-form">  
              <h2>Contáctanos</h2>  
              <p>¡Tu opinión es muy importante para nosotros! Te invitamos a que compartas tus pensamientos sobre nuestra página web. Nos encantaría conocer tus sugerencias, ideas e incluso cualquier inconformidad que hayas podido experimentar durante tu navegación. Cada comentario nos ayuda a mejorar y a ofrecerte una mejor experiencia. No dudes en dejar tu comentario; estamos aquí para escucharte y hacer de nuestra plataforma un lugar aún más valioso para ti.</p>  
              <p><i class="fa fa-phone"></i> 319 6170872</p>  
              <p><i class="fa fa-envelope"></i> sportscores24@gmail.com</p>  
              <p><i class="fa fa-map-marked"></i> Medellín, Colombia</p>  
          </div>  
          <form on:submit={handleSubmit} autocomplete="off">  
              <input   
                  type="text"   
                  bind:value={nombre}   
                  placeholder="Tu nombre"   
                  class="campo"   
                  required   
                  minlength="4"   
                  bind:this={nombreInput}   
                  on:input={validateNombre}>  
              <input   
                  type="email"   
                  bind:value={email}   
                  placeholder="Correo electronico"   
                  class="campo"   
                  required   
                  bind:this={emailInput}   
                  on:input={validateEmail}>  
              <textarea   
                  bind:value={mensaje}   
                  placeholder="Tu Mensaje..."   
                  required></textarea>  
              <input type="submit" value="Enviar Mensaje" class="btn-enviar" required>  
          </form>  
      </div>  
  </div>  
</section>