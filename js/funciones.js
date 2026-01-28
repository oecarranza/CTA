function cargarPag(ruta, contenedorId, callback) {
  fetch(ruta)
    .then(res => {
      if (!res.ok) {
        throw new Error('No se pudo cargar ' + ruta);
      }
      return res.text();
    })
    .then(html => {
      const contenedor = document.getElementById(contenedorId);
      if (!contenedor) {
        console.error('No existe el contenedor:', contenedorId);
        return;
      }
      contenedor.innerHTML = html;
      if (callback) callback();
    })
    .catch(err => console.error(err));
}


function cargarPagina(ruta, contenedorId) {
  document.addEventListener('DOMContentLoaded', function () {
    cargarPag(ruta, contenedorId, function () {
      $('.flipbook').turn();
    });
  });
}


  /*
        <script>
          cargarPagina('Paginas\1_Portada.html', 'portada');
        </script>
        */
