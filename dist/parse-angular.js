!function(e){var t=e.angular;if("undefined"!=typeof t){var r=t.module("parse-angular",[]);r.run(["$q","$window",function(e,r){if(!t.isUndefined(r.Parse)&&t.isObject(r.Parse)){var n=r.Parse,o={Object:{prototype:["save","fetch","destroy"],"static":["saveAll","destroyAll"]},Collection:{prototype:["fetch"],"static":[]},Query:{prototype:["find","first","count","get"],"static":[]},Cloud:{prototype:[],"static":["run"]},User:{prototype:["signUp"],"static":["requestPasswordReset","logIn"]},FacebookUtils:{prototype:[],"static":["logIn","link","unlink"]}};for(var i in o){var a=i,s=o[i],c=s.prototype,l=s.static;c.forEach(function(t){var r=n[a].prototype[t];n[a].prototype[t]=function(){return r.apply(this,arguments).then(function(t){var r=e.defer();return r.resolve(t),r.promise},function(t){var r=e.defer();return r.reject(t),r.promise})}}),l.forEach(function(t){var r=n[a][t];n[a][t]=function(){return r.apply(this,arguments).then(function(t){var r=e.defer();return r.resolve(t),r.promise},function(t){var r=e.defer();return r.reject(t),r.promise})}})}}}]),t.module("parse-angular.enhance",["parse-angular"]).run(["$q","$window",function(e,r){if(!t.isUndefined(r.Parse)&&t.isObject(r.Parse)){var n=r.Parse;n.Object.getClass=function(e){return n.Object._classMap[e]},n.Collection._classMap={};var o=n.Collection.extend;n.Collection.extend=function(e){var t=o.apply(this,arguments);return e&&e.className&&(n.Collection._classMap[e.className]=t),t},n.Collection.getClass=function(e){return n.Collection._classMap[e]},n.Collection.prototype=t.extend(n.Collection.prototype,{loadMore:function(e){if(!t.isUndefined(this.query)){var r=-1==this.query._limit?100:this.query._limit,n=this.query._skip;n+=r,this.query.skip(n);var o=this;return this.query.find().then(function(t){return e&&e.add===!1||o.add(t),t.length<r&&(o.hasMoreToLoad=!1),t})}}})}}])}}(this);