export default class TranslatePlugin {
    constructor(locale = 'en') {
        this.locale = locale;
    }

    install(app) {
        app.config.globalProperties.$t = this.translate.bind(this);
        app.config.globalProperties.$setLocale = this.setLocale.bind(this);
    }

    translate(phrase, params = {}) {
        if (!window.translate_messages || !window.translate_messages[this.locale]) {
            return phrase;
        }

        let translation = window.translate_messages[this.locale][phrase] || phrase;

        Object.keys(params).forEach((key) => {
            const regex = new RegExp(`{${key}}`, 'g');
            translation = translation.replace(regex, params[key]);
        });

        return translation;
    }

    setLocale(newLocale) {
        this.locale = newLocale;
        console.log(`Locale changed to: ${this.locale}`);
    }
}
