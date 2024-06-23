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
      piscina: false,
      estacionamiento:true,
      lavanderia:true,
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
      piscina:true ,
      estacionamiento:true,
      lavanderia:true,
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
      piscina: false,
      estacionamiento:true,
      lavanderia:false,
      
    },
    {
        nombre: "Departamento dos pisos con vista a la montaña",
        descripcion:"Departamento de 80m2 ubicado a pasos del metro y de centros comerciales, family friendly",
        src: "https://i0.wp.com/chocale.cl/wp-content/uploads/2019/03/loft-departamento.jpg?fit=1000%2C666&ssl=1",
        ubicacion: "Camilo Escalona 7200, sprinfield CA 75124",
        habitaciones: " 1 habitaciones",
        baños: " 1 baños",
        costo: "1.400",
        smoke: true,
        pets: false,
        piscina: false ,
        estacionamiento: true,
        lavanderia:true,
        
      },
      {
        nombre: "Acogedora casa en barrio familiar",
        descripcion:"Acogedora casa ubicada en un barrio familiar, a pasos de parques, supermercados y colegios",
        src: "https://http2.mlstatic.com/D_NQ_NP_839640-MLC53605509708_022023-O.webp",
        ubicacion: "Las Bellotas de la caridad, Jubilo CA 784235",
        habitaciones: " 3 habitaciones",
        baños: " 2 baños",
        costo: "3.500",
        smoke: false,
        pets: true,
        piscina: false,
        estacionamiento:true,
        lavanderia:true,
        
      },
      {
        nombre: "Acogedora cabaña frente al lago Calafquen",
        descripcion:"Cabaña rustica ubicada frente al lago Calafquen, ideal para desconectarse y descanzar",
        src: "https://hips.hearstapps.com/hmg-prod/images/caban-a-disen-o-actual-1535369712.jpg?crop=0.728xw:0.814xh;0.116xw,0.186xh&resize=768:*",
        ubicacion: "camino a Coñaripe km 13, CA 362498",
        habitaciones: " 1 habitaciones",
        baños: " 1 baño",
        costo: "1.800",
        smoke: true,
        pets: true,
        piscina:false ,
        estacionamiento:true,
        lavanderia:false,
        
      },
  ];
  
  const alquilerContainer = document.querySelector("#alquileres");
  var alquil = "";
  
  for (let alquiler of propiedadesEnAlquiler) {
    alquil += `<div class="col-md-4 mb-4">
              <div class="card h-100"  >
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
                            alquiler.piscina
                            ? `<p class="text-secondary"><i class="fa-solid fa-person-swimming"></i>Piscina disponible</p>`
                            : `<p class="text-secondary"></p>`
                        }
                        ${
                            alquiler.estacionamiento
                            ? ` <p class="text-secondary"> <i class="fa-solid fa-square-parking"></i> Estacionamiento disponible </p>`
                            : `<p class="text-secondary"></p>`
                            
                        }

                        ${
                            alquiler.lavanderia
                            ? ` <p class="text-secondary"> <i class="fa-solid fa-jug-detergent"></i> Lavanderia disponible </p>`
                            : `<p class="text-secondary"></p>`
                            
                        }
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
                         <div class="card-footer">
                          <a href="#" class="btn btn-dark " id="button">Contactar</a>
                         </div>

                      </div> 
                      </div>    
                      </div>`;
  }
  
  alquilerContainer.innerHTML = alquil