function StringEntryPlugin(options) {
	this.options = options
}

StringEntryPlugin.prototype.apply = function (compiler) {
	var self = this
	compiler.plugin('emit', function (compilation, callback) {
		for (var entryName in self.options) {
			var entryContent = self.options[entryName]
			compilation.assets[entryName] = {
				source: function () {
					return entryContent
				},
				size: function () {
					return entryContent.length
				}
			}
		}
		callback()
	})
}

module.exports = StringEntryPlugin
