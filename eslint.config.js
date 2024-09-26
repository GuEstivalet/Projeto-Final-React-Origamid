import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['dist'], // Ignora a pasta dist
  },
  {
    files: ['**/*.{js,jsx}'], // Aplicar a todos os arquivos JS/JSX
    languageOptions: {
      ecmaVersion: 'latest', // Define a versão mais recente do ECMAScript
      sourceType: 'module', // Configura o uso de módulos ES
      globals: globals.browser, // Define os globais para o ambiente do navegador
      ecmaFeatures: {
        jsx: true, // Habilita suporte a JSX
      },
    },
    settings: {
      react: {
        version: 'detect', // Detecta automaticamente a versão do React
      },
    },
    plugins: {
      react, // Plugin do React
      'react-hooks': reactHooks, // Plugin para hooks do React
      'react-refresh': reactRefresh, // Plugin para React Refresh
    },
    rules: {
      ...js.configs.recommended.rules, // Regras recomendadas do ESLint para JS
      ...react.configs.recommended.rules, // Regras recomendadas para React
      ...react.configs['jsx-runtime'].rules, // Regras do JSX runtime
      ...reactHooks.configs.recommended.rules, // Regras recomendadas para hooks
      'react-refresh/only-export-components': 'off', // Desativa regra do React Refresh
      'react/react-in-jsx-scope': 'off', // Desativa a regra de React no escopo (React 17+)
      'react/prop-types': 'off', // Desativa a necessidade de prop-types (opcional)
      'no-unsafe-finally': 'off', // Desativa regra para uso inseguro do finally
      'no-unused-vars': 'warn', // Define um aviso para variáveis não utilizadas
      'react/jsx-key': 'warn', // Emite avisos para elementos sem key
    },
  },
];
