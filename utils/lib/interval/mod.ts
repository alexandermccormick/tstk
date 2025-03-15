/**
 * A Utility class for managing intervals
 */
export class Interval {
  private args: Parameters<typeof setInterval>;
  private interval?: ReturnType<typeof setInterval>;

  constructor(...args: Parameters<typeof setInterval>) {
    this.args = args;
  }

  /**
   * Checks if interval is currently running.
   */
  get isActive(): boolean {
    return this.interval !== undefined;
  }

  /**
   * Initializes the interval;
   */
  start() {
    if (!this.isActive) {
      this.interval = setInterval(...this.args);
    }
  }

  /**
   * Cancels the interval
   */
  stop() {
    if (this.isActive) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }
}
