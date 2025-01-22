export default {
    data() {
        return {
            isFormDirty: false,
        };
    },
    methods: {
        beforeLeaveCheck(to, from, next) {
            if (this.isFormDirty && !window.confirm(this.$t('Ви маєте не збережені зміни. Ви дійсно хочете залишити сторінку?'))) {
                next(false);
            } else {
                this.isFormDirty = false;
                next();
            }
        },
    },
};
