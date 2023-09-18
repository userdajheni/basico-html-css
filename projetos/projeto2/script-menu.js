function menuShow() {
    // selecionar todo o menu mobile
    let menuMobile = document.querySelector('.mobile-menu')

    // condição para aparecer ou esconder menu mobile com clicar no botão
    
    // Então quando mobile-menu tiver a classe open
    if (menuMobile.classList.contains('open')) {
        // remova a classe para fechar
        menuMobile.classList.remove('open')
        // icone hamburguer quando tiver fechado
        document.querySelector('.icon').innerHTML='&#9776;'
    } 
    
    // senão, adiciona a classe para abrir
    else {
        menuMobile.classList.add('open')
        // alterar icon para X
        document.querySelector('.icon').innerHTML='X'
    }
}