const propiedadesEnVenta = [

  {
    nombre: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    ubicacion: "123 Luxury av, Ricardo Goycochea, CA 45678",
    habitaciones: "4 habitaciones",
    baños: "4 baños",
    costo: "5.000",
    smoke: false,
    pets: false,
  },

  {
    nombre: "Apartamento acogedor en la montaña",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    ubicacion: "789 carretera Austral, CA 23456",
    habitaciones: "2 habitaciones",
    baños: "1 baño",
    costo: "1.200",
    smoke: true,
    pets: true,
  },

  {
    nombre: "Penthouse de lujo con terraza panorámica",
    descripcion:" Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    ubicacion: "km 45 Ruta 56 ,Caburga, CA 56789",
    habitaciones: "8 habitaciones",
    baños: "9 baños",
    costo: "4.500",
    smoke: true,
    pets: true,
  }
];

const ventaContainer = document.querySelector("#propiedades");
var vent = "";

for (let venta of propiedadesEnVenta) {
  vent += `<div class="col-md-4 mb-4">
            <div class="card">
              <img src = " ${venta.src} "
                    class="card-img-top"
                    alt="Imagen del departamento" />
                    <div class="card-body">
                        <h5 class="card-title">
                            ${venta.nombre}
                        </h5>
                        <p class="card-text">
                            ${venta.descripcion}
                        </p>
                        <p>
                            <i class="fas fa-map-marker-alt" ></i>
                        ${venta.ubicacion} </p>
                        <p>
                            <i class="fas fa-bed"></i> ${venta.habitaciones} |
                            <i class="fas fa-bath"></i>  ${venta.baños}
                        </p>
                        <p><i class="fas fa-dollar-sign"></i>${venta.costo}</p>
                        ${
                          venta.smoke
                            ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                            : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>`
                        }
                        ${
                          venta.pets
                            ? ` <p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas </p>`
                            : `<p class="text-danger"><i class="fa-solid fa-ban"></i>No se permiten mascotas </p>`
                        }
                    </div> 
                    </div>    
                    </div>`;
}

ventaContainer.innerHTML = vent



const propiedadesEnAlquiler = [
    
  {
    nombre: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    ubicacion: "123 Curilahue, Sprinhills, CA 91234",
    habitaciones: "2 habitaciones",
    baños: "2 baños",
    costo: "2.000",
    smoke: false,
    pets: true,
  },

  {
    nombre: "Apartamento luminoso con vista al mar",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ubicacion: "456 Ocean Av,Dichato, CA 56789",
    habitaciones: "3 habitaciones",
    baños: "3 baño",
    costo: "2.500",
    smoke: true,
    pets: true,
  },

  {
    nombre: " Condominio moderno en zona residencial",
    descripcion:"Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    ubicacion: "1654 Las tortolas, San Pedro de la Paz, CA 91234",
    habitaciones: "2 habitaciones",
    baños: "2 baños",
    costo: "2.200",
    smoke: false,
    pets: false,
  }
];

const alquilerContainer = document.querySelector("#alquileres");
var alquil = "";

for (let alquiler of propiedadesEnAlquiler) {
  alquil += `<div class="col-md-4 mb-4">
            <div class="card">
              <img src = " ${alquiler.src} "
                    class="card-img-top"
                    alt="Imagen del departamento" />
                    <div class="card-body">
                        <h5 class="card-title">
                            ${alquiler.nombre}
                        </h5>
                        <p class="card-text">
                            ${alquiler.descripcion}
                        </p>
                        <p>
                            <i class="fas fa-map-marker-alt" ></i>
                        ${alquiler.ubicacion} </p>
                        <p>
                            <i class="fas fa-bed"></i> ${alquiler.habitaciones} |
                            <i class="fas fa-bath"></i>  ${alquiler.baños}
                        </p>
                        <p><i class="fas fa-dollar-sign"></i>${alquiler.costo}</p>
                        ${
                            alquiler.smoke
                            ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                            : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>`
                        }
                        ${
                            alquiler.pets
                            ? ` <p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas </p>`
                            : `<p class="text-danger"><i class="fa-solid fa-ban"></i>No se permiten mascotas </p>`
                        }
                    </div> 
                    </div>    
                    </div>`;
}

alquilerContainer.innerHTML = alquil
