# proyecto

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### ARCHIVO "index.php", el cual debe colocarse en la infraestructura WAMP o XAMP (donde por lo general se colocan los proyectos - carpeta "www")

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos con usuario, contraseña y nombre de la BD
$servidor = "localhost";
$usuario = "root";
$contrasenia = "123";
$nombreBaseDatos = "maquinas";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);

// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])) {
    $sqlMaquinas = mysqli_query($conexionBD, "SELECT * FROM maquinas_gimnasio WHERE id=" . $_GET["consultar"]);
    if (mysqli_num_rows($sqlMaquinas) > 0) {
        $maquinas = mysqli_fetch_all($sqlMaquinas, MYSQLI_ASSOC);
        echo json_encode($maquinas);
        exit();
    } else {
        echo json_encode(["success" => 0]);
    }
}

// Borrar pero se le debe enviar una clave (para borrado)
if (isset($_GET["borrar"])) {
    $sqlMaquinas = mysqli_query($conexionBD, "DELETE FROM maquinas_gimnasio WHERE id=" . $_GET["borrar"]);
    if ($sqlMaquinas) {
        echo json_encode(["success" => 1]);
        exit();
    } else {
        echo json_encode(["success" => 0]);
    }
}

// Insertar un nuevo registro y recepcionar en método post los datos de nombre y tipo
if (isset($_GET["insertar"])) {
    $data = json_decode(file_get_contents("php://input"));
    $nombre = $data->nombre;
    $tipo = $data->tipo;
    $cantidad = $data->cantidad;

    if (($nombre != "") && ($tipo != "") && ($cantidad != "")) {
        $sqlMaquinas = mysqli_query($conexionBD, "INSERT INTO maquinas_gimnasio(nombre, tipo, cantidad) VALUES('$nombre','$tipo', '$cantidad') ");
        echo json_encode(["success" => 1]);
    } else {
        echo json_encode(["success" => 0]);
    }
    exit();
}

// Actualizar datos pero recepciona datos de nombre, tipo y una clave para realizar la actualización
if (isset($_GET["actualizar"])) {
    $data = json_decode(file_get_contents("php://input"));

    $id = (isset($data->id)) ? $data->id : $_GET["actualizar"];
    $nombre = $data->nombre;
    $tipo = $data->tipo;
    $cantidad = $data->cantidad;

    $sqlMaquinas = mysqli_query($conexionBD, "UPDATE maquinas_gimnasio SET nombre='$nombre', tipo='$tipo', cantidad='$cantidad' WHERE id='$id'");
    echo json_encode(["success" => 1]);
    exit();
}

// Consultar todos los registros de la tabla maquinas_gimnasio
$sqlMaquinas = mysqli_query($conexionBD, "SELECT * FROM maquinas_gimnasio");
if (mysqli_num_rows($sqlMaquinas) > 0) {
    $maquinas = mysqli_fetch_all($sqlMaquinas, MYSQLI_ASSOC);
    echo json_encode($maquinas);
} else {
    echo json_encode([["success" => 0]]);
}
?>

### SCRIPT DE LA BASE DE DATOS "maquinas"

CREATE DATABASE IF NOT EXISTS `maquinas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `maquinas`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maquinas_gimnasio`
--

DROP TABLE IF EXISTS `maquinas_gimnasio`;
CREATE TABLE IF NOT EXISTS `maquinas_gimnasio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `tipo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

INSERT INTO `maquinas_gimnasio` (`id`, `nombre`, `tipo`, `cantidad`) VALUES
(1, 'Cinta de correr', 'Cardio', 5),
(2, 'Maquina de pesas', 'Fuerza', 8),
(3, 'Bicicleta estatica', 'Cardio', 2);
COMMIT;
