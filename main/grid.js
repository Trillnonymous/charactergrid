(function(factory, global){
	if (typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = global.document ?
			factory(global) :
			function(w){
				if (!w.document) return;
				factory(w);
			};
	} else {
		factory(global);
	}
}(function(global){

}, window));
