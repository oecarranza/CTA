<script>
fetch('pages/1_Portada.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('portada').innerHTML = html;
  });
</script>