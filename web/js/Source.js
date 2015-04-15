var Source = function () {

    this.URL = "http://localhost:57773/UMLExplorer";

};

/**
 * Return class tree.
 * @param {Source~dataCallback} callback
 */
Source.prototype.getClassTree = function (callback) {

    lib.load(this.URL + "/GetClassTree", null, callback);

};

/**
 * Return class view.
 * @param {string} className
 * @param {Source~dataCallback} callback
 */
Source.prototype.getClassView = function (className, callback) {

    lib.load(this.URL + "/GetClassView/" + encodeURIComponent(className), null, callback);

};

/**
 * This callback handles data received directly from server.
 * @callback Source~dataCallback
 * @param {null|{error:string}} error
 * @param data
 */