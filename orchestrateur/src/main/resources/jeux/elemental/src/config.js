module.exports = {
    /**
     * Game settings
     */
    GAME_WIDTH: 800,
    GAME_HEIGHT: 600,
    DOM_PARENT: 'main',

    TILE_WIDTH: 70,
    TILE_HEIGHT: 70,
    GRAVITY: 20,
    MOVEMENT_VEL: 210,
    JUMP_VEL: 500,

    CLOUD_MOVE_OFFSET: 1000,
    CLOUD_MOVE_TIME: 30000,

    MAX_PARTICLES: 250,
    PARTICLE_X_OFFSET: 45,
    PARTICLE_Y_OFFSET: 10,

    ELEM_GRAVITY: 3,
    ITEM_FADE_TIME: 1000,
    ITEM_ACQUIRE_OFFSET: 25,
    ITEM_DROP_VEL: -100,

    BLOCK_FADE_TIME: 1000,

    LEVEL_FADEIN_TIME: 1000,
    LEVEL_FADEOUT_TIME: 500,

    MUSIC_FADE_INCR: 0.0025,

    /**
     * Asset settings
     */
    PLAYER_BOUND_WIDTH: 30,
    PLAYER_BOUND_HEIGHT: 75,
    PLAYER_BOUND_H_OFFSET: 10,

    FLOATING_TILES: [2, 14, 26, 41, 44, 46, 53, 56, 58, 65, 68, 70, 71, 75, 77, 80, 82, 87, 99, 111, 117, 119, 126, 145],
    UPWARD_SLOPE_TILES: [29, 32, 34, 42, 63, 105],
    DOWNWARD_SLOPE_TILES: [5, 8, 10, 30, 39, 95],
    BACKGROUND_TILES: [1, 6, 13, 18, 19, 21, 25, 31, 33, 37, 40, 45, 52, 57, 64, 69, 76, 81, 149],

    GOAL_TILE: 57
};
