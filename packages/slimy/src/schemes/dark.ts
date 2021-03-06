import { ColorScheme } from "../types";
import { color } from "../color";

const _ = color("242b2b");

// Not a chalk color but one we'll use a few times in this theme.
const forestGreen = _("405c50");

const chalk: ColorScheme["chalk"] = {
	red: _("b64e4e"),
	green: _("a0c080"),
	yellow: _("e7d072"),
	blue: _("8caec1"),
	magenta: _("be9296"),
	cyan: _("90c7e0"),
	orange: _("d88f56"),
	black: _("242b2b").brighten(0.3),
	white: _("e0e0e0"),
	purple: _("9876aa"),
};

const base: ColorScheme["base"] = {
	bg: _("242b2b"),
	fg: _("e0e0e0"),
	accent: _("a8df5a"),
	ui: _("919d9f"),
};

export function main() {}

const syntax: ColorScheme["syntax"] = {
	// Keywords
	entity: chalk.yellow.darken(0.1),
	keyword: chalk.orange.brighten(0.3),
	storage: chalk.orange.brighten(0.3).desaturate(0.5).fade(0.1),

	// Entity names
	class: chalk.yellow.darken(0.1).desaturate(0.7),
	constant: chalk.purple,
	func: chalk.orange.mix(chalk.yellow, 0.7).brighten(0.4).desaturate(0.4),
	tag: chalk.yellow,
	type: chalk.cyan,
	variable: chalk.magenta,

	// Data
	boolean: chalk.red.darken(0.2).desaturate(0.6),
	number: chalk.purple.brighten(0.1),
	regexp: chalk.green.mix(chalk.blue, 0.5).brighten(0.4),
	string: chalk.blue,

	// CSS
	cssAtRule: chalk.red.brighten(1).desaturate(0.6),
	cssClass: chalk.green.brighten(0.4).desaturate(0.5),
	cssId: chalk.magenta.darken(0.2),
	cssProperty: chalk.green.mix(chalk.blue, 0.5).brighten(0.4),
	cssUnit: chalk.blue.brighten(0.3),

	// Other
	comment: base.fg.fade(0.75),
	error: chalk.red,
	markup: chalk.orange.darken(0.3).desaturate(0.5),
	operator: _("ccd2be"),
	punctuation: base.fg.fade(0.4),
	special: chalk.green,
};

const vcs: ColorScheme["vcs"] = {
	added: chalk.green,
	modified: chalk.blue,
	removed: chalk.red,
};

const ui: ColorScheme["ui"] = {
	line: base.bg.darken(0.2),
	panel: {
		bg: base.bg,
		shadow: null,
		border: null,
	},
	popover: {
		bg: _("181d1d"),
		shadow: null,
		border: null,
	},
	button: {
		bg: _("2f6260"),
	},
	gutter: {
		normal: base.ui.fade(0.4),
		active: base.ui.fade(0.1),
	},
	selection: {
		bg: base.ui.fade(0.87),
		inactive: base.ui.fade(0.94),
		border: null,
	},
	guide: {
		normal: base.ui.fade(0.6),
		active: base.ui.fade(0.3),
	},
	state: {
		error: syntax.error,
		warning: syntax.tag,
		info: syntax.keyword,
		success: base.accent.darken(0.4),
	},
	list: {
		activeBg: forestGreen,
		activeFg: base.fg.brighten(0.5),
		hoverBg: forestGreen.alpha(0.25),
		hoverFg: base.fg.brighten(0.5),
	},
};

export const dark: ColorScheme = {
	chalk,
	base,
	syntax,
	vcs,
	ui,
};

export default dark;
