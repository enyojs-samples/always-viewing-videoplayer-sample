enyo.kind({
	name: "Sample.AlwaysViewingVideo.VideoInfoHeader",
	kind: "moon.VideoInfoHeader",
	// bind some model data to populate the info header
	bindings: [
		{from: "model.title", to: "title"},
		{from: "model.description", to: "description"}
	]
});

enyo.kind({
	name: "Sample.AlwaysViewingVideo.VideoPlayer",
	autostart: true,
	playIndex: -1,
	classes: "enyo-fit",
	// Drive the video player with a collection of video models
	bindings: [
		{from: "videos.length", to: "length"}
	],
	components: [
		{name: "player", kind: "moon.VideoPlayer", infoComponents: [
			{kind: "moon.VideoInfoBackground", orient: "left", background: true, components: [
				{kind: "moon.ChannelInfo", components: [
					// {kind: "moon.Image", src: "assets/PlayerBannerLogo.png"}
				]},
				{name: "videoInfo", kind: "Sample.AlwaysViewingVideo.VideoInfoHeader"}
			]},
			{kind: "moon.VideoInfoBackground", orient: "right", background: true, components: [
				{kind: "moon.Clock"}
			]}
		], onended: "playNext", oncanplay: "canPlay"}
	],
	create: function() {
		this.inherited(arguments);
		enyo.dispatcher.listen(document, "webkitvisibilitychange", this.bindSafely("resume"));
	},
	videosChanged: function() {
		if (!this.videos) {
			return;
		}
		this.playVideo(this.playIndex !== -1 ? this.playIndex : 0);
	},
	canPlay: function() {
		this.$.player.play();
		return true;
	},
	playNext: function() {
		this.set("playIndex", this.playIndex + 1 < this.videos.length ? this.playIndex + 1 : 0);
		return true;
	},
	playVideo: function(index) {
		// check to see if the model at the index already has the right link
		var model = this.videos.at(index);
		if (model.get("url")) {
			// stop current
			this.set("playIndex", -1);
			// play
			this.set("playIndex", index);
		}
	},
	playIndexChanged: function() {
		var model, url;
		if (this.playIndex < 0) {
			this.$.player.unload();
			return;
		}
		if (!this.videos || !this.videos.length) {
			return;
		}
		model = this.videos.at(this.playIndex);
		if (!model) {
			return;
		}
		url = model.get("url");
		if (!url) {
			// this shouldn't really happen
			this.playVideo(this.playIndex);
		} else {
			this.$.videoInfo.set("model", model);
			// in order to test with the same URL for consecutive videos, must blank the src of the videoplayer
			this.$.player.set("src", "");
			this.$.player.set("src", url);
		}
	},
	resume: function() {
		// on a relaunch when video is paused, app comes up to a black screen, so we are going to resume the video on relaunch
		if (!this.$.player._isPlaying && this.$.player._canPlay && !document.webkitHidden) {
			this.$.player.play();
		}
		return true;
	}
});