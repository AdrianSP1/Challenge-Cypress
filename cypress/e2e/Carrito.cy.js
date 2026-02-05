import {CarritoPage} from "../support/pages/CarritoPage";
import { loginPage } from "../support/pages/LoginPage";
describe('Carrito Test Suite', () => {

    const loginpage = new loginPage();
    const carritopage = new CarritoPage();
    it('Agregar productos al carrito después de un login exitoso', () => {
        loginpage.doLoginComplete();
        carritopage.agregarProductosAlCarrito();
    });

    it('Remover producto desde el carrito', () => {
        loginpage.doLoginComplete();
        carritopage.removerProductoDelCarrito();
    });
});