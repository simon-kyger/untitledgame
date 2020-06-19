const check_collision = (e1, e2) => {
  return (e1.x < e2.x + e2.width &&
          e1.x + e1.width > e2.x &&
          e1.y < e2.y + e2.height &&
          e1.y + e2.height > e2.y)
}

export default function(GAME){
  const collidable_entities = [...GAME.entities].map(([name, value]) => ({ name, value })).filter(e => e.value.collidable)
  collidable_entities.forEach(entity => {
    if (this.collidable && check_collision(this, entity.value)){
      //perform collision for this entity
      console.log('hi')
    }
  })
}