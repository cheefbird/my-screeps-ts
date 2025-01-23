export namespace Config {
  // MARK: - Core Config
  /**
   * Enable for verbose logging
   * @type {boolean}
   */
  export const VERBOSE: boolean = true;

  // MARK: - Gameplay Config
  /**
   * @type {number}
   */
  export const MAX_HARVESTERS_PER_SOURCE: number = 4;

  /**
   * Default amount of minimal `ticksToLive` Creep can have before it renews.
   * Just a default, doesn't cover all Creeps
   * @type {number}
   */
  export const DEFAULT_MIN_LIFE_BEFORE_NEEDS_REFILL: number = 700;
}
