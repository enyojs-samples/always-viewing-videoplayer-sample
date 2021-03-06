enyo.kind({
	name: "Sample.AlwaysViewingVideo.Application",
	kind: "enyo.Application",
	components: [
		{name: "videoList"},
		{name: "categories", kind: "Sample.AlwaysViewingVideo.CategoryCollection", url: "mock/data.json"}
	],
	view: "Sample.AlwaysViewingVideo.MainView",
	populateCateogries: function() {
		this.$.categories.fetch({error: this.bindSafely("processError")});
	},
	processError: function() {
		this.log("DEAL WITH THIS", arguments);
		return true;
	}
});

enyo.ready(function () {
	var app = new Sample.AlwaysViewingVideo.Application({name: "app"});
	app.populateCateogries();
});
