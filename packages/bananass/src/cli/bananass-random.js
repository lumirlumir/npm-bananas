/**
 * @fileoverview CLI `random` command.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { warning } from 'bananass-utils-console/theme';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @typedef {import('commander').Command} Command
 */

// --------------------------------------------------------------------------------
// Export
// --------------------------------------------------------------------------------

/**
 * Random: `npx bananass random` command.
 *
 * @param {Command} program The `commander` package's `program`.
 */
export default function random(program) {
  program.command('random').description(warning('TODO: Working in progress...🚧', false));
}
