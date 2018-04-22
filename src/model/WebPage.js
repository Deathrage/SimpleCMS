var mongoose = require('mongoose');

var webPageSchema = mongoose.Schema({
    pageName: {
        require: true,
        type: String
    },
    pagePath: {
        require: true,
        type: String
    },
    pageType: {
        require: true,
        type: String,
        lowercase: true
    },
    context: mongoose.SchemaTypes.Mixed
});

var WebPage = mongoose.model("WebPage", webPageSchema);
module.exports = WebPage;