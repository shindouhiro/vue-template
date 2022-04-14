import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'Unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        vue(),
        Pages(),
        AutoImport({
            imports: ['vue', 'vue-router'],
        }),
        Components({
            dts: true,
            resolvers: [AntDesignVueResolver()],
        }),
        Unocss(),
    ],
})
