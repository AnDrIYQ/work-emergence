<template>
    <auth-layout>
        <base-form
            v-model:isFormDirty="isFormDirty"
            ref="form"
            url="/register"
            :data="model"
            @success="onFormSuccess"
        >
            <h2 class="mb-4">{{ $t('Реєстрація') }}</h2>
            <span>{{ $t('Введіть необхідні дані, щоб зареєструватись.') }}</span>
            <div>
                <email-field
                    v-model="model.email"
                    :required="true"
                    :placeholder="$t('Введіть свій email')"
                />
            </div>
            <div>
                <text-field
                    v-model="model.name"
                    :required="true"
                    :placeholder="$t('Введіть ім\'я')"
                />
            </div>
            <div>
                <password-field
                    v-model="model.password"
                    v-model:showPassword="showPassword"
                    :required="true"
                    :placeholder="$t('Вигадайте пароль')"
                    :can-show="true"
                    autocomplete="password"
                    :can-generate="true"
                    @password-generated="model.confirmPassword = $event; isFormDirty = true; showPasswordConfirm = $event"
                />
            </div>
            <div>
                <password-field
                    v-model="model.confirmPassword"
                    v-model:showPassword="showPasswordConfirm"
                    :required="true"
                    autocomplete="new-password"
                    :placeholder="$t('Підтвердіть пароль')"
                    :can-show="true"
                />
            </div>
            <div>
                <u-i-button
                    @click="submit"
                >
                    {{ $t('Створити обліковий запис') }}
                </u-i-button>
            </div>
            <div>
                <router-link to="/login">{{ $t('Вже є аккаунт? Увійдіть') }}</router-link>
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
import TextField from "@root/components/inputs/TextField.vue";
import BeforeLeaveForm from "@root/mixins/before-leave-form.js";

export default {
    name: 'RegisterPage',
    mixins: [BeforeLeaveForm],
    beforeRouteLeave(to, from, next) {
        this.beforeLeaveCheck(to, from, next);
    },
    data() {
        return {
            showPassword: false,
            showPasswordConfirm: false,
            model: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
        };
    },
    methods: {
        onFormSuccess(response) {
            if (response.user) {
                this.$router.push('/');
                this.$notify.success(this.$t('Успішно створено обліковий запис'), this.$t('Успіх!'));
            }
        },
        submit() {
            if (this.model.password !== this.model.confirmPassword) {
                this.$notify.error(this.$t('Паролі не співпадають'), this.$t('Помилка!'));
                return false;
            }
            this.$refs.form.submit();
        },
    },
    components: {
        TextField,
        UIButton,
        EmailField,
        PasswordField,
        AuthLayout,
        BaseForm,
    }
};
</script>
