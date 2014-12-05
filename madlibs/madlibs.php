<?php

/**
* Plugin Name: Mad Libs
* Plugin URI: http://www.madlibs.info
* Description: A Wordpress based Mad Libs game
* Version: 1.0
* Author: Delta Digital Web Solutions
* Author URI: http://www.deltadigital.ca
* License: GPL2

*/

function madlib($text)
{
	
	$ze_uri = plugins_url();
	echo '<script type="text/javascript" src="'.$ze_uri.'/madlibs/madlibs.js"></script>';
	
	//echo '<script type="text/javascript" src="http://deltadigital.ca/wellness/wp-content/plugins/madlibs/madlibs.js"></script>';
	
	//ftp://u44778705-dd@www.deltadigital.ca/wellness/wp-content/plugins/madlibs/madlibs.js
	
	
	
	$oWordHere1 = $_GET["oWordPhp1"];
	$nWordHere1 = $_GET["nWordPhp1"];
	
	$oWordHere2 = $_GET["oWordPhp2"];
	$nWordHere2 = $_GET["nWordPhp2"];
	
	$oWordHere3 = $_GET["oWordPhp3"];
	$nWordHere3 = $_GET["nWordPhp3"];
	
	$oWordHere4 = $_GET["oWordPhp4"];
	$nWordHere4 = $_GET["nWordPhp4"];
	
	$text = str_replace($oWordHere1,$nWordHere1,$text);
	$text = str_replace($oWordHere2,$nWordHere2,$text);
	$text = str_replace($oWordHere3,$nWordHere3,$text);
	$text = str_replace($oWordHere4,$nWordHere4,$text);
	return $text;
	
}

add_filter('the_content','madlib');
add_filter('the_title','madlib');


// Creating the widget 
class wpb_widget extends WP_Widget {

function __construct() 
{
	parent::__construct(
	// Base ID of your widget
	'madlibs_widget', 

	// Widget name will appear in UI
	__('Madlib Widget', 'madlibs_widget_domain'), 

	// Widget description
	array( 'description' => __( 'Madlib Widget. Replace words to make texts sound funny.', 'wpb_widget_domain' ), ) );
}



// Creating widget front-end
// This is where the action happens
public function widget( $args, $instance ) 
{
	$title = apply_filters( 'widget_title', $instance['title'] );
	
	// before and after widget arguments are defined by themes
	echo $args['before_widget'];
	if ( ! empty( $title ) )
		echo $args['before_title'] . $title . $args['after_title'];

	// This is where you run the code and display the output
	echo __( 'Substitute', 'wpb_widget_domain' );
	?>
		<p><input id="originalWord1" type="text" value=""></p>
		with
		<p><input id="newWord1" type="text" value=""></p>
		AND
		<p><input id="originalWord2" type="text" value=""></p>
		with
		<p><input id="newWord2" type="text" value=""></p>
		AND
		<p><input id="originalWord3" type="text" value=""></p>
		with
		<p><input id="newWord3" type="text" value=""></p>
		AND
		<p><input id="originalWord4" type="text" value=""></p>
		with
		<p><input id="newWord4" type="text" value=""></p>
		
		<p><input type="submit" value="Submit" onclick="replaceW();">&nbsp;
		<input type="submit" value="Reset" onclick="resetUrl();"></p>
	<?php
	
	echo $args['after_widget'];
}
		
// Widget Backend 
public function form( $instance ) 
{
	if ( isset( $instance[ 'title' ] ) ) 
	{
	$title = $instance[ 'title' ];
	}
	else 
	{
	$title = __( 'New title', 'wpb_widget_domain' );
	}
	
// Widget admin form

?>
<p>
<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label> 
<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
</p>
<?php
}
	
// Updating widget replacing old instances with new
public function update( $new_instance, $old_instance ) 
{
	$instance = array();
	$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
	return $instance;
}
} // Class wpb_widget ends here

// Register and load the widget
function wpb_load_widget() 
{
	register_widget( 'wpb_widget' );
}

add_action( 'widgets_init', 'wpb_load_widget' );