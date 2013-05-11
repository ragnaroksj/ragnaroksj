<?php
require("../../../wp-blog-header.php");

$postHtml ="";
$offset = $_POST["offset"];
$args = array(
	'posts_per_page' => 5,
	'offset'		 => $offset*5,
	'cat'			 => "-2"
	);
$posts_array = get_posts( $args );
$i = 0;
foreach( $posts_array as $post){
	$postHtml .= '<div onclick="ragnaroksj.showArticle('.get_the_ID().",".$i.')" class="item article-'.$post->ID.'-item-'.$i++.'">
						<div class="thumbnail">'.get_the_post_thumbnail($post->ID,array(60,60)).'</div>
						<div class="title-excerpt">
							<div class="title">'.$post->post_title.'</div>
							<div class="excerpt">'.$post->post_excerpt.'</div>
							<div class="date">
								<div class="month">'.date("M",$post->post_date).'</div>
								<div class="day">'.date("d", $post->post_date).'</div>
							</div>
						</div>
						<div class="clear content"></div>
				  </div>';

}

echo $postHtml;
?>