/**
	For simple applications, you might define all of your models, collections,
	and sources in this file.  For more complex applications, you might choose to separate
	these kind definitions into multiple files under this folder.
*/

enyo.kind({
	name: "Sample.AlwaysViewingVideo.VideoModel",
	kind: "enyo.Model",
	parse: function(data) {
		// do any necessary mapping of properties to
		// what the various views of the template expect

		// the data should provide (at least):
		// 	{
		// 		url: "", // video URL
		// 		thumbnail: "", // src URL of thumbnail image
		// 		title: "", // the title of the video
		// 		description: "" // the description of the video
		// 	}

		// for example, with the mock data we need to change bogusThumbnail into thumbnail
		data.thumbnail = data.bogusThumbnail;
		delete data.bogusThumbnail;

		return data;
	}
});

enyo.kind({
	name: "Sample.AlwaysViewingVideo.VideoCollection",
	kind: "enyo.Collection",
	model: "Sample.AlwaysViewingVideo.VideoModel"
});
