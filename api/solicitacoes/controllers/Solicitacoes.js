'use strict';

/**
 * Solicitacoes.js controller
 *
 * @description: A set of functions called "actions" for managing `Solicitacoes`.
 */

module.exports = {

  /**
   * Retrieve solicitacoes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.solicitacoes.search(ctx.query);
    } else {
      return strapi.services.solicitacoes.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a solicitacoes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.solicitacoes.fetch(ctx.params);
  },

  /**
   * Count solicitacoes records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.solicitacoes.count(ctx.query);
  },

  /**
   * Create a/an solicitacoes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.solicitacoes.add(ctx.request.body);
  },

  /**
   * Update a/an solicitacoes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.solicitacoes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an solicitacoes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.solicitacoes.remove(ctx.params);
  }
};
