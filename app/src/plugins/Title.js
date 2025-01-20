export default class Title {
    install(app) {
        app.config.globalProperties.$title = this.setTitle.bind(this);
        app.mixin({
            created() {
                this.$title(this.$t(this.$route.meta.title ?? 'Work emergence'));
            },
        });
    }

    setTitle(value) {
        window.document.title = value;
    }
}
