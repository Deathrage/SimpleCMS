var mongoose = require('mongoose');

var pageTypeSchema = mongoose.Schema({
    typeName: {
        type: String,
        require: true
    },
    typeField: {
        type: Array,
        require: true
    },
    typeTemplate: {
        type: String,
        require: true
    },
    typeIsMaster: {
        type: Boolean,
        require: true
    }
});

var PageType = mongoose.model("PageType", pageTypeSchema);
module.exports = PageType;