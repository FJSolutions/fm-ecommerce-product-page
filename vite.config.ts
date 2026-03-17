import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { browserslistToTargets } from "lightningcss"
import browserList from "browserslist"

export default defineConfig({
   plugins: [preact()],
   css: {
      transformer: "lightningcss",
      lightningcss: {
         targets: browserslistToTargets(browserList(">= 0.25%")),
         drafts: {
            customMedia: true
         }
      }
   },
   build: {
      cssMinify: "lightningcss"
   },
})
