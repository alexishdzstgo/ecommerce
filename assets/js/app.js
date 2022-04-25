const btnCar = document.querySelector('.nav__shop')
const btnCarClose = document.querySelector('.cart')
const  cartShow = document.getElementById('cart')
let productosCarrito = []

btnCar.addEventListener('click',() => {
    cartShow.classList.add("show-cart");
})

btnCarClose.addEventListener('click',() => {
    cartShow.classList.remove("show-cart");
})

const contenedorCarrito = document.querySelector('.cart__container')

const listaProductos = document.querySelector('#products__content')

cargarEventListeners();
function cargarEventListeners(){
    //cuando das click a un curso "+"
    listaProductos.addEventListener('click', agregarCurso)
}

function agregarCurso(e){
    if(e.target.classList.contains('bx-plus')){
        const productoSeleccionado = e.target.parentElement.parentElement.parentElement
        leerDatosProducto(productoSeleccionado)
    }
}
// leer el contenido del HTML al que le dimos click y extraer la info del curso
function leerDatosProducto(producto){
//console.log(producto)
// Crear un objeto con el contenido del productoactual
const infoProducto = {
    imagen: producto.querySelector('img').src,
    titulo: producto.querySelector('h3').textContent,
    stock: producto.querySelector('.product__quantity').textContent,
    precio: producto.querySelector('.product__price').textContent,
    id: producto.querySelector('button').getAttribute('data-id'),
    cantidad: 1
}
//agregar productos al arreglo de carrito
productosCarrito = [...productosCarrito, infoProducto]
console.log(productosCarrito)
carritoHTML()
}
//muestra el carrito de compras en el html
function carritoHTML(){
    // Limpiar el HTML
    limpiarHtml();
    //Recorre el carrito y genera el html
    productosCarrito.forEach( (articulo)=>{
        const row = document.createElement('div');
        row.innerHTML = `

          <article class="cart__card">
          <div class="cart__box">
            <img src="${articulo.imagen}" alt="Shirts" class="cart__img">
          </div>
  
          <div class="cart__details">
            <h3 class="cart__title">${articulo.titulo}</h3>
            <span class="cart__stock"> ${articulo.stock}| <span class="cart__price">${articulo.precio}</span></span>
            <span class="cart__subtotal">
              Subtotal: $144.00
            </span>
  
            <div class="cart__amount">
              <div class="cart__amount-content">
                <span class="cart__amount-box minus" data-id="2">
                <i class="bx bx-minus"></i>
                </span>
  
                <span class="cart__amount-number">6 units</span>
  
                <span class="cart__amount-box plus" data-id="2">
                <i class="bx bx-plus"></i>
                </span>
              </div>
  
              <i class="bx bx-trash-alt cart__amount-trash" data-id="2"></i>
            </div>
          </div>
        </article>
        `
        //agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)
    })
}
// Elimina los cursos anteriores
function limpiarHtml(){
    //forma lenta
    //contenedorCarrito.innerHTML = ''
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}