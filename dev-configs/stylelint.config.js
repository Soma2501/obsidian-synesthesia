module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
  ],
  rules: {
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "declaration-no-important": true,
    "declaration-property-value-disallowed-list": {
      "display": ["none"],
      "visibility": ["hidden"],
      "opacity": ["0"]
    },
    "font-family-no-duplicate-names": true,
    "function-url-no-scheme-relative": true,
    "function-url-scheme-disallowed-list": ["http", "https"],
    "no-empty-source": true,
    "no-invalid-position-at-import-rule": true,
    "order/properties-alphabetical-order": true,
    "plugin/use-defensive-css": [true, {
      "severity": "error",
      "accidental-hover": true,
      "background-repeat": true,
      "custom-property-fallbacks": true,
      "flex-wrapping": true,
      "scroll-chaining": true,
      "scrollbar-gutter": true,
      "vendor-prefix-grouping": true,
    }],
    "selector-max-specificity": "0,3,0",
  },
  plugins: [
		"stylelint-plugin-defensive-css",
    "stylelint-order"
	],
  overrides: [
    {
      files: ["theme.css", "dist/**/*.css"],
      rules: {
        "declaration-block-single-line-max-declarations": null,
      },
    },
  ],
};
// See:
// https://github.com/stylelint/awesome-stylelint/#readme
// https://github.com/stylelint/stylelint/blob/HEAD/docs/user-guide/configure.md