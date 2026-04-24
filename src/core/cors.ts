export function applyCors(c: any) {
  c.header("Access-Control-Allow-Origin", "*");
  c.header("Access-Control-Allow-Methods", "GET,OPTIONS");
  c.header("Access-Control-Allow-Headers", "*");
}