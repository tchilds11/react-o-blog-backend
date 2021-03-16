const db = require('./conn');

class blogModel {
    constructor(id, topic, slug, comment) {
        this.id = id;
        this.topic = topic;
        this.slug = slug;
        this.comment = comment;
    }
    static async getAll() {
        const response = await db.any(`SELECT * FROM blog_post;`);
        return response;
    }
    static async getBySlug(slug) {
        const response = await db.one(`SELECT * FROM blog_post WHERE slug = '${slug}';`);
        return response;
    }
}

module.exports = blogModel;