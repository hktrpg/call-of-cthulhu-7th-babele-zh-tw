Hooks.once('init', () => {

	if (typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'call-of-cthulhu-7th-babele-zh-tw',
			lang: 'zh-TW',
			dir: 'compendium'
		});

	}
});