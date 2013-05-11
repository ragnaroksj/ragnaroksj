<?php get_header(); ?>

	<div id="primary" class="site-content">
		<div id="content" role="main">
			
			<div id="left-item" class="page-1-<?php echo getTotalPage();?>-1">
				<div class="item-frame" style="display:none">
					<?php  query_posts(array('posts_per_page'=> 5, 'cat'=>'-2'));?>
					<?php if(have_posts()): $i = 0;?>
					<?php while(have_posts()): the_post(); ?>
						<?php 
							$categories = get_the_category(get_the_ID()); 
						?>

						<div onclick="ragnaroksj.showArticle(<?php echo get_the_ID().",".$i.",'".$categories[0]->cat_name."'";?>)" class="item article-<?php echo get_the_ID()?>-item-<?php echo $i++?>">
							<div class="thumbnail"><?php echo get_the_post_thumbnail(get_the_ID(),array(60,60))?></div>
							<div class="title-excerpt">
								<div class="title"><?php the_title();?></div>
								<div class="date">
									<div class="month"><?php echo get_the_date("M") ?></div>
									<div class="day"><?php echo get_the_date("d");?></div>
								</div>
							</div>
							<div class="clear content"></div>
						</div>
					<?php endwhile; ?>
				</div>
				<div class="view-more pagination">
					<a class="previous-disabled" href='javascript:void(0)' onclick='ragnaroksj.getLess()'>PREVIOUS</a>
					<a class="next" href="javascript:void(0)" onclick="ragnaroksj.getMore();">NEXT</a>
				</div>
				<?php else: ?>
					<div>No Posts</div>
				<?php endif;?>

			</div><!-- #left-item -->

			<div id="right-item" class="page-content">

			</div><!--#right-item-->

		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>