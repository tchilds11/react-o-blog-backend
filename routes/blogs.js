const express = require('express'),
    router = express.Router(),
    blogModel = require('../models/blogModel'),
    slugify = require('slugify');

router.get('/', async (req, res) => {
    const blogData = await blogModel.getAll();
    res.json(blogData).status(200);
})

router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    const entry = await blogModel.getBySlug(slug);

    if (entry) {
        res.json(entry).status(200);
    } else {
        res.status(404).send(`No Posts found that matches slug, ${slug}`);
    }
});

module.exports = router;