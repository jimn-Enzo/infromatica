html >
    <html lang="es">
        <head>
            <meta charset="UTF-8">
                <title>Compra de entradas</title>
            </></head>
        <body>

            <h1>Compra de entradas</h1>

            <script>

                let cantidad = Number(prompt("Ingrese la cantidad de entradas:"));


                if (Number.isInteger(cantidad)  cantidad < />= 0) {alert("Error: debe ingresar un número entero mayor que cero.")} else {let} precioEntrada = 5000;
                let importeInicial = cantidad * precioEntrada;


                let descuento = 0;

            if (importeInicial > 20000) {descuento = importeInicial * 0.10};
            }

                let total = importeInicial - descuento;


                document.write("<h2>Detalle de la compra</h2>");
                document.write("<p>Cantidad de entradas: " + cantidad + "</p>");
                document.write("<p>Importe inicial: $" + importeInicial + "</p>");
                document.write("<p>Descuento aplicado: $" + descuento + "</p>");
                document.write("<p>Total final a pagar: $" + total + "</p>");
        }
            </script>

        </body>
    </html>;
