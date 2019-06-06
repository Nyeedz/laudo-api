'use strict';

/**
 * Laudo.js controller
 *
 * @description: A set of functions called "actions" for managing `Laudo`.
 */

module.exports = {

  /**
   * Retrieve laudo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.laudo.search(ctx.query);
    } else {
      return strapi.services.laudo.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a laudo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.laudo.fetch(ctx.params);
  },

  /**
   * Count laudo records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.laudo.count(ctx.query);
  },

  /**
   * Create a/an laudo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.laudo.add(ctx.request.body);
  },

  /**
   * Update a/an laudo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.laudo.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an laudo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.laudo.remove(ctx.params);
  }
};
