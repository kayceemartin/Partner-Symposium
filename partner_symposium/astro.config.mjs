import { defineConfig } from 'astro/config';
//import compressor from 'astro-compressor';;
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { astroImageTools } from 'astro-imagetools';
import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), astroImageTools, react(), partytown()]
});