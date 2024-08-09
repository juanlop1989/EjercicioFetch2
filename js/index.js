fetch("https://api.escuelajs.co/api/v1/categories")
    .then(Response => Response.json())
    .then(data =>{

        data.sort((a, b) => a.name.localeCompare(b.name));

        let tabla = "<tr><th>Nombre</th><th>Imagen</th></tr>"
        let item = 1

        for (let categoria of data){
            tabla += `<tr><td>${categoria.name}</td>
                        <td><img src="${categoria.image}" alt="Avatar" width="80"></td></tr>`
        }
        document.getElementById("tblcategories").innerHTML = tabla
    })