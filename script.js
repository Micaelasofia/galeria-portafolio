const grid = new Muuri ('.grid' , {
    layout: {
        rounding: false
    }

});

window.addEventListener('load' , () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

const enlaces = document.querySelectorAll('#categorias a');

enlaces.forEach((elemento) => {
  elemento.addEventListener('click', (event) => {
    event.preventDefault();
    enlaces.forEach((enlace) => enlace.classList.remove('activo')); 
    event.target.classList.add('activo');

    const categoria = event.target.innerHTML.toLowerCase();
    categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);

   });

});


    document.querySelector('#busqueda').addEventListener('input', (event) => {
    const busqueda = event.target.value;
    grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );


});

const overlay = document.getElementById('overlay');
document.querySelectorAll('.grid .item img').forEach((elemento) => {
    elemento.addEventListener('click', () => {
        const ruta = elemento.getAttribute('src');
        const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

        overlay.classList.add('activo');
        document.querySelector('#overlay img').src = ruta;
		document.querySelector('#overlay .descripcion').innerHTML = descripcion;
      

   });

 });
 document.querySelector('#boton-cerrar').addEventListener('click', () => {
    overlay.classList.remove('activo');
});

overlay.addEventListener('click', (evento) => {
    evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
  });
  
});



    