enyo.kind({
	name: "Sample.AlwaysViewingVideo.Application",
	kind: "enyo.Application",
	components: [
		{name: "videoList"},
		{name: "categories", kind: "Sample.AlwaysViewingVideo.CategoryCollection", url: "mock/data.json"}
	],
	view: "Sample.AlwaysViewingVideo.MainView",
	start: enyo.inherit(function(sup) {
		return function() {
			sup.apply(this, arguments);
			// this.populateCateogries();
		}
	}),
	populateCateogries: function() {
		this.$.categories.fetch({fail: enyo.bindSafely(this, "processError")});
	},
	processError: function() {
		this.log("DEAL WITH THIS");
		return true;
	}
});
enyo.ready(function () {
	var app = new Sample.AlwaysViewingVideo.Application({name: "app"});
	app.populateCateogries();
});
