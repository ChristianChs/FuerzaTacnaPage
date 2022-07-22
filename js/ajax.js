document.querySelector('#public').addEventListener('click', traerDatos);
function myFunction(idButton) {
    var publicaciones = document.getElementById('publicaciones');
    var encuestas = document.getElementById('encuestas');
    var estadisticas = document.getElementById('basedatos');
  
  
  
   switch(idButton) {
   case 1:
  
            publicaciones.style.display = 'block';
            encuestas.style.display = 'none';
            estadisticas.style.display = 'none';
      break;
  
   case 2:
            publicaciones.style.display = 'none';
            encuestas.style.display = 'block';
            estadisticas.style.display = 'none';
      break;
  
   case 3:
            publicaciones.style.display = 'none';
            encuestas.style.display = 'none';
            estadisticas.style.display = 'block';
      break;
  
  default:
            alert("hay un problema: No existe el producto.")
          }
  
     }
function inicio(){
    var publicaciones = document.getElementById('publicaciones');
    var encuestas = document.getElementById('encuestas');
    var estadisticas = document.getElementById('estadisticas');
    var login = document.getElementById('basedatos');

    publicaciones.style.display = 'none';
    encuestas.style.display = 'none';
    estadisticas.style.display = 'none';
    login.style.display = 'none';
}

function traerDatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', './data/FT_22-07-22_posts.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (let item of data) {
                res.innerHTML += `
                <tr>
                    <td>${item.post_id}</td>
                    <td>${item.time}</td>
                    <td>${item.reaction_count}</td>
                    <td>${item.comments}</td>
                    <td>${item.shares}</td>
                    <td><button class="waves-effect waves-light btn" onclick="location.href='${item.post_url}';" >Acceder</button></td>
                </tr>
                `
            }
            console.log(data)
        }
    }
}