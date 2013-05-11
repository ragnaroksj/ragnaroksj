<?php
require("../../../wp-blog-header.php");

$postHtml ="";
$articleId = $_POST["postId"];
$post = get_post( $articleId );

echo $post->post_content

?>