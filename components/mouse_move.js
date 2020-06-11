export default GAME => {
    const m = GAME.entities.get('mouse')
    const p = GAME.entities.get('player')
    if (m.lmb.state)
        p.set_destination(m.x, m.y)
    
    //TODO:
    if (m.rmb.state){}
}