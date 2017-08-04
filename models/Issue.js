var keystone = require('keystone');
var Types = keystone.Field.Types;;
var Issue = new keystone.List('Issue', {
    autokey: {
        from: 'title'
        , path: 'slug'
        , unique: true
    }
});
Issue.add({
    title: {
        type: String
        , initial: true
        , default: ''
        , required: true
    }
    , description: {
        type: Types.Textarea
    }
    , createdBy: {
        type: Types.Relationship
        , ref: 'User'
        , index: true
        , many: false
    }
    , createdAt: {
        type: Date,
        default: Date.now
    }
});

Issue.defaultSort = '-createdAt';

Issue.defaultColumns = 'title|20%,createdBy';

Issue.register();