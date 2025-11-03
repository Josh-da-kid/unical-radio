<script lang="ts">
	let { data } = $props();
</script>

<section
	class="min-h-screen md:flex text-center justify-center items-center bg-gray-100 bg-cover bg-center bg-no-repeat py-12 transition-all duration-500"
	style="background-image: url('https://t4.ftcdn.net/jpg/06/27/45/45/360_F_627454572_sSfrnEK1DYnSJgSHR5dJJ0KrpzOxCJXY.jpg');"
>
	<div class="mt-20 md:mt-0 flex flex-col p-4 md:pl-32 gap-4 justify-center items-center mx-auto">
		<h1 class="font-bold text-4xl md:text-6xl text-white lg:w-[800px]">
			Breaking News From Around The Globe
		</h1>
		<p class="text-gray-200 font-semibold text-xl text-break-words lg:w-[620px]">
			Stay informed with the latest developments, policy changes, and important announcements from
			across the world
		</p>
	</div>
</section>

<div class="flex flex-col gap-3 py-8 px-8 md:px-14">
	<h2 class="font-bold text-3xl sm:text-5xl">Latest News & Update</h2>
	<hr class="border-2 border-blue-700 text-blue-700 bg-blue-700" />
</div>

<section class="bg-white py-14">
	<div class="max-w-6xl mx-auto px-4 lg:px-10">
		<!-- Grid -->
		<div class="grid md:grid-cols-2 gap-10">
			{#each data.posts as post}
				<div
					class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
				>
					<div class="relative">
						<!-- Date badge -->
						<div
							class="absolute top-3 left-3 bg-white/50 rounded-md px-3 py-2 text-center text-gray-800"
						>
							<p class="text-2xl w-[60px]">{post.date}</p>
						</div>

						<!-- Image -->
						<img src={post.image} alt={post.alt} class="w-full h-56 object-cover" />
					</div>

					<!-- Text content -->
					<div class="p-6">
						<h4 class="font-semibold text-xl text-gray-800 leading-snug mb-2">
							{post.title}
						</h4>
						<p class="text-gray-600 mb-4 text-base">
							{post.excerpt}
						</p>

						<a href={`/info/${post.slug}`} class="text-blue-700 font-semibold underline">
							Read More
						</a>
					</div>
				</div>
			{/each}
		</div>

		<!-- Load More button -->
		<div class="flex justify-center mt-12">
			<button
				class="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg px-6 py-3 rounded-lg transition-colors duration-200"
			>
				Load More News
			</button>
		</div>
	</div>
</section>
<hr class="border border-blue-500 text-blue-700 h-[50px] bg-blue-700 mt-12" />
