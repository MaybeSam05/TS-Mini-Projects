import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();

function getProjects() {
  return readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter(
      (name) =>
        existsSync(join(root, name, "README.md")) &&
        existsSync(join(root, name, "solution.ts"))
    )
    .sort();
}

function printUsage() {
  console.log("Usage:");
  console.log("  npm run list");
  console.log("  npm run run -- <project-folder>");
  console.log("  npm run check -- <project-folder>");
  console.log("  npm run check:all");
}

const [command, projectName] = process.argv.slice(2);
const projects = getProjects();

if (command === "list") {
  console.log("Available projects:");

  for (const project of projects) {
    console.log(`- ${project}`);
  }

  process.exit(0);
}

if (!command || !projectName) {
  printUsage();
  process.exit(1);
}

if (!projects.includes(projectName)) {
  console.error(`Unknown project: ${projectName}`);
  console.error("Run `npm run list` to see valid project names.");
  process.exit(1);
}

const solutionPath = join(projectName, "solution.ts");
const isWindows = process.platform === "win32";

if (command === "run") {
  const result = spawnSync("tsx", [solutionPath], {
    stdio: "inherit",
    shell: isWindows
  });

  process.exit(result.status ?? 1);
}

if (command === "check") {
  const result = spawnSync("tsc", ["--noEmit", "--pretty", "false", solutionPath], {
    stdio: "inherit",
    shell: isWindows
  });

  process.exit(result.status ?? 1);
}

printUsage();
process.exit(1);
