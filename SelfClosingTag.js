define([
	"dojo/dom-construct",
	"./register",
	"./Widget"
], function (domConstruct, register, Widget) {
	return register("d-self-closing-tag", [HTMLElement, Widget], {
		buildRendering: function () {
			this.innerNode = domConstruct.create("div",	{}, this, "last");
		}
	});
});