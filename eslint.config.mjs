import { FlatCompat } from "@eslint/eslintrc";
import eslint from '@eslint/js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import perfectionistConfig from 'eslint-plugin-perfectionist/configs/recommended-natural';
import regexpPlugin from 'eslint-plugin-regexp';
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default tseslint.config(
    eslint.configs.recommended,
    ...compat.extends("airbnb"),
    ...compat.extends("airbnb-typescript"),
    ...tseslint.configs.recommendedTypeChecked,
    perfectionistConfig,
    regexpPlugin.configs['flat/recommended'],
    {
      plugins: {
        'simple-import-sort': simpleImportSort,
        unicorn,
      },
      languageOptions: {
        parserOptions: {
          project: true,
          tsconfigRootDir: __dirname,
        },
      },
      rules: {
      }
    },
    {
      ignores: [
        'src/client/vite-env.d.ts',
      ]
    }
);