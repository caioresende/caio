var keystone = require('keystone');
var Types = keystone.Field.Types;

var Post = new keystone.List('Post', {
	map: { name: 'title' },
  	autokey: { path: 'slug', from: 'title', unique: true },
});

Post.add({
	title: { type: String, required: true, initial: true, label: 'Name' },
	state: { type: Types.Select, options: 'draft, published', default: 'rascunho', index: true, label: 'State' },
	content: { type: Types.Html, wysiwyg: true, required: true, initial: true, label: 'Content' }
});

Post.track = true;
Post.defaultSort = '-createdAt';
Post.defaultColumns = 'title, state|20%, slug|20%';
Post.register();