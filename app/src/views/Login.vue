<template>
    <auth-layout>
        <base-form
            v-model:isFormDirty="isFormDirty"
            ref="form"
            url="/login"
            :data="model"
            @success="onFormSuccess"
        >
            <h2>{{ $t('Вхід') }}</h2>
            <span>{{ $t('Авторизуйтеся, щоб продовжити.') }}</span>
            <div>
                <email-field v-model="model.email" :required="true" :placeholder="$t('Введіть email')" />
            </div>
            <div>
                <password-field v-model="model.password" :required="true" :placeholder="$t('Введіть пароль')" :can-show="true" />
            </div>
            <div>
                <u-i-button
                    @click="submit"
                >
                    {{ $t('Увійти') }}
                </u-i-button>
            </div>
            <div>
                <router-link to="/register">{{ $t('Реєстрація') }}</router-link>
            </div>
        </base-form>
    </auth-layout>
</template>

<script>
import AuthLayout from "@root/layouts/AuthLayout.vue";
import BaseForm from "@root/components/BaseForm.vue";
import EmailField from "@root/components/inputs/EmailField.vue";
import PasswordField from "@root/components/inputs/PasswordField.vue";
import UIButton from "@root/components/ui/UIButton.vue";
import BeforeLeaveForm from "@root/mixins/before-leave-form.js";

export default {
    name: 'LoginPage',
    mixins: [BeforeLeaveForm],
    beforeRouteLeave(to, from, next) {
        this.beforeLeaveCheck(to, from, next);
    },
    data() {
        return {
            model: {
                email: '',
                password: '',
            },
        };
    },
    methods: {
        onFormSuccess(response) {
            if (response.user) {
                this.$router.push('/');
                this.$notify.success(this.$t('Вітання'), this.$t('Авторизовано!'));
            }
        },
        submit() {
            this.$refs.form.submit();
        },
    },
    components: {
        UIButton,
        EmailField,
        PasswordField,
        AuthLayout,
        BaseForm,
    }
};
</script>
