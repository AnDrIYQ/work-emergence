<template>
    <v-select
        :modelValue="modelValue"
        :options="receivedOptions"
        track-by="value"
        label="text"
        :multiple="true"
        :close-on-select="false"
        :options-limit="300"
        :limit="50"
        :limit-text="limitText"
        :loading="loading"
        @search-change="searchChange"
        @update:modelValue="handleUpdate"
    >
        <template #noOptions>
            <div class="p-2 text-xs">{{ $t('Список порожній') }}</div>
        </template>
        <template #noResult>
            <div class="p-2 text-xs">{{ $t('Нічого не знайдено') }}</div>
        </template>
    </v-select>
</template>

<script>
import api from '@root/api';

export default {
    name: "MultipleSelect",
    props: {
        modelValue: Array,
        searchUrl: String,
        allowEmpty: Boolean,
        options: {
            type: Array,
            default: () => [],
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            receivedOptions: [],
            loading: false,
        };
    },
    methods: {
        limitText (count) {
            return `та ${count} інших елементів`;
        },
        searchChange(searchString) {
            if (this.searchUrl && searchString) {
                this.loading = true;
                let url = `${this.searchUrl}?query=${searchString}`;
                api.get(url).then((response) => {
                    this.receivedOptions = response;
                    this.$nextTick(() => {
                        this.loading = false;
                    });
                });
            }
        },
        handleUpdate(value) {
            this.$emit('update:modelValue', value);
        },
    },
    watch: {
        options: {
            immediate: true,
            handler(list) {
                this.receivedOptions = list;
            },
        },
    },
};
</script>
