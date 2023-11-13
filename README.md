SISTEMA DE GESTIÓN DE PROVEEDORES - MVP
Producto mínimo viable

Desarrollado por: Miguel Angel Lopez.
Fecha de desarrollo: octubre - noviembre de 2023.

Descripción:
A continuación se presenta un sistema para la gestión de proveedores y la selección de los mismos, permite a la empresa la búsqueda la optimización del proceso y permite realizar un seguimiento, gestión y consultas históricas de datos de contratos en forma centralizada.
Se tiene opción de carga masiva de proveedores a través de un archivo csv.

Stack tecnológico:
Stack basado en los requerimientos del ejercicio.

BASE DE DATOS
Motor de base de datos: Oracle 21c XE
Gestor de base de datos: DBeaver
BACKEND
Java - JDK versión 11.0.16
Spring Boot - versión 2.7.16
Gradle - versión 7.5.1
Editor de código: Visual Studio Code

Dependencias Backend:
	implementation 'org.springframework.boot:spring-boot-starter-data-jdbc'
	implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
	implementation 'org.springframework.boot:spring-boot-starter-web'
	compileOnly 'org.projectlombok:lombok:1.18.2'
	developmentOnly 'org.springframework.boot:spring-boot-devtools'
	runtimeOnly 'com.oracle.database.jdbc:ojdbc8'
	annotationProcessor 'org.projectlombok:lombok:1.18.2'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'
	implementation 'com.fasterxml.jackson.datatype:jackson-datatype-hibernate5:2.13.0'
	implementation 'org.mapstruct:mapstruct:1.4.2.Final'

FRONTEND
TypeScript  - versión 5.1.6
Angular - versión 16.2.8
NodeJs - versión 18.17.0
Editor de código: Visual Studio Code



Manual de instalación:
INSTALACIÓN
Para ejecutar el proyecto en diferentes entornos se deben seguir los siguientes pasos:
Descargar la carpeta TC_SB_35 y ubicarla en el directorio C:\

INSTALACIÓN BASE DE DATOS
Verificar que el nuevo entorno tenga instalada una instancia de base de datos de Oracle 21c XE
Descomprimir el archivo que se encuentra en TC_GB_04\SupplierManagementSystem\Database
Entrar a la carpeta descomprimida
Utilizar SQL Plus o SQL Developer para ejecutar el script TC_GB_04_SYS_SCRIPT.sql desde el usuario System en la base de datos Oracle
Utilizar SQL PLus o SQL Developer para ejecutar el script TC_GB_04_SYS_SCHEMA_SCRIPT.sql desde el usuario creado en el script anterior
Verificar que los objetos hayan sido creados correctamente
En caso de utilizar DBeaver como gestor, se puede cargar cada script de las diferentes carpetas en TC_GB_04/Database siguiendo el orden que especifica el archivo TC_GB_04_SYS_SCRIPT.sql y posteriormente el orden que especifica el archivo TC_GB_04_SYS_SCHEMA_SCRIPT.sql



INSTALACIÓN BACKEND
Verificar que el nuevo entorno tenga instalados los elementos que componen el stack tecnológico del backend
Descomprimir el archivo que se encuentra en TC_GB_04/API
Abrir la carpeta descomprimida en Visual Studio Code
INSTALACIÓN FRONTEND
Verificar que el nuevo entorno tenga instalados los elementos que componen el stack tecnológico del frontend
Descomprimir el archivo que se encuentra en TC_GB_04/Front
Abrir la carpeta descomprimida en Visual Studio Code
Debido a que la carpeta fue comprimida sin la subcarpeta node_modules, abrir una nueva terminal desde la carpeta descomprimida y ejecutar el comando: npm install
