export default {
    data() {
        return {
            hasError: false,
        };
    },
    mounted() {
        this.$refs.input.addEventListener('input', () => {
            if (this.hasError) {
                this.$refs.input.classList.remove('has-error');
                this.hasError = false;
            }
        });
        this.$refs.input.addEventListener('invalid', () => {
            this.$refs.input.classList.add('has-error');
            this.hasError = true;
        });
    },
};
