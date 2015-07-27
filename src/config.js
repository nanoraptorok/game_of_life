/**
 * Game of Life implementation using vanilla JavaScript
 * Copyright (C) Artem Devlysh, 2015
 */

/**
 * @module app
 * @submodule config
 */
define(function () {
  return {
    STEP: 0,
    UNIVERSE_WIDTH: 121,
    UNIVERSE_HEIGHT: 81,
    CELL_WIDTH: 6,
    CELL_HEIGHT: 6,
    BORDER_WIDTH: 1,
    MIN_NEIGHBORS_TO_LIVE: 2,
    MAX_NEIGHBORS_TO_LIVE: 3,
    NEIGHBORS_TO_BE_BORN: 3,
    AGE_COLOR_MULTIPLYER: 10,
    DEATH_COUNT_WITHRAW: 0.2,
    ALIVE_NEIGHBORS_COLOR_MULTIPLYER: 3,
    DEAD_COLOR_MULTIPLYER: 10,
    TIME_INTERVAL: 40,
    ALIVE_MULTI_COLOR_THRESHOLD : 100,
    DEAD_MULTI_COLOR_THRESHOLD : 255,
    ALIVE_COLOR: 'black',
    DEAD_COLOR: 'white'
  };
});