<script lang="ts">
	let { data } = $props();
</script>

<section
	class="min-h-screen md:flex text-center justify-center items-center bg-gray-100 bg-cover bg-center bg-no-repeat py-12 transition-all duration-500"
	style="background-image: url('https://t4.ftcdn.net/jpg/06/27/45/45/360_F_627454572_sSfrnEK1DYnSJgSHR5dJJ0KrpzOxCJXY.jpg');"
>
	<div class="mt-20 md:mt-0 flex flex-col p-4 md:pl-32 gap-4 justify-center items-center mx-auto">
		<h1 class="font-bold text-4xl md:text-6xl text-white lg:w-[800px]">Unical Radio Podcasts</h1>
		<p class="text-gray-200 font-semibold text-xl text-break-words lg:w-[620px]">
			Listen to our on-demand content anytime, anywhere. From educational discussions to
			entertainment, catch up on what you missed and discover something new.
		</p>
	</div>
</section>

<section class="sm:flex gap-12 space-y-7 sm:space-y-0 p-4 sm:p-12 bg-gray-200">
	<div class="text-start space-y-6">
		<h3 class="font-bold text-xl sm:text-3xl text-blue-700">Featured Podcasts</h3>
		<h2 class="font-bold text-4xl sm:text-5xl sm:w-[400px]">Campus Conversations</h2>
		<h3 class="text-xl sm:text-2xl text-black">Hosted By Sarah</h3>
		<p class="text-gray-500 text-2xl">
			Deep dive into student life, academic challenges, and success stories from the UNICAL
			community. This week, we discuss mental health awareness and student wellness programs.
		</p>

		<button class="flex gap-4 bg-blue-700 text-white p-4 px-8 font-bold sm:text-2xl"
			>Listen Now <span>
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
					/></svg
				>
			</span></button
		>
	</div>

	<div class="w-full">
		<img
			class="sm:w-full sm:h-[500px] rounded-sm"
			src="https://static.vecteezy.com/system/resources/thumbnails/046/519/846/small/professional-microphone-studio-podcast-stream-interview-platform-radio-with-micrecording-voice-singing-in-bright-record-studio-audio-quality-equipment-content-music-media-entertainment-photo.jpg"
			alt=""
		/>
	</div>
</section>

<hr class="border mb-8 border-gray-300" />

<section
	class="py-8 p-4 sm:flex gap-5 items-center text-center justify-center space-y-5 sm:space-y-0"
>
	<button class="bg-blue-700 text-lg p-3 sm:p-5 text-white w-[200px]">All Events</button>
	<button class="border-2 border-blue-700 text-lg p-3 sm:p-4 text-blue-700 w-[200px]"
		>Live Broadcasts</button
	>
	<button class="border-2 border-blue-700 text-lg p-3 sm:p-4 text-blue-700 w-[200px]"
		>Campus Events</button
	>
	<button class="border-2 border-blue-700 text-lg p-3 sm:p-4 text-blue-700 w-[200px]"
		>Interviews</button
	>
	<button class="border-2 border-blue-700 text-lg p-3 sm:p-4 text-blue-700 w-[200px]"
		>Community</button
	>
</section>

<section class="bg-white py-14 text-center">
	<h2 class="text-2xl sm:text-4xl font-bold mt-2 mb-4">Featured Podcasts</h2>
	<p class="text-gray-500 text-lg mb-3">Listen to our most popular podcast series</p>
	<div class="grid md:grid-cols-2 gap-6 justify-center px-4 lg:px-20">
		{#each data.posts as post}
			<div class="rounded-lg shadow-sm p-4 text-left flex flex-col">
				<img
					src={post.image}
					alt={post.alt}
					class="rounded-md mb-4 w-full object-cover md:h-[380px]"
				/>
				<div class="flex-grow">
					<h4 class="font-bold text-gray-800 sm:text-2xl">{post.title}</h4>
					<p class="text-gray-500 mt-2 sm:text-lg font-semibold">
						Hosted by: {post.author}
					</p>
				</div>

				<div class="flex justify-between mt-3 text-gray-600">
					<div class="flex gap-2 items-center">
						<span class="text-blue-700"
							><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
								><g fill="none"
									><path
										d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
									/><path
										fill="currentColor"
										d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1"
									/></g
								></svg
							></span
						>
						<p class="font-semibold">{post.time}</p>
					</div>

					<div class="flex gap-2 items-center">
						<span class="text-red-70"
							><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M2 7.75A2.75 2.75 0 0 1 4.75 5h12.5A2.75 2.75 0 0 1 20 7.75v5.5A2.75 2.75 0 0 1 17.25 16H4.75A2.75 2.75 0 0 1 2 13.25zM4.75 6.5c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25zM4.797 17a2.75 2.75 0 0 0 2.45 1.5h10a5.25 5.25 0 0 0 5.25-5.25v-3A2.75 2.75 0 0 0 21 7.8v5.45A3.75 3.75 0 0 1 17.25 17zM7.25 9.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z"
								/></svg
							></span
						>
						<p class="flex gap-1 font-semibold"><span>Episode</span>{post.episode}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="pt-8">
		<button class="border-2 border-blue-700 font-bold text-blue-700 p-4 text-xl w-[220px]"
			>SEE MORE</button
		>
	</div>
</section>

<hr class="border mb-8 border-blue-700" />

<section class="sm:flex space-y-6 sm:space-y-0 text-center items-center justify-center mt-8 gap-12">
	<div>
		<h3 class="font-bold sm:text-5xl">150+</h3>
		<p class="text-gray-500 sm:text-2xl">Episodes Available</p>
	</div>
	<div>
		<h3 class="font-bold sm:text-5xl">20+</h3>
		<p class="text-gray-500 sm:text-2xl">Podcasts</p>
	</div>
	<div>
		<h3 class="font-bold sm:text-5xl">4.8</h3>
		<p class="text-gray-500 sm:text-2xl">Average Rating</p>
	</div>
	<div>
		<h3 class="font-bold sm:text-5xl">45k+</h3>
		<p class="text-gray-500 sm:text-2xl">Listeners Reached</p>
	</div>
</section>
<hr class="border border-blue-500 text-blue-700 h-[50px] bg-blue-700 mt-12" />
