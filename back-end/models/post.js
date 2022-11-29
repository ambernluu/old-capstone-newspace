"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");


/** Related functions for companies. */

class Post {
  /** Create a post (from data), update db, return new post data.
   *
   * data should be { imageUrl, body, postedAt, postedBy }
   *
   * Returns { id, imageUrl, body, postedAt, postedBy }
   **/

  static async create({image_url, body, posted_by}) {
    const result = await db.query(
      `INSERT INTO posts (image_url,
                             body,
                             posted_at,
                             posted_by)
           VALUES ($1, $2, current_timestamp, $3)
           RETURNING id, image_url, body, posted_at, posted_by`,
      [
        image_url,
        body,
        posted_by
      ]);
    let post = result.rows[0];

    return post;
  }

  /** Find all posts (optional filter on searchFilters).
   *
   * searchFilters (all optional):
   * - body (search post body for keywords)
   * - posted_by (search for posts by user)
   *
   * Returns [{ id, image_url, body, posted_at, posted_by} ...]
   * */

  static async findAll({ body, posted_by } = {}) {
    let query = `SELECT p.id,
                        p.image_url,
                        p.body,
                        p.posted_at,
                        p.posted_by
                 FROM posts p `;
    let whereExpressions = [];
    let queryValues = [];

    // For each possible search term, add to whereExpressions and
    // queryValues so we can generate the right SQL

    if (body !== undefined) {
      queryValues.push(`%${body}%`);
      whereExpressions.push(`body ILIKE $${queryValues.length}`);
    }
    if (posted_by !== undefined) {
      queryValues.push(`%${posted_by}%`);
      whereExpressions.push(`posted_by ILIKE $${queryValues.length}`);
    }
    if (whereExpressions.length > 0) {
      query += " WHERE " + whereExpressions.join(" AND ");
    }

    // Finalize query and return results

    query += " ORDER BY posted_by";
    const postsRes = await db.query(query, queryValues);
    return postsRes.rows;
  }

  /** Given a post id, return data about post.
   *
   * Returns { id, title, salary, equity, companyHandle, company }
   *   where company is { handle, name, description, numEmployees, logoUrl }
   *
   * Throws NotFoundError if not found.
   **/

  static async get(id) {
    const postRes = await db.query(
      `SELECT p.id,
              p.image_url,
              p.body,
              p.posted_at,
              p.posted_by
        FROM posts p 
        WHERE id = $1`, [id]);

    const post = postRes.rows[0];

    if (!post) throw new NotFoundError(`No post: ${id}`);
    return post;
  }

  /** Update post data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain
   * all the fields; this only changes provided ones.
   *
   * Data can include: { title, salary, equity }
   *
   * Returns { id, title, salary, equity, companyHandle }
   *
   * Throws NotFoundError if not found.
   */

  static async update(id, data) {
    const { setCols, values } = sqlForPartialUpdate(
      data,
      {});
    const idVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE posts 
                      SET ${setCols} 
                      WHERE id = ${idVarIdx} 
                      RETURNING id, 
                                title, 
                                salary, 
                                equity,
                                company_handle AS "companyHandle"`;
    const result = await db.query(querySql, [...values, id]);
    const post = result.rows[0];

    if (!post) throw new NotFoundError(`No post: ${id}`);

    return post;
  }

  /** Delete given post from database; returns undefined.
   *
   * Throws NotFoundError if company not found.
   **/

  static async remove(id) {
    const result = await db.query(
      `DELETE
           FROM posts
           WHERE id = $1
           RETURNING id`, [id]);
    const post = result.rows[0];

    if (!post) throw new NotFoundError(`No post: ${id}`);
  }
}

module.exports = Post;
