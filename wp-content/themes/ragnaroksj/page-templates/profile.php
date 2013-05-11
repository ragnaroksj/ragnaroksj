<?php
/**
 * Template Name: profile
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
					},800,function(){
						jQuery(".profile-frame").animate({
							opacity : 1
						},800,function(){
							jQuery(".resource").animate({
								opacity : 1
							},1000,function(){
								ragnaroksj.progressBar();	
							});
						});
					});
				}

			</script>
			<?php
				$pageId = 80;
				$page = get_page( $pageId ); 
				echo $page->post_content;
			?>
			
		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>
