let productosTotales = 0;
let pedido = {
                combo1:0,
                combo2:0,
                combo3:0,
                combo4:0,
              };

function addCombo1(){
  if (cantCombo1.value!=0) {
    cantCombo1.value--;
  }
  if (cantCombo1.value == 0) {
    pedirCombo1.classList.add('locked');
  }
}

function restCombo1(){
  pedirCombo1.classList.remove('locked');
  cantCombo1.value++;
}

// ===============================0

function addCombo2(){
  if (cantCombo2.value!=0) {
    cantCombo2.value--;
  }
  if (cantCombo2.value == 0) {
    pedirCombo2.classList.add('locked');
  }
}

function restCombo2(){
  pedirCombo2.classList.remove('locked');
  cantCombo2.value++;
}

//======================================
function addCombo3(){
  if (cantCombo3.value!=0) {
    cantCombo3.value--;
  }
  if (cantCombo3.value == 0) {
    pedirCombo3.classList.add('locked');
  }
}

function restCombo3(){
  pedirCombo3.classList.remove('locked');
  cantCombo3.value++;
}

function addCarrito(){
  //mostramos notif
  notificacion.style.display="block";
  pedido.combo1 = cantCombo1.value;
  pedido.combo2 = cantCombo2.value;
  pedido.combo3 = cantCombo3.value;
  localStorage.setItem("pedido",JSON.stringify(pedido));
  //pedido.combo4 = cantCombo4.value;
  //pedido.combo5 = cantCombo5.value;
  showToast();
  
}

function showToast(){
  toast.style.bottom = "30px";
  toast.innerHTML = "¡Agregado al carrito de compra!"
  setTimeout(function(){toast.style.bottom = "-300px";}, 4000);
}

function verCarrito(){
  window.location.assign("carrito.html");
}

function regresar(){
  window.location.assign("index.html");
}

function loadPedido(){
  document.querySelector('.lugar').innerHTML = localStorage.getItem('lugar');
  pedido = JSON.parse(localStorage.getItem("pedido"));
  console.log(pedido)
  productos = document.querySelector(".productos");
  sub1 = pedido.combo1*200;
  sub2 = pedido.combo2*100;
  sub3 = pedido.combo3*150;
  if (pedido.combo1 != 0) {
    productos.innerHTML += "<div class='producto'>"+
                            '<div class="nombre">Combo 1</div>'+
                            '<div class="cantidad">x'+pedido.combo1+'</div>'+
                            '<div class="subtotal">$'+sub1+'</div>'+
                          '</div>'
  }
  if (pedido.combo2 != 0) {
     productos.innerHTML += "<div class='producto'>"+
                            '<div class="nombre">Combo 2</div>'+
                            '<div class="cantidad">x'+pedido.combo2+'</div>'+
                            '<div class="subtotal">$'+sub2+'</div>'+
                          '</div>'
  }
  if (pedido.combo3 != 0) {
     productos.innerHTML += "<div class='producto'>"+
                            '<div class="nombre">Combo 3</div>'+
                            '<div class="cantidad">x'+pedido.combo3+'</div>'+
                            '<div class="subtotal">$'+sub3+'</div>'+
                          '</div>'
  }

  total.innerHTML = "$" + parseInt(sub1 + sub2 + sub3);
  
}

function hacerPedido(){
  window.location.assign("confirmacion.html")
}

function cancelarPedido(){
  pedido = {
                combo1:0,
                combo2:0,
                combo3:0,
                combo4:0,
              };
  localStorage.setItem("pedido",JSON.stringify(pedido));
  window.location.assign("index.html");
}

function populateLugares(){
  for(i=1; i<101; i++){
    lugar.innerHTML += "<option>" + i + "</option>";
  }
}

function guardarLugar(){
  localStorage.setItem("lugar", lugar.value);
  toast.style.bottom = "30px";
  toast.innerHTML = "Lugar cambiado exitosamente"
  setTimeout(function(){toast.style.bottom = "-300px";}, 4000);
}