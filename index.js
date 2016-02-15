/**
 * @fileoverview The consistent-return rule from ESLint 1.x.
 * @author Nicholas C. Zakas
 * @author Erik Desjardins
 */
'use strict';

module.exports = {
	rules: {
		'consistent-return-legacy': require('./rules/consistent-return-legacy')
	}
};
