<template>
    <div>
        <Button>default</Button>
        <Button type="primary" class="pt5" long>primary</Button>
        <Button type="success" long>success</Button>
        <br><br>
        <Button size="default">default</Button>
        <Button size="small">small</Button>
        <br><br>
        <Button type="primary" :isFill="true">primary</Button>
        <Button type="success" :isFill="true">success</Button>
        <Button type="primary" :isFill="true" size="small">primary</Button>
        <Button type="success" :isFill="true" size="small">success</Button>
        <br><br>
        <Button type="primary" :disabled="true">primary</Button>
        <Button type="success" disabled>success</Button>
        <Button type="primary" disabled size="small" isFill>primary</Button>
        <Button type="success" disabled size="small">success</Button>
        <br><br>
        <Button type="primary" long isFill>primary</Button>
        <Button type="success" round :isFill="true">success</Button>
        <Button type="primary" round :isFill="true" size="small">primary</Button>
        <Button type="success" round :isFill="true" size="small">success</Button>
        <Button type="primary" round :disabled="true">primary</Button>
        <Button type="success" round disabled>success</Button>
        <Button type="primary" round disabled size="small">primary</Button>
        <Button type="success" round disabled size="small">success</Button>
    </div>
</template>

<script>
import Button from 'components/button';

export default {
    components: {
        Button
    }
};
</script>
