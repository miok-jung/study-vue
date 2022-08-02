/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier","react-app", "prettier"
  ],
  "overrides": [
    {
      "files": [
        "cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"
      ],
      "extends": [
        "plugin:cypress/recommended"
      ]
    }
  ],
  // esLint 에러 추가문구 extends에서 마지막 두개도 포함됨
  "plugins": ["prettier"],   
  "rules": {     
    "prettier/prettier": ["error", { "endOfLine": "auto" }]   
  }
}
