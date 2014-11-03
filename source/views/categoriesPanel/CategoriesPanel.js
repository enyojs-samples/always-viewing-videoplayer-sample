enyo.kind({
	name: "Sample.AlwaysViewingVideo.CategoriesPanel",
	kind: "Sample.AlwaysViewingVideo.Panel",
	components: [
		{name: "categoryList", kind: "moon.DataList", collection: ".app.$.categories", classes: "enyo-fill", components: [
			{kind: "Sample.AlwaysViewingVideo.CategoryListItem"}
		]}
	],
	bindings: [
		{from: "$.categoryList.selected", to: "category"}
	],
	categoryChanged: function() {
		if (this.category) {
			this.bubble("onSelectCategory", {model: this.category});
		}
	}
});
