enyo.kind({
	name: "Sample.AlwaysViewingVideo.MainView",
	classes: "moon main-view",
	handlers: {
		onResetPlayer: "resetPlayer"
	},
	components: [
		// video player
		{name: "player", kind: "Sample.AlwaysViewingVideo.VideoPlayer"},
		// the panels
		{name: "panels", kind: "moon.Panels", pattern: "alwaysviewing", classes: "enyo-fit", components: [
			// categories
			{name: "categories", kind: "Sample.AlwaysViewingVideo.CategoriesPanel", title: "Sample App: Always Viewing VideoPlayer", onSelectCategory: "selectCategory"},
			// videos in category
			{name: "videos", kind: "Sample.AlwaysViewingVideo.VideosPanel", onShowDetail: "showDetail"},
			// video details
			{name: "details", kind: "Sample.AlwaysViewingVideo.DetailsPanel"}
		]}
	],
	bindings: [
		{from: ".app.$.videoList.collection", to: ".$.player.videos"}
	],
	selectCategory: function(inSender, inEvent) {
		var model = inEvent.model;
		this.$.videos.set("model", model);
		this.$.panels.next();
		return true;
	},
	showDetail: function(inSender, inEvent) {
		var model = inEvent.model;
		var index = inEvent.index;
		this.$.details.set("model", model);
		this.$.details.set("index", index);
		this.$.panels.next();
		return true;
	},
	resetPlayer: function(inSender, inEvent) {
		var cm = this.$.videos.get("model");
		var collection = cm.get("contentCollection");
		var index = !isNaN(inEvent.index) ? inEvent.index : 0;
		this.$.player.set("playIndex", index);
		// now we reset the app's global video collection (see app.js)
		// to this category which will cause the VideoPlayer to start
		// playing at the new index of the new category
		this.app.$.videoList.set("collection", collection);
		this.$.panels.set("showing", false);
		return true;
	}
});
