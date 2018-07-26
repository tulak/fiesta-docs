module.exports = {
  title: 'Fiesta',
  description: 'Buddy Management System',
  dest: process.env.VUEPRESS_DEST || 'docs/',
  base: process.env.VUEPRESS_BASE || '/fiesta-docs/',
  themeConfig: {
  	sidebar: [
		'/',
		'/getting-started/',
		'/buddy-management/',
		'/support/'
  	]
  }
}
