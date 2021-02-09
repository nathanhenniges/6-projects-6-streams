export default function ({ store, redirect }) {
  if (!store.state.game.status && !store.state.game.ended) {
    return redirect('/')
  }
}
