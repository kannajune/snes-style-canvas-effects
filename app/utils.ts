export function getCanvas(id: string): any {
  let c = <HTMLCanvasElement>document.getElementById(id);
  let $: CanvasRenderingContext2D = c.getContext('2d');
  let w: number = c.width = 400;
  let h: number = c.height = 550;

  return { c, $, w, h };
}

export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function Sin(n: number, angle: number, arc: number, plus: boolean): number {
  return plus ? n + Math.sin(angle) * arc : n - Math.sin(angle) * arc;
}

export function Cos(n: number, angle: number, arc: number, plus: boolean): number {
  return plus ? n + Math.cos(angle) * arc : n - Math.cos(angle) * arc;
}
