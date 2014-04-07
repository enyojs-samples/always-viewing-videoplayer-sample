enyo.kind({
	name: "Sample.AlwaysViewingVideo.CategoryListItem",
	kind: "moon.Item",
	classes: "moon-hspacing category-list-item",
	components: [
		{name: "thumbnail", kind: "moon.Image", spotlight: false, classes: "video-list-item-thumbnail"},
		{name: "category"}
	],
	bindings: [
		{from: ".model.thumbnail", to: ".$.thumbnail.src"},
		{from: ".model.category", to: ".$.category.content"}
	]
});
