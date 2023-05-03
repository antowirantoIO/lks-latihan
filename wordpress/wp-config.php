<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_database' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'NCU1UlUP#%`g)AA1`ddWk=J?%2ztPu7>W#P!~fO=>-aJ?~$9+-y:2 ld*#xXAY5I' );
define( 'SECURE_AUTH_KEY',  '*y;)Gy{sr+:TZ{,PZ*BVI9p8/g{8b_I<H)vTDx}qDeyHN2&`rrea0j.,pTnBg>O3' );
define( 'LOGGED_IN_KEY',    '=^Y6+vL<}-,ZkwCM9 U#Noe{;+KJ4IeWV+@H~Bi1:P]IYKNCJewZ7<2K52I8Gofh' );
define( 'NONCE_KEY',        'j=[@J^EFt1 ,}PTW27~-aS[0N;]fyr%&u&R0+hsL<;AYQ1_5S[|w er!ZOs?ti~8' );
define( 'AUTH_SALT',        'NHZ$Bu{yj:|0G8bfz2cLGCx{50I}G->7PkZS00+y:6<QGZsKa;@F2)61coDsfhGI' );
define( 'SECURE_AUTH_SALT', 'VVa~9-c[MF5asZ4>6@q|j:[i<|=8}$%`fTJhUCwUD-P<A!oWNf2/wob]Lbs|bMt|' );
define( 'LOGGED_IN_SALT',   '@k#sYke|Kfn!tF6uUQxXp!xh?&xR:wtzcTAWM)B]ISv[r{erz:k#YX-$F{)Vr,3z' );
define( 'NONCE_SALT',       'z5|Xq!qa7/*iO-uS =%Tv~u/L5,20F306}oh~+3Qx.T<C[7cA-vm_`&wJ?*88.c&' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
