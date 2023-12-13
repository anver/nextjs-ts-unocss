import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss';

import { presetShadcn } from './preset.shadcn';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetShadcn(),
    presetIcons({
      // Optional
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
});
