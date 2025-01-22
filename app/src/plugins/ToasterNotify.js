export default class ToasterNotify {
    install(app) {
        app.config.globalProperties.$notify = window.toastr;
    }
}
