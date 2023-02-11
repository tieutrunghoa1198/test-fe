import { boot } from 'quasar/wrappers';
import { defineAsyncComponent } from 'vue';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.component(
    'component-global',
    defineAsyncComponent(() => import('src/components/component-global.vue'))
  );
});
