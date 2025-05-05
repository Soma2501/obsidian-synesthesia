module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier"
  ],
  rules: {
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "font-family-no-duplicate-names": true,
    "no-empty-source": true,
    "order/properties-alphabetical-order": true
  },
  plugins: [
		"stylelint-order"
	],
};
// See:
// https://github.com/stylelint/awesome-stylelint/#readme
// https://github.com/stylelint/stylelint/blob/HEAD/docs/user-guide/configure.md