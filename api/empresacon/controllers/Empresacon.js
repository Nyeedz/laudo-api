'use strict';

/**
 * Empresacon.js controller
 *
 * @description: A set of functions called "actions" for managing `Empresacon`.
 */

module.exports = {

  /**
   * Retrieve empresacon records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.empresacon.search(ctx.query);
    } else {
      return strapi.services.empresacon.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a empresacon record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.empresacon.fetch(ctx.params);
  },

  /**
   * Count empresacon records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.empresacon.count(ctx.query);
  },

  /**
   * Create a/an empresacon record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.empresacon.add(ctx.request.body);
  },

  /**
   * Update a/an empresacon record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.empresacon.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an empresacon record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.empresacon.remove(ctx.params);
  }
};
