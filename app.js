
const boton1 = document.querySelector("#boton1");

const boton2 = document.querySelector("#boton2");
boton1.addEventListener('click', function(e){
    e.preventDefault();
    //lamado ajax
    //creamos la instancia
    const xhr = new XMLHttpRequest();
    //creamos la conexion
    xhr.open('GET','empleado.json', true);

    xhr.onload = function(){
        //condicion de q sea correcto
        if(this.status === 200){
           
            mostrarDom(JSON.parse(this.responseText));
            
        }
    }
    xhr.send();
});

//llamar a varios registros de un json
boton2.addEventListener('click', function(e){
    e.preventDefault();
    //lamado ajax
    //creamos la instancia
    const xhr = new XMLHttpRequest();
    //creamos la conexion
    xhr.open('GET','empleados.json', true);

    xhr.onload = function(){
        //condicion de q sea correcto
        if(this.status === 200){
           
            mostrarEmpleados(JSON.parse(this.responseText));
            
        }
    }
    xhr.send();
});

function mostrarDom(datos){
    const empleado = document.querySelector("#empleado");
    const empleadoText= document.createElement('ul');
    empleadoText.innerHTML = `
        <li>Id:         ${datos.id}     </li>
        <li>Nombre:     ${datos.nombre} </li>
        <li>Empresa:    ${datos.empresa}</li>
        <li>Ocupación:  ${datos.trabajo}</li>   
    `;
    empleado.appendChild(empleadoText);


}


function mostrarEmpleados(datos){
    const empleado = document.querySelector("#empleados");
    const empleadoText= document.createElement('ul');
  
    datos.forEach(function(dato) {
        const empleadoText= document.createElement('ul');
        console.log(dato.nombre);
        empleadoText.innerHTML = `
        <li>Id:         ${dato.id}     </li>
        <li>Nombre:     ${dato.nombre} </li>
        <li>Empresa:    ${dato.empresa}</li>
        <li>Ocupación:  ${dato.trabajo}</li>   
    `;
    empleado.appendChild(empleadoText);
    });
    
    


}