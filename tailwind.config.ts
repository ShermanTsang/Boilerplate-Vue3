/** @format */

import { defineConfig } from 'windcss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
    darkMode: 'class',
    theme: {
        extend: {
            colors: {},
        },
    },
    plugins: [formsPlugin],
})
