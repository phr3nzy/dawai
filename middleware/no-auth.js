export default function(ctx) {
  if (ctx.store.getters['auth/user']) {
    ctx.redirect('/')
  }
}
