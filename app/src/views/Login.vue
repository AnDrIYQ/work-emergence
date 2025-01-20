<template>
    <auth-layout>
        <base-form
            ref="form"
            url="/login"
            :data="model"
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

export default {
    name: 'LoginPage',
    data() {
        return {
            model: {
                email: '',
                password: '',
            },
        };
    },
    methods: {
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
