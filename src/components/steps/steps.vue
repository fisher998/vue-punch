<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Steps',
    mounted () {
        const total = this.$children.length;
        this.$children[total - 1].showTail = false;
    }
};
</script>

