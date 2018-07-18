<template>
    <section class="content-header">
      <h1>
        {{ titles.title }}
        <small>{{ titles.subtitle }}</small>
        <i class="fa fa-dashboad"></i>
      </h1>
      <breadcrumbs></breadcrumbs>  
    </section>
</template>

<script>
  import { serverBus } from '../../main';

  export default {
    name: 'Breadrumb',
    props: ['titles'],   
  }
</script>