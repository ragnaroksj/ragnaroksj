<?php
/**
 * Template Name: Full-width Page Template, No Sidebar
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
					jQuery("iframe").animate({
						opacity : 1
					},5000,function(){
						jQuery(".video-intro").animate({
							opacity : 1,
							marginTop : '10px'
						},2000,function(){
							jQuery(".archive-video-frame").animate({
								height : '225px',
								paddingTop : "20px",
								paddingBottom : "20px"
							},2000);
						});
					});
				});

			</script>
			<?php
				$pageId = 2;
				$page = get_page( $pageId ); 
				echo $page->post_content;
			?>
			
		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>
