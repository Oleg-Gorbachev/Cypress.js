describe('Покупка нового аватара для своего тренера', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://pokemonbattle.ru/'); // зашли на сайт
         cy.get('#k_email').type('USER_LOGIN'); // Ввели логин
         cy.get('#k_password').type('USER_PASSWORD'); // Ввели пароль
         cy.get('.MuiButton-root').click(); // Клик по кнопке Войти
         cy.get('.header_card_trainer').click(); // Клик по кнопке своего тренера
         cy.get('.k_mobile > :nth-child(5)').click(); // Клик по кнопке Смена аватара
         cy.get('.available > .shop__button').first().click(); // Клик по кнопке Купить на Аватаре тренера
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('5555555555555599'); // Ввод номера карты
         cy.get(':nth-child(1) > .style_1_base_input').type('11/26'); // ввод срока карты
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // Ввод CVV карты
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Покупатель Аватаров'); // Ввод Имени
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Клик по кнопке Оплатить
         cy.get('.style_1_base_input').type('56456'); // Ввод кода из пуша илди СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Клик по кнопке Оплатить
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // Проверяем текст об успешной оплате
         cy.get('.payment_status_top_title').should('be.visible'); // Текст виден пользователю
         cy.get('.style_1_base_link_blue').click(); // Клик по кнопке Вернуться в магазин
     })

 })