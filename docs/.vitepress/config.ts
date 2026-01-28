import { defineConfig, SiteConfig } from 'vitepress'
import locales from './locales'
import { readdir, writeFile } from 'fs/promises'
import { resolve } from 'path'
import { defineAsyncComponent } from 'vue'

export default defineConfig({
    title: 'IcePatch Docs',
    locales: locales.locales,
    ignoreDeadLinks: true,
    lastUpdated: true,
    sitemap: {
        hostname: 'https://icepatch.anatdx.com'
    },
    theme: {
        asyncLinks: true // 启用异步模块和链接渲染
    },
})
