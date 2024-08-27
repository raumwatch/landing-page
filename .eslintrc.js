module.exports = {
  env: {
    browser: true,
    es2023: true,
  },
  plugins: ["react", "prettier", "import", "jsx-a11y"],
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  rules: {
    "prettier/prettier": "off",
    "prefer-template": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/button-has-type": "off",
    "no-use-before-define": "off",
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "no-restricted-syntax": "off",
    "no-await-in-loop": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "import/prefer-default-export": "off",
    "react/no-unknown-property": ["error", { ignore: ["tw", "css"] }],
    "no-unused-vars": ["warn", { varsIgnorePattern: "tw|css|styled" }],
    "import/order": [
      "off",
      {
        groups: ["builtin", "external", "internal"], // 그룹핑 순서
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"], // external로 간주되어 alias 적용안되는 문제 해결
        alphabetize: {
          order: "asc",
          caseInsensitive: true, // 대문자 우선
        },
        "newlines-between": "always", // 그룹별 모두 한줄 띄우기
      },
    ],
  },
  ignorePatterns: ["node_modules/"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2023,
    ecmaFeatures: {
      jsx: true,
    },
  },
};
