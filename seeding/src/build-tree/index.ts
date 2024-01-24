import { buildPassiveTree } from "./tree";
import { SkillTree } from "./types";
import fetch from "cross-fetch";

const PASSIVE_TREE_JSON = {
  "3_23":
    "https://raw.githubusercontent.com/ShestakovAndrew/exile-leveling-russian/main/seeding/src/build-tree/trees/tree.json",
};

export async function buildTemplates() {
  const result = [];
  for (const [version, url] of Object.entries(PASSIVE_TREE_JSON)) {
    const skillTree: SkillTree.Data = await fetch(url).then((x) => x.json());

    const passiveTree = buildPassiveTree(skillTree);

    result.push({
      version,
      passiveTree,
    });
  }

  return result;
}
