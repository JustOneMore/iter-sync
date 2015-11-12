var IterSync = function(data, callback) {
	var that = this;
	this.i = 0;
	this.data = data;
	this.callback = callback;
	this.safeCounter = 0;
	this.safeCounterMax = 1000000;
	this.next = function() {
		(function(i) {
			if(i < that.data.length) {
				that.safeCounter++;
				if(that.safeCounter > this.safeCounterMax) {
					console.log("Saved from recursion by safeCounterMax!!!!");
					return;
				}
				callback.call(callback, that.data[i], that.next, that.i++);
			}
		})(that.i);
	};
	this.start = function() {
		that.next(0);
	};
	return this;
};

if(module != undefined) {
	module.exports = IterSync;
}

