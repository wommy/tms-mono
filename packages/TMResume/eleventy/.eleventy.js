module.exports = function(eleventyConfig){
	eleventyConfig.addPassthroughCopy({'../tailwind/style/earlpost.css': 'earl/earlpost.css'})
	eleventyConfig.addPassthroughCopy({'../netlifyCMS/admin': 'admin/'})

	return {
		dataTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
	}
}
