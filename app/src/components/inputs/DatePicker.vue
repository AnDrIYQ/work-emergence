<template>
    <v-date-picker
        :text-input="true"
        :time-picker-inline="true"
        :enable-time-picker="false"
        format="yyyy.mm.dd"
        :format-locale="uk"
        :placeholder="$t('Обрати дату')"
        :select-text="$t('Обрати')"
        :cancel-text="$t('Закрити')"
        :range="false"
        :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
        <template #input-icon>
            <div class="mt-[2px] ms-2">
                <i class="fi fi-br-calendar-day"></i>
            </div>
        </template>
    </v-date-picker>
</template>

<script>
import { uk } from 'date-fns/locale';

export default {
    name: "DatePicker",
    props: {
        modelValue: String,
    },
    emits: ['update:modelValue'],
    data() {
        return {
            uk,
        };
    },
};
</script>
