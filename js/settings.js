var CANVAS_WIDTH = 1920;
var CANVAS_HEIGHT = 1080;

var EDGEBOARD_X = 256;
var EDGEBOARD_Y = 84;

var FPS = 60;
var FPS_TIME      = 1000/FPS;
var DISABLE_SOUND_MOBILE  = false;
var DISABLE_SOUND_DESKTOP = false;
var LOCALSTORAGE_STRING = "slot_zeus_treasure_";
var FONT_GAME_1 = "robotoblack";

var STATE_LOADING = 0;
var STATE_MENU    = 1;	
var STATE_GAME    = 2;

var GAME_STATE_IDLE         = 0;
var GAME_STATE_SPINNING     = 1;
var GAME_STATE_SHOW_ALL_WIN = 2;
var GAME_STATE_SHOW_WIN     = 3;
var GAME_STATE_BONUS        = 4;

var REEL_STATE_START   = 0;
var REEL_STATE_MOVING = 1;
var REEL_STATE_STOP    = 2;

var SPIN_BUT_STATE_SPIN = "spin";
var SPIN_BUT_STATE_STOP = "stop";
var SPIN_BUT_STATE_AUTOSPIN = "autospin";
var SPIN_BUT_STATE_DISABLE = "disable";
var SPIN_BUT_STATE_FREESPIN = "freespin";
var SPIN_BUT_STATE_SKIP = "skip";

var ON_MOUSE_DOWN = 0;
var ON_MOUSE_UP   = 1;
var ON_MOUSE_OVER = 2;
var ON_MOUSE_OUT  = 3;
var ON_DRAG_START = 4;
var ON_DRAG_END   = 5;
var ON_END_BIG_WIN = 6;
var ON_BUT_YES_DOWN = 7;

var BONUS_BUTTON_1 = "up_left";
var BONUS_BUTTON_2 = "center_left";
var BONUS_BUTTON_3 = "down_left";
var BONUS_BUTTON_4 = "up_right";
var BONUS_BUTTON_5 = "center_right";
var BONUS_BUTTON_6 = "down_right";

var REEL_OFFSET_X = 320;
var REEL_OFFSET_Y = 150;
var START_REEL_OFFSET_X;
var START_REEL_OFFSET_Y;

var NUM_REELS = 5;
var NUM_ROWS = 3;
var NUM_SYMBOLS = 10;
var WILD_SYMBOL = 7;
var BONUS_SYMBOL = 9;
var FREESPIN_SYMBOL = 8;

var NUM_PAYLINES = 20;
var SYMBOL_WIDTH = 240;
var SYMBOL_HEIGHT = 230;
var SYMBOL_ANIM_WIDTH = 480;
var SYMBOL_ANIM_HEIGHT = 460;
var WIN_BIG_ANIM_WIDTH = 564;
var WIN_BIG_ANIM_HEIGHT = 542;
var SPACE_BETWEEN_SYMBOLS = 17;
var SPACE_HEIGHT_BETWEEN_SYMBOLS = 0;
var OFFSET_Y_SYMBOLS = 24;
var MAX_FRAMES_REEL_EASE = 24;
var MIN_REEL_LOOPS;
var SUSPANCE_REEL_LOOPS = 5;
var REEL_DELAY;
var REEL_START_Y = 80 -((SYMBOL_HEIGHT +SPACE_HEIGHT_BETWEEN_SYMBOLS )* 3);
var REEL_ARRIVAL_Y =  80 + ((SYMBOL_HEIGHT+SPACE_HEIGHT_BETWEEN_SYMBOLS) * 3);
var TIME_SHOW_WIN;
var TIME_SHOW_ALL_WINS = 2000;
var TIME_SPIN_BUT_CHANGE = 1000;
var TIME_HOLD_AUTOSPIN = 1000;
var MIN_TIME_EFFECT_FREESPIN = 600;
var MAX_TIME_EFFECT_FREESPIN = 3000;
var WIN_PER_BIG_WIN = 25;

var MAX_BET;
var TOTAL_MONEY;
var START_BET;
var COIN_BET;

var BONUS_FREESPIN = 1;
var BONUS_GAME = 2;

var REEL_SCALE = 0.85;

var STATE_BONUS_IDLE = 0;
var STATE_BONUS_KICK = 1;
var STATE_BONUS_WIN = 2;
var STATE_BONUS_LOSE = 3;

var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;
var SOUNDTRACK_VOLUME_IN_GAME  = 1;	
var RESTART_CREDIT;	
var NUM_SPIN_FOR_ADS;