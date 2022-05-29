const nombre = document.getElementById('#nombre');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');
const categoria = document.querySelector('#categoria');
const cantidad = document.querySelector('#cantidad');

const form = document.getElementById('form');



form.addEventListener('submit' , function(event){
    event.preventDefault();
    let total = (cantidad.value * categoria.value * 200) / 100;
    console.log(total);
    document.getElementById('total').textContent = total;

});

document.getElementById("btnBorrar").addEventListener("click", function(event){
    form.reset();
});