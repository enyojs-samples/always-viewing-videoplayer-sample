enyo.kind({
	name: "Sample.AlwaysViewingVideo.Application",
	kind: "enyo.Application",
	// set mockData true to use the example data
	mockData: true,
	components: [
		{name: "videoList"},
		{name: "categories", kind: "enyo.Collection"},
		{name: "webService", kind: "enyo.WebService", url: "mock/data.json", onResponse: "processData", onError: "processError"}
	],
	view: "Sample.AlwaysViewingVideo.MainView",
	start: enyo.inherit(function(sup) {
		return function() {
			sup.apply(this, arguments);
			this.populateCateogries();
		}
	}),
	populateCateogries: function() {
		if (this.mockData) {
			var ajax = new enyo.Ajax({url: "mock/data.json"});
			ajax.go();
			ajax.response(this, "processData");
			ajax.error(this, "processError");
		} else {
			// adjust url property of this.$.webService declaration
			var parms = {}; // specify any queryString parameters here
			this.$.webService.send(parms);
		}
		return;
	},
	processData: function(inSender, inResponse) {
		// this handler is specific to the mock data
		// included with the application template and
		// assumes there are categories first and those
		// categories contain an array of videos

		// modify this response handler to suit your needs

		var categories = inResponse.data || inResponse;
		enyo.forEach(categories, this.bindSafely(function(category) {
			// make a collection for each category that will hold its videos
			category.contentCollection = new Sample.AlwaysViewingVideo.VideoCollection();
			if (category.videos) {
				// add the category's videos as models to the collection
				category.contentCollection.add(category.videos);
				delete category.videos;
			}
		}));
		this.$.categories.add(categories);
		return true;
	},
	processError: function() {
		this.log("DEAL WITH THIS");
		return true;
	}
});
enyo.ready(function () {
	new Sample.AlwaysViewingVideo.Application({name: "app"});
});
