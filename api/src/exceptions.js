import messages from '@root/messages/index.js';
import 'dotenv/config';

export default class Exception {
    /**
     * Поточна локаль
     * @type {string}
     */
    static locale = process.env.LOCALE || 'en';

    /**
     * Отримує повідомлення про помилку за ключем і замінює плейсхолдери на динамічні значення
     * @param {string} message - Ключ повідомлення
     * @param {Record<string, string | number>} [placeholders] - Об'єкт із замінами для плейсхолдерів
     * @returns {string} Повідомлення про помилку з заміненими значеннями
     */
    static getError(message, placeholders = {}) {
        /**
         * @type {Record<string, Record<string, string>>}
         */
        const localizedMessages = messages;

        // Отримуємо повідомлення для поточної локалі або повертаємо ключ, якщо повідомлення не знайдено
        let localizedMessage =
            (localizedMessages[Exception.locale] && localizedMessages[Exception.locale][message]) ||
            message;

        // Заміна плейсхолдерів у повідомленні
        Object.entries(placeholders).forEach(([key, value]) => {
            const regex = new RegExp(`\\{${key}\\}`, 'g'); // Глобальна заміна всіх входжень {key}
            localizedMessage = localizedMessage.replace(regex, String(value));
        });

        return localizedMessage;
    }

    /**
     * Обробляє список помилок та повертає масив повідомлень
     * @param {Record<string, { properties: { message: string } }>} errors - Об'єкт із помилками
     * @returns {string[]} Масив повідомлень про помилки
     */
    static get(errors) {
        return Object.values(errors).map((error) => error.properties.message);
    }
};
