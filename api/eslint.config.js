import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{js,mjs,cjs,vue}"]},
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                config: true,
                toastr: true,
            },
        },
        rules: {
            semi: ["error", "always"],
            indent: ["error", 4, { "SwitchCase": 1 }],
            'vue/valid-template-root': 'off',
        },
    },
    pluginJs.configs.recommended,
];
