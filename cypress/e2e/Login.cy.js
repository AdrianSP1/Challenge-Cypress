import { loginPage } from "../support/pages/LoginPage";
describe('Login Test Suite', () => {
    const loginpage = new loginPage(); 
    it(' Login con credenciales válidas', () => {
        loginpage.visitarpagina();
        loginpage.doLogin();
        loginpage.ValidarLoginExitoso();
    
    });

    it('Login con credenciales incorrectas', () => {
        loginpage.visitarpagina();
        loginpage.doErrorLogin();
        loginpage.verificarMensajeError();
    }); 
    it(' Login usando flujo completo', () => {
        loginpage.doLoginComplete();
    });
}); 