export const PORT = Deno.env.get("MODE_DEV") === "True" ? 9011 : 3000;
