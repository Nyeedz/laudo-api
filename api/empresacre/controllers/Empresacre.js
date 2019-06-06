'use strict';

/**
 * Empresacre.js controller
 *
 * @description: A set of functions called "actions" for managing `Empresacre`.
 */

module.exports = {

  /**
   * Retrieve empresacre records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.empresacre.search(ctx.query);
    } else {
      return strapi.services.empresacre.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a empresacre record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.empresacre.fetch(ctx.params);
  },

  /**
   * Count empresacre records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.empresacre.count(ctx.query);
  },

  /**
   * Create a/an empresacre record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.empresacre.add(ctx.request.body);
  },

  /**
   * Update a/an empresacre record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.empresacre.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an empresacre record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.empresacre.remove(ctx.params);
  }
};
