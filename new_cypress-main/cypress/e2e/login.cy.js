describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки

         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нашли кнопку войти + клик

         cy.get('#message').contains('Авторизация прошла успешно'); // Проверяем, что после авторизации есть текст
         cy.get('#message').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     })

     it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки
        cy.get('#forgotEmailButton').click(); // Клик по кнопке забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввели верную почту
        cy.get('#restoreEmailButton').click(); // Клик по кноке отправить код
        cy.get('#message').contains('Успешно отправили пароль на e-mail'); //Проверяем текст
        cy.get('#message').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

     it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio11'); // Ввели не верный пароль
        cy.get('#loginButton').click(); // Нашли кнопку войти + клик

        cy.get('#message').contains('Такого логина или пароля нет'); // Проверяем текст ошибки
        cy.get('#message').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки

        cy.get('#mail').type('login@domain.ru'); // Ввели не верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нашли кнопку войти + клик

        cy.get('#message').contains('Такого логина или пароля нет'); // Проверяем текст ошибки
        cy.get('#message').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки

        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нашли кнопку войти + клик

        cy.get('#message').contains('Нужно исправить проблему валидации'); // Проверяем текст ошибки
        cy.get('#message').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин со строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нашли кнопку войти + клик

        cy.get('#message').contains('Авторизация прошла успешно'); // Проверяем, что после авторизации есть текст
        cy.get('#message').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

 })

 