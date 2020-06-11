export default function(GAME){
    const m = GAME.mouse
    const p = GAME.entities.get('player')
    if (m.lmb.state)
        m.listen()
        p.set_destination(m.x, m.y)
    //TODO:
    if (m.rmb.state){}
}