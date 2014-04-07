enyo.kind({
	name: "Sample.AlwaysViewingVideo.VideoListItem",
	kind: "moon.Item",
	spotlight: "container",
	classes: "video-list-item",
	layoutKind: "enyo.FittableColumnsLayout",
	handlers: {
		onSpotlightFocus: "requestScroll"
	},
	components: [
		{name: "thumbnail", kind: "moon.Image", spotlight: true, classes: "video-list-item-thumbnail"},
		{layoutKind: "enyo.FittableRowsLayout", classes: "video-list-item-details", components: [
			{name: "title"},
			{name: "description"},
			{kind: "moon.Button", content: "Details", ontap: "showDetails"},
			{kind: "moon.Button", content: "Watch", ontap: "playVideo"}
		]}
	],
	bindings: [
		{from: ".model.thumbnail", to: ".$.thumbnail.src"},
		{from: ".model.title", to: ".$.title.content"}
	],
	requestScroll: function(inSender, inEvent) {
		this.bubble("onRequestScrollIntoView");
		return true;
	},
	showDetails: function(inSender, inEvent) {
		var model = inEvent.model;
		var index = inEvent.index;
		this.bubbleUp("onShowDetail", {model: model, index: index});
		return true;
	},
	playVideo: function(inSender, inEvent) {
		// the application's main view listens for an onPlayVideo
		// event to play the video
		var index = inEvent.index;
		this.bubble("onPlayVideo", {index: index});
		return true;
	}
});
