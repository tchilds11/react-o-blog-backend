CREATE TABLE blog_post (id serial PRIMARY KEY, 
topic text NOT NULL,
slug text NOT NULL, 
comment text NOT NULL);