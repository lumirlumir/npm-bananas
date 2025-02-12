/**
 * @fileoverview `description`s used in `commander` for `bananass` CLI.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { defaultConfigObject as dco } from '../conf/index.js';

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

export const build = `build and create bundled files using webpack and esbuild from the \`${dco.entryDir}\` directory and outputs them to the \`${dco.outDir}\` directory`;
