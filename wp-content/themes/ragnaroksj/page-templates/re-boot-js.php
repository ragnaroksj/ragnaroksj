<?php
/**
 * Template Name: re-boot-js
 *
 * Description: Twenty Twelve loves the no-sidebar look as much as
 * you do. Use this page template to remove the sidebar from any page.
 *
 * Tip: to remove the sidebar from all posts and pages simply remove
 * any active widgets from the Main Sidebar area, and the sidebar will
 * disappear everywhere.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

	<div id="primary" class="site-content">
		<div id="content" role="main">
			<script type="text/javascript">
				jQuery(document).ready(function(){
					setTimeout(loading,1600);
				});

				function loading(){
					jQuery(".header").animate({
						opacity : 1
					},800);
				}

			</script>
			<h1>Reboot Javascript - Learning JS Notebook </h1>
			<ul>
			<?php 
				$args = array(
					'category' => '5'
				);
				$posts_array = get_posts($args);
			?>

			<?php foreach ($posts_array as $post): setup_postdata($post);?>
				<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
			<?php endforeach; ?>
			</ul>

		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>
