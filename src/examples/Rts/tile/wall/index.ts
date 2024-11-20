import p5 from "p5"
import { Env } from "../../env"

// 地形-墙
export class Wall {
  p: p5
  env: Env
  x: number = 0
  y: number = 0

  constructor(p: p5, env: Env, x: number, y: number) {
    this.p = p
    this.env = env

	this.x = x
	this.y = y
  }
  
  draw() {
    this.p.stroke(0, 0, 0)
	this.p.fill(0, 0, 0)
	this.p.rect(this.x, this.y, this.env.gridSize, this.env.gridSize)
  }
}
