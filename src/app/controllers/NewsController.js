class NewsController {
    // [GET] Path: ./news
    index(req, res) {
        res.render('news');
    }

    // [GET] Path: ./news/:slug
    show(req, res) {
        res.send("News detail");
    }
}

module.exports = new NewsController;