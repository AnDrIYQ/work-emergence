<template>
    <main-layout>
        <template #header>
            <header-component />
        </template>
        <div class="card rounded mb-4 p-4">
            <input-field
                v-model="dynamicValue"
                title="Текстове динамічне поле"
                type="select"
            />
        </div>
        <div class="flex card radius flex-wrap item-center p-4 gap-4">
            <div class="flex flex-col mb-4">
                <h1 class="text-2xl text-main">UI Kit Temporary page</h1>
                <h2 class="text-xl text-main">Example text h2</h2>
                <h3 class="text-md text-main">Example text h3</h3>
                <p class="text-xs text-green">Example regular text</p>
                <router-link to="/login">Link example text</router-link>
            </div>
            <div class="w-4/12">
                <text-field
                    :placeholder="$t('Плейсхолдер')"
                />
            </div>
            <div class="w-4/12">
                <input-number
                    :placeholder="$t('Плейсхолдер')"
                    v-model="numberValue"
                />
            </div>
            <div class="w-4/12">
                <textarea-field
                    :placeholder="$t('Плейсхолдер')"
                />
            </div>
            <div class="w-4/12">
                <base-select
                    v-model="selected"
                    placeholder="Оберіть елемент"
                    :allow-empty="false"
                    :options="[{value: 0, text: 'Пусте'}, {value: 1, text: 'Default value 2'}, {value: 2, text: 'Default value 3'}]"
                />
            </div>
            <div class="w-4/12">
                <multiple-select
                    v-model="selectedMultiple"
                    placeholder="Оберіть елементи"
                    :allow-empty="false"
                    :options="multipleOptions"
                />
            </div>
            <div class="w-4/12">
                <multiple-select
                    v-model="searchedMultiple"
                    placeholder="Знайти елементи"
                    :allow-empty="false"
                    search-url="/multiple/search"
                />
            </div>
            <div class="w-4/12">
                <input-file
                    v-model="file"
                />
            </div>
            <div class="w-4/12">
                <color-picker
                    :placeholder="$t('Оберіть колір')"
                />
            </div>
            <div class="w-4/12">
                <rating-input v-model="rating" />
            </div>
            <div class="w-4/12">
                <date-picker
                    v-model="date"
                />
            </div>
            <div class="w-4/12">
                <slider-input
                    v-model="slider"
                />
            </div>
            <div class="w-4/12">
                <input-boolean v-model="toggleValue" />
            </div>
            <div class="w-4/12">
                <froala-editor
                    v-model="content"
                />
            </div>
            <div class="card tabled radius w-1/2">
                <data-table
                    :headers="[{text:'Назва', value:'name'}, {text: 'Воркспейс', value: 'workspace'}]"
                    :items="[{name: 'Залупа', workspace: 'Мій'}, {name: 'Залупа', workspace: 'Мій'}, {name: 'Залупа', workspace: 'Мій'}]"
                />
            </div>
        </div>
    </main-layout>
</template>

<script>
import MainLayout from "@root/layouts/MainLayout.vue";
import HeaderComponent from "@components/common/Header.vue";
import BaseSelect from "@components/inputs/BaseSelect.vue";
import TextareaField from "@components/inputs/TextareaField.vue";
import TextField from "@components/inputs/TextField.vue";
import MultipleSelect from "@components/inputs/MultipleSelect.vue";
import ColorPicker from "@components/inputs/ColorPicker.vue";
import InputFile from "@components/inputs/InputFile.vue";
import DatePicker from "@components/inputs/DatePicker.vue";
import SliderInput from "@components/inputs/SliderInput.vue";
import InputBoolean from "@components/inputs/InputBoolean.vue";
import FroalaEditor from "@components/inputs/FroalaEditor.vue";
import InputNumber from "@components/inputs/InputNumber.vue";
import RatingInput from "@components/inputs/RatingInput.vue";
import InputField from "@components/inputs/InputField.vue";

export default {
    name: 'HomePage',
    data() {
        return {
            rating: 1,
            date: '',
            numberValue: 1,
            content: '',
            multipleOptions: [
                { "text": "Option 21", "value": 21 },
                { "text": "Option 22", "value": 22 },
                { "text": "Option 23", "value": 23 },
                { "text": "Option 24", "value": 24 },
                { "text": "Option 25", "value": 25 },
                { "text": "Option 26", "value": 26 },
            ],
            slider: 0,
            toggleValue: false,
            selected: 0,
            file: {},
            selectedMultiple: [],
            searchedMultiple: [],
            columns: [
                { title: 'Name' },
                { title: 'Position' },
            ],
            options: {
                responsive: true,
                select: true,
            },
            dynamicValue: null,
        };
    },
    mounted() {
    },
    components: {
        InputField,
        RatingInput,
        InputNumber,
        FroalaEditor,
        InputBoolean,
        SliderInput,
        DatePicker,
        InputFile,
        ColorPicker,
        MultipleSelect,
        TextField,
        TextareaField,
        BaseSelect,
        HeaderComponent,
        MainLayout
    },
};
</script>
