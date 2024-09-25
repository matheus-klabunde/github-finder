import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Ativar CSS Modules para arquivos com .module.css
      scopeBehaviour: 'local', // 'global' por padrão
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Configuração de nome para classes geradas
    },
  },
})
