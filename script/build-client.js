import { build as viteBuild } from "vite";

async function buildClient() {
  console.log("building client only for Vercel...");
  await viteBuild();
  console.log("client build completed!");
}

buildClient().catch((err) => {
  console.error(err);
  process.exit(1);
});
