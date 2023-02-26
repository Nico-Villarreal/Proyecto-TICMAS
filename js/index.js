const infoPersonal = document.getElementById("infoPersonal");
const redes = document.getElementById("redes");
const tecnologias = document.getElementById("tecnologias");
const formacionAcademica = document.getElementById("formacionAcademica");
const botonEnviar = document.getElementById("botonEnviar")

//insertando info personal
function divInfoArticle() {
  let divInfo = document.createElement("div");
  divInfo.classList.add("d-flex", "flex-column","justify-content-center","py-5");
  divInfo.innerHTML = `
                            <h1 class="text-center">Info Developer</h1>
                            <div class="d-flex justify-content-center flex-column m-3">
                                <div class="text-center m-3">
                                    <img src="./image/foto.jpg" alt="foto perosonal" class="w-25 rounded-circle border border-dark border-3">
                                </div>
                                <div class="d-flex flex-column justify-content-center">
                                     <h2 class="text-center">FrontEnd Developer</h2>
                                     <h3 class="text-center">Nicolas Villarreal</h3>
                                     <h4 class="text-center">nicolas.ticmas@gmail.com</h4>

                                </div>
                            </div>
                        `;
  infoPersonal.appendChild(divInfo);
}


//llamando a JSON local para pintar las tecnologias adquiridas
async function printTechnologies() {
  const url = "../json/tecnologias.json";

  try {
    const resultado = await fetch(url);
    const respuesta = await resultado.json();
    divTechnologies(respuesta);
  } catch (error) {
    console.log(error);
  }
}

function divTechnologies(technologies) {
  technologies.forEach((datos) => {
    let divTechnologies = document.createElement("div");
    divTechnologies.classList.add("d-flex", "flex-column", "p-4");
    const { tecnologia, img } = datos;
    divTechnologies.innerHTML = `
                            <div class="p-4">
                                <h2 class="text-center">
                                    ${tecnologia}
                                </h2>
                                <div class="d-flex justify-content-center p-5">
                                    <img src="./image/${img}" alt="${tecnologia}" class="rounded-circle border border-dark border-4 w-50">
                                </div>
                            </div>
                        `;
    tecnologias.appendChild(divTechnologies);
  });
}

function printRedes() {
  let divRedes = document.createElement("div");
  divRedes.classList.add("d-flex", "justify-content-evenly", "p-3");
  divRedes.innerHTML = `
                        <img src="./image/facebook.png" alt="facebook" class="m-3 rounded-circle border border-2 border-dark"/>
                        <img src="./image/linkedin.png" alt="linkedin" class="m-3 rounded-circle border border-2 border-dark"/>
                        <img src="./image/github.png" alt="github" class="m-3 rounded-circle border border-2 border-dark"/>
                        <img src="./image/instagram.png" alt="instagram" class="m-3 rounded-circle border border-2 border-dark"/>
                        `;
  redes.appendChild(divRedes);
}

//llamando JSON local para pintar la formacion academica
async function printFormacion() {
    const url = "../json/formacion.json";
  
    try {
      const resultado = await fetch(url);
      const respuesta = await resultado.json();
      divFormacion(respuesta);
    } catch (error) {
      console.log(error);
    }
  }

function divFormacion(formacion) {
    formacion.forEach((datos) => {
        let divFormacion = document.createElement("div");
        divFormacion.classList.add("d-flex","justify-content-center","pt-4");
        const { name, img } = datos;
        divFormacion.innerHTML = `
                                <div class="d-flex">
                                    <div class="card border-dark" style="width: 17rem;">
                                        <img src="./image/${img}" class="card-img-top" alt="${name}">
                                        <div class="card-body">
                                            <p class="card-text d-flex justify-content-center align-items-center">${name}</p>
                                        </div>
                                    </div>
                                </div>
                                `;
        formacionAcademica.appendChild(divFormacion);
    })
}


botonEnviar.addEventListener("click", () =>{
    swal("Datos Enviados", "Me contactare a la Brevedad", "success");
})

//llamando funciones
divInfoArticle();
printTechnologies();
printRedes();
printFormacion();
