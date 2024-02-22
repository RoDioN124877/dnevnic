<template>
    <div>
        {{ props.id }}
        {{ props.name }}
      
    </div>
</template>

<script setup lang="ts">
interface Props {
    id: number;
    name: string;
}
const props = defineProps<Props>();

</script>

<style scoped></style>