

module.exports = {
  parser: "@typescript-eslint/parser", // Define o parser para TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Usa a versão do ECMAScript GIAN: "latest"
    sourceType: "module" // Permite o uso de import/export
  },
  plugins: [
    // Lista os plugins usados
    "react",
    "@typescript-eslint",
    "react-hooks",
    "prettier"
  ],
  extends: [
    "eslint:recommended", // Inclui as regras recomendadas do ESLint
    "plugin:react/recommended", // Inclui as regras recomendadas para React
    "plugin:@typescript-eslint/recommended", // Inclui as regras recomendadas para TypeScript
    "plugin:prettier/recommended"
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // Desativa a regra que exige 'React' no escopo para JSX
    "react/props-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off", // Desativa a regra para tipos explícitos em funções
    // // Regras do plugin react-hooks
    "react-hooks/rules-of-hooks": "error", // Verifica as regras de chamada de hooks
    "react-hooks/exhaustive-deps": "warn", // Verifica as dependências dos hooks
    "prettier/prettier": ['error']
  },
  env: {
    browser: true, // Configura o ambiente do navegador
    jest: true, // Configura o ambiente para Jest (testes)
    node: true
  },
  settings: {
    react: {
      version: "detect" // Detecta automaticamente a versão do React
    }
  },


}

// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";

// export default [
//   {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ]
