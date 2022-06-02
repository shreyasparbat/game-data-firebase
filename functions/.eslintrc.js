module.exports = {
  root: true,
  env: {
    es8: true,
    node: true,
  },
  parserOptions: {
    "ecmaVersion": 8,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    "quotes": ["error", "double"],
    "linebreak-style": "off",
  },
};
