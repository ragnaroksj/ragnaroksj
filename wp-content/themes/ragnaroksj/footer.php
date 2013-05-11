	</div><!-- #main .wrapper -->
	<div id="colophon" role="contentinfo">
		<?php if(is_home()): ?>
		<?php
			$postId = 33;
			$musicPost = get_post($postId);

		 ?>
		<div class="player"><?php echo $musicPost->post_content; ?></div>
		<?php endif; ?>
		<div class="copyright">COPYRIGHT@RAGNAROKSJ</div>
		<div class="clear"></div>
	</div><!-- #colophon -->
</div><!-- #page -->
</body>
