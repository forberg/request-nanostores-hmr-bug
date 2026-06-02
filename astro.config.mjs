// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import requestNanostores from '@inox-tools/request-nanostores';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), requestNanostores()]
});
