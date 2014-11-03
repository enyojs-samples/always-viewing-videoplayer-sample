enyo.kind({
	name: "Sample.AlwaysViewingVideo.DetailsPanel",
	kind: "Sample.AlwaysViewingVideo.Panel",
	components: [
		{kind: "enyo.FittableColumns", noStretch: true, classes: "detail-wrapper", components: [
			{name: "thumbnail", kind: "enyo.Image", classes: "detail-item-thumbnail"},
			{kind: "enyo.FittableRows", fit: true, components: [
				{name: "title", classes: "detail-item-title"},
				{name: "description", classes: "detail-item-description"},
				{kind: "moon.Button", content: "Watch", ontap: "playVideo"}
			]}
		]}
	],
	bindings: [
		{from: "model.title", to: "title"},
		{from: "model.title", to: "$.title.content"},
		{from: "model.description", to: "$.description.content"},
		{from: "model.thumbnail", to: "$.thumbnail.src"}
	],
	playVideo: function() {
		// this.index is set by the main view when it handles an onShowDetail event;
		// and is the index of the video relative to the collection it is currently in
		var originalIndex = this.index;
		// leverage logic from video list panel by waterfalling this event from the app's view
		this.app.view.waterfall("onPlayVideo", {originalIndex: originalIndex});
		return true;
	}
});