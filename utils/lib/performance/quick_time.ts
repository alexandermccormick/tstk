/**
 * A very basic timer for measuring the time it takes to do something
 *
 * @example Usage
 * ```ts
 * import { QuickTime } from "@tstk/utils";
 *
 * const qt = new QuickTime("some action");
 *
 * await someFuncToTime();
 *
 * qt.log(); // Prints: "some action completed in 0.8996999999999534s"
 * ```
 *
 * @module
 */

/**
 * A very basic timer for measuring the time it takes to do something
 *
 * @example Usage
 * ```ts
 * import { QuickTime } from "@tstk/utils";
 *
 * const qt = new QuickTime("some action");
 *
 * await someFuncToTime();
 *
 * qt.log(); // Prints: "some action completed in 0.8996999999999534s"
 * ```
 */
export class QuickTime {
  private startLabel: string;
  private endLabel: string;

  constructor(private name: string) {
    this.startLabel = `${name} start`;
    this.endLabel = `${name} end`;

    performance.mark(this.startLabel);
  }

  log() {
    performance.mark(this.endLabel);
    const { duration } = performance.measure(
      this.name,
      this.startLabel,
      this.endLabel,
    );
    console.log(`${this.name} completed in ${duration / 1000}s`);
  }
}
