'use strict';

/**
 * Ambiente.js controller
 *
 * @description: A set of functions called "actions" for managing `Ambiente`.
 */

module.exports = {

  /**
   * Retrieve ambiente records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.ambiente.search(ctx.query);
    } else {
      return strapi.services.ambiente.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a ambiente record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.ambiente.fetch(ctx.params);
  },

  /**
   * Count ambiente records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.ambiente.count(ctx.query);
  },

  /**
   * Create a/an ambiente record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ambiente.add(ctx.request.body);
  },

  /**
   * Update a/an ambiente record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ambiente.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ambiente record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ambiente.remove(ctx.params);
  }
};
