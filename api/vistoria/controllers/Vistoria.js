'use strict';

/**
 * Vistoria.js controller
 *
 * @description: A set of functions called "actions" for managing `Vistoria`.
 */

module.exports = {

  /**
   * Retrieve vistoria records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.vistoria.search(ctx.query);
    } else {
      return strapi.services.vistoria.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a vistoria record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.vistoria.fetch(ctx.params);
  },

  /**
   * Count vistoria records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.vistoria.count(ctx.query);
  },

  /**
   * Create a/an vistoria record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.vistoria.add(ctx.request.body);
  },

  /**
   * Update a/an vistoria record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.vistoria.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an vistoria record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.vistoria.remove(ctx.params);
  }
};
