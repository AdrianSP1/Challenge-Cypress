# Challenge-Cypress

Proyecto de automatización de pruebas End-to-End (E2E) utilizando **Cypress** para validar la funcionalidad de la aplicación web **SauceDemo**. Este proyecto implementa pruebas de login, carrito de compras y consumo de APIs, siguiendo patrones de testing modernos y buenas prácticas de calidad.

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Prerrequisitos](#prerrequisitos)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Cómo Ejecutar las Pruebas](#cómo-ejecutar-las-pruebas)
- [Configuración](#configuración)
- [Reportes](#reportes)
- [Autor](#autor)

## Descripción del Proyecto

Este proyecto es un desafío de automatización QA que utiliza **Cypress** como framework de testing para ejecutar pruebas End-to-End en la aplicación **SauceDemo**. 

### Funcionalidades Incluidas:

- **Pruebas de Autenticación**: Validación de login con credenciales válidas e inválidas
- **Pruebas de Carrito**: Gestión de productos en el carrito de compras
- **Pruebas de API**: Validación de endpoints GET usando API request
- **Reportes HTML**: Generación automática de reportes detallados con capturas de pantalla
- **Page Object Model**: Implementación del patrón POM para mejor mantenibilidad

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js**: Versión 14 o superior ([Descargar Node.js](https://nodejs.org/))
- **npm**: Generalmente se instala junto con Node.js (versión 6 o superior)
- **Git**: Para clonar el repositorio ([Descargar Git](https://git-scm.com/))
- **Un navegador web**: Chrome, Firefox, Edge o Electron (incluido con Cypress)

### Verificar la Instalación

```bash
node --version
npm --version
git --version
```

## Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/AdrianSP1/Challenge-Cypress.git
cd Challenge-Cypress
```

### 2. Instalar Dependencias

```bash
npm install
```

Este comando instalará:
- **cypress**: Framework de testing E2E
- **cypress-mochawesome-reporter**: Generador de reportes HTML

### 3. Verificar la Instalación de Cypress

```bash
npx cypress --version
```

## Estructura del Proyecto

```
Challenge-Cypress/
│
├── cypress/
│   ├── e2e/                          # Archivos de pruebas end-to-end
│   │   ├── Carrito.cy.js             # Pruebas del carrito de compras
│   │   ├── Login.cy.js               # Pruebas de autenticación
│   │   └── api/
│   │       └── GET/
│   │           └── ml-api.cy.js      # Pruebas de API
│   │
│   ├── fixtures/                     # Datos de prueba
│   │   └── example.json
│   │
│   ├── support/                      # Archivos de soporte y configuración
│   │   ├── commands.js               # Comandos personalizados de Cypress
│   │   ├── e2e.js                    # Configuración de soporte E2E
│   │   └── pages/                    # Page Object Model
│   │       ├── CarritoPage.js        # Objeto de página para carrito
│   │       └── LoginPage.js          # Objeto de página para login
│   │
│   ├── reports/                      # Reportes generados
│   │   └── index.html
│   │
│   └── screenshots/                  # Capturas de pantalla de fallos
│       
│
├── cypress.config.js                 # Configuración de Cypress
├── package.json                      # Dependencias y scripts
├── package-lock.json                 # Lock de versiones
└── README.md                         # Este archivo
```

## Cómo Ejecutar las Pruebas

### 1. Ejecutar Todas las Pruebas (Modo Headless)

Ejecuta todas las pruebas en segundo plano sin interfaz gráfica:

```bash
npx cypress run
```

**Output esperado:**
- Resumen de pruebas ejecutadas
- Reporte guardado en `cypress/reports/index.html`
- Capturas de pantalla en caso de fallos

### 2. Ejecutar Pruebas en Modo Interactivo (Cypress App)

Abre la interfaz gráfica de Cypress para ver las pruebas en tiempo real:

```bash
npx cypress open
```

Desde la ventana de Cypress:
- Selecciona **E2E Testing**
- Elige el navegador deseado (Chrome, Edge, Electron)
- Haz clic en el archivo de prueba que deseas ejecutar

### 3. Ejecutar un Archivo de Prueba Específico

Ejecuta solo un archivo de pruebas en particular:

```bash
# Pruebas de Login
npx cypress run --spec "cypress/e2e/Login.cy.js"

# Pruebas de Carrito
npx cypress cypress run --spec "cypress/e2e/Carrito.cy.js"

# Pruebas de API
npx cypress run --spec "cypress/e2e/api/GET/ml-api.cy.js"
```

### 4. Ejecutar Pruebas en un Navegador Específico

```bash
# Ejecutar en Chrome
npx cypress run --browser chrome

# Ejecutar en Firefox
npx cypress run --browser firefox

# Ejecutar en Edge
npx cypress run --browser edge

# Ejecutar en Electron (navegador por defecto de Cypress)
npx cypress run --browser electron
```

### 5. Ejecutar Pruebas con Opciones Combinadas

```bash
# Ejecutar Login.cy.js en Chrome en modo headless
npx cypress run --spec "cypress/e2e/Login.cy.js" --browser chrome

# Ejecutar solo una prueba específica (por nombre)
npx cypress run --spec "cypress/e2e/Login.cy.js" --env grep="Login con credenciales válidas"
```

### 6. Generar Reporte

Los reportes se generan automáticamente después de ejecutar las pruebas:

```bash
# Abrir el reporte en el navegador
start cypress/reports/index.html
```

## Configuración

### Archivo: `cypress.config.js`

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  
  reporterOptions: {
    reportDir: "cypress/reports",      // Directorio de reportes
    charts: true,                       // Incluir gráficos
    reportPageTitle: "Cypress Test Report",
    embeddedScreenshots: true,          // Incluir capturas
    inlineAssets: true,                 // Assets inline
    saveAllAttempts: false,             // Guardar todos los intentos
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
```

### Archivo: `package.json` (Scripts)

```json
{
  "scripts": {
    "test": "npx cypress run"
  }
}
```

## Reportes

Después de ejecutar las pruebas, se genera un reporte HTML interactivo en:

```
cypress/reports/index.html
```

### Características del Reporte:

- Resumen de pruebas (pasadas, fallidas, pendientes)
- Gráficos estadísticos
- Capturas de pantalla de fallos
- Tiempos de ejecución
- Detalles de cada caso de prueba

### Visualizar el Reporte:

En Windows PowerShell:
```bash
start cypress/reports/index.html
```

En otras plataformas:
```bash
open cypress/reports/index.html
```

## Información Adicional

### Pattern: Page Object Model (POM)

El proyecto utiliza el patrón Page Object Model para mejor mantenibilidad:

```
cypress/support/pages/
├── LoginPage.js          # Selectors y métodos de login
└── CarritoPage.js        # Selectors y métodos del carrito
```

Este patrón separa los selectores de elementos de la lógica de prueba, facilitando el mantenimiento.

### Datos de Prueba (Fixtures)

Los datos de prueba se almacenan en:
```
cypress/fixtures/example.json
```

### Comandos Personalizados

Los comandos personalizados se definen en:
```
cypress/support/commands.js
```

## Solución de Problemas

### Error: `npm: command not found`
- Asegúrate de tener Node.js instalado: [https://nodejs.org/](https://nodejs.org/)

### Error: `cypress: command not found`
- Ejecuta: `npm install`

### Pruebas fallando por timeout
- Aumenta el timeout en `cypress.config.js`:
  ```javascript
  e2e: {
    commandTimeout: 10000  // 10 segundos
  }
  ```

### No se generan capturas de pantalla
- Verifica que `embeddedScreenshots: true` esté en `cypress.config.js`

## Documentación Útil

- [Documentación Oficial de Cypress](https://docs.cypress.io/)
- [API de Cypress](https://docs.cypress.io/api/table-of-contents)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [SauceDemo - Aplicación de Prueba](https://www.saucedemo.com/)

## Autor

**Adrian Spinosi**

- GitHub: [@AdrianSP1](https://github.com/AdrianSP1)
- Repositorio: [Challenge-Cypress](https://github.com/AdrianSP1/Challenge-Cypress)

## Licencia

Este proyecto está bajo la licencia **ISC**.

---

**Última actualización:** Febrero 2026  
**Versión:** 1.0.0
