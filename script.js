function goToSecond() {
    window.location.href = 'second.html';
}

let compras = [];
let totalesPorFranquicia = {
    Visa: 0,
    MasterCard: 0,
    Diners: 0,
    CMR: 0,
    Scotiabank: 0
};

// Función para volver a la pantalla de bienvenida al salir
function salir() {
    alert("Gracias por usar nuestra banca virtual");
    window.location.href = 'index.html';
}

function mostrarFormulario() {
    document.getElementById('formulario').style.display = 'block';
    document.getElementById('registro-compras').style.display = 'none';
    document.getElementById('compras-franquicia').style.display = 'none';
}

function mostrarCompras() {
    let comprasHTML = '<h2>Historial de compras</h2>';
    compras.forEach((compra, index) => {
        comprasHTML += `
            <div>
                <p>ID : ${compra.id}</p>
                <p>Nombre : ${compra.nombre}</p>
                <p>Apellido : ${compra.apellido}</p>
                <p>Número de Tarjeta : ${compra.tarjeta}</p>
                <p>Franquicia : ${compra.franquicia}</p>
                <p>Monto : $${compra.monto.toFixed(2)}</p>
                <hr>
            </div>`;
    });
    document.getElementById('registro-compras').innerHTML = comprasHTML;
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('registro-compras').style.display = 'block';
    document.getElementById('compras-franquicia').style.display = 'none';
}

function mostrarFranquicias() {
    let franquiciaHTML = `
        <h2>Total de Compras por Franquicia</h2>
        <p>Visa: $${totalesPorFranquicia.Visa.toFixed(2)}</p>
        <p>MasterCard: $${totalesPorFranquicia.MasterCard.toFixed(2)}</p>
        <p>Diners: $${totalesPorFranquicia.Diners.toFixed(2)}</p>
        <p>CMR: $${totalesPorFranquicia.CMR.toFixed(2)}</p>
        <p>Scotiabank: $${totalesPorFranquicia.Scotiabank.toFixed(2)}</p>
    `;
    document.getElementById('compras-franquicia').innerHTML = franquiciaHTML;
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('registro-compras').style.display = 'none';
    document.getElementById('compras-franquicia').style.display = 'block';
}

function registrarCompra() {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const tarjeta = document.getElementById('tarjeta').value;
    const franquicia = document.getElementById('franquicia').value;
    const monto = parseFloat(document.getElementById('monto').value);

    // Crear un objeto compra
    let compra = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        tarjeta: tarjeta,
        franquicia: franquicia,
        monto: monto
    };

    // Agregar compra a la lista
    compras.push(compra);

    // Sumar al total de la franquicia
    totalesPorFranquicia[franquicia] += monto;

    alert("Compra registrada con éxito!");

    // Limpiar campos del formulario
    document.getElementById('id').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('tarjeta').value = '';
    document.getElementById('monto').value = '';
    document.getElementById('franquicia').selectedIndex = 0;
}
