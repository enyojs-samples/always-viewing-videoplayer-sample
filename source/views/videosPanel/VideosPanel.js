enyo.kind({
	name: "Sample.AlwaysViewingVideo.VideosPanel",
	kind: "Sample.AlwaysViewingVideo.Panel",
	handlers: {
		onPlayVideo: "playVideo"
	},
	components: [
		{name: "videoDetailList", kind: "moon.DataList", components: [
			{kind: "Sample.AlwaysViewingVideo.VideoListItem", ontap: "playVideo"},
		]}
	],
	bindings: [
		{from: "model.category", to: "title"}
	],
	modelChanged: function() {
		if (!this.model) {
			return;
		}
		this.reset();
	},
	reset: function() {
		var c = this.model.get("contentCollection");
		this.$.videoDetailList.destroyClientControls();

		this.$.videoDetailList.set("collection", c);
		this.$.videoDetailList.reset();
		this.$.videoDetailList.render();
	},
	playVideo: function(inSender, inEvent) {
		var model = inEvent.model;
		var index = inEvent.index;
		if (model.get("contentCollection")) {
			// this is a category model from a waterfalled event originating from the
			// details panel and is a collection of models, so we use the originalIndex
			// which tells us the actual location of the video we need
			index = inEvent.originalIndex;
		}
		// send the onResetPlayer event and specify which video to start with
		this.bubble("onResetPlayer", {index: index});
		return true;
	}
});