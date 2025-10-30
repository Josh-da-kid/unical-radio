<script>
	import { onMount } from 'svelte';
	let { data } = $props();
	let currentSlide = $state(0);

	const slides1 = [
		{
			image:
				'https://static.vecteezy.com/system/resources/previews/038/904/795/non_2x/ai-generated-selective-focus-on-professional-boom-arm-microphone-stand-used-for-recording-voice-in-online-podcast-in-home-studio-detail-of-sound-device-equipment-used-for-live-broadcast-on-internet-photo.jpg    ',
			heading: 'Unical Radio Podcasts',
			button: 'Read More',

			text: 'The Intelligent Digital Identity Services (IDIS) modernizes patient identification and staff authentication at UCTH using advanced digital technologies, positioning the hospital as a healthcare innovation leader in Nigeria.'
		},
		{
			image:
				'https://static.vecteezy.com/system/resources/previews/044/650/386/non_2x/ai-generated-professional-studio-microphone-setup-for-quality-sound-recording-photo.jpg',
			heading: 'Another Headline',
			button: 'Turn in Live',
			text: 'This is the text for the second slide. It can be a different length and have different content.'
		},
		{
			image:
				'https://producer.musicradiocreative.com/wp-content/uploads/2012/10/internet-radio.jpg',
			heading: 'A Third and Final Headline',
			button: 'Listen Now',
			text: 'This is the third and final slide in our slideshow. We can add more if we want.'
		}
	];

	const slides = [
		{
			image:
				'https://static.vecteezy.com/system/resources/previews/038/904/795/non_2x/ai-generated-selective-focus-on-professional-boom-arm-microphone-stand-used-for-recording-voice-in-online-podcast-in-home-studio-detail-of-sound-device-equipment-used-for-live-broadcast-on-internet-photo.jpg    ',
			heading: 'Unical Radio Podcasts',
			headline: 'Breaking News',
			location: 'Abuja, Nigeria',
			time: '2 hours ago',
			author: 'Unical News',
			text: 'The Intelligent Digital Identity Services (IDIS) modernizes patient identification and staff authentication at UCTH using advanced digital technologies, positioning the hospital as a healthcare innovation leader in Nigeria.'
		},
		{
			image:
				'https://static.vecteezy.com/system/resources/previews/044/650/386/non_2x/ai-generated-professional-studio-microphone-setup-for-quality-sound-recording-photo.jpg',
			heading: 'Another Headline',
			headline: 'Morning News',
			location: 'Lagos, Nigeria',
			time: '2 hours ago',
			author: 'Unical News',
			text: 'This is the text for the second slide. It can be a different length and have different content.'
		},
		{
			image:
				'https://producer.musicradiocreative.com/wp-content/uploads/2012/10/internet-radio.jpg',
			heading: 'A Third and Final Headline',
			headline: 'Important Notice',
			location: 'Cross River, Nigeria',
			time: '2 hours ago',
			author: 'Unical News',
			text: 'This is the third and final slide in our slideshow. We can add more if we want.'
		}
	];

	onMount(() => {
		const interval1 = setInterval(() => {
			currentSlide = (currentSlide + 1) % slides1.length;
		}, 5000);

		const interval = setInterval(() => {
			currentSlide = (currentSlide + 1) % slides.length;
		}, 5000);

		return () => clearInterval(interval1);
		return () => clearInterval(interval);
	});
</script>

<main class="mb-12">
	<section
		class="min-h-screen md:flex items-center bg-gray-100 w-screen bg-cover bg-center bg-no-repeat py-12 transition-all duration-500"
		style="background-image: url('{slides1[currentSlide].image}');"
	>
		<div class="mt-20 md:mt-0 flex flex-col p-4 sm:pl-32 gap-4">
			<h1 class="font-bold text-4xl md:text-6xl text-white">{slides1[currentSlide].heading}</h1>
			<p class="text-gray-200 font-semibold text-xl text-break-words lg:w-[520px]">
				{slides1[currentSlide].text}
			</p>
			<button class="bg-blue-700 text-white w-fit p-4 text-2xl flex items-center gap-3"
				>{slides1[currentSlide].button}
				{#if slides1[currentSlide].button !== 'Read More'}
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
						/></svg
					>
				{/if}
			</button>
		</div>
	</section>
	<div class="flex justify-center mt-4">
		{#each slides1 as _, i}
			<button
				title="slide"
				class="w-4 h-4 rounded-full mx-2 {currentSlide === i ? 'bg-red-700' : 'bg-gray-300'}"
				onclick={() => (currentSlide = i)}
			></button>
		{/each}
	</div>

	<section
		class="sm:flex space-y-6 sm:space-y-0 text-center items-center justify-center mt-8 gap-12"
	>
		<div>
			<h3 class="font-bold sm:text-5xl">45k+</h3>
			<p class="text-gray-500 sm:text-2xl">Student Connected</p>
		</div>
		<div>
			<h3 class="font-bold sm:text-5xl">93</h3>
			<p class="text-gray-500 sm:text-2xl">Accessibility Rate</p>
		</div>
		<div>
			<h3 class="font-bold sm:text-5xl">24/7</h3>
			<p class="text-gray-500 sm:text-2xl">Live Broadcasting</p>
		</div>
		<div>
			<h3 class="font-bold sm:text-5xl">100%</h3>
			<p class="text-gray-500 sm:text-2xl">Curriculum Aligned</p>
		</div>
	</section>

	<hr class="mt-12 border border-purple-700" />

	<section class="bg-white py-14 text-center">
		<h2 class="text-2xl sm:text-4xl font-bold mt-2 mb-4">Programmes</h2>
		<p class="text-gray-500 text-lg mb-3">
			Carefully curated content designed to inform, educated, and inspire
		</p>
		<div class="grid md:grid-cols-3 gap-6 justify-center px-4 lg:px-20">
			{#each data.posts as post}
				<div class="rounded-lg shadow-sm p-4 text-left flex flex-col">
					<div class="flex justify-between mb-3">
						<h4 class="font-semibold text-gray-800 sm:text-xl">{post.title}</h4>
						<p class="text-blue-700 border border-blue-700">{post.date}</p>
					</div>
					<img
						src={post.image}
						alt={post.alt}
						class="rounded-md mb-4 w-full object-cover md:h-[180px]"
					/>
					<div class="flex-grow">
						<p class="text-gray-500 mt-2 sm:text-xl">
							{post.excerpt}
						</p>
					</div>

					<div class="flex items-center justify-between">
						<a
							href={`/info/${post.slug}`}
							class="flex items-center text-blue-700 sm:text-lg font-bold hover:underline"
							>Learn More <span class="p-4 text-blue-700"
								><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
									><g fill="none"
										><path
											d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
										/><path
											fill="currentColor"
											d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414"
										/></g
									></svg
								></span
							></a
						>

						<div class="flex gap-2 text-gray-500">
							<button title="like"
								><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M5 9v12H1V9zm4 12a2 2 0 0 1-2-2V9c0-.55.22-1.05.59-1.41L14.17 1l1.06 1.06c.27.27.44.64.44 1.05l-.03.32L14.69 8H21a2 2 0 0 1 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21zm0-2h9.03L21 12v-2h-8.79l1.13-5.32L9 9.03z"
									/></svg
								></button
							>

							<button title="comment"
								><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="m13.12 17.023l-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .958 1.755l-4.2 2.29a4 4 0 0 1 0 1.954l4.2 2.29a4 4 0 1 1-.959 1.755M6 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m11-6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
									/></svg
								></button
							>

							<button title="share"
								><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M7 14h10q.425 0 .713-.288T18 13t-.288-.712T17 12H7q-.425 0-.712.288T6 13t.288.713T7 14m0-3h10q.425 0 .713-.288T18 10t-.288-.712T17 9H7q-.425 0-.712.288T6 10t.288.713T7 11m0-3h10q.425 0 .713-.288T18 7t-.288-.712T17 6H7q-.425 0-.712.288T6 7t.288.713T7 8M4 18q-.825 0-1.412-.587T2 16V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v15.575q0 .675-.612.938T20.3 20.3L18 18zm14.85-2L20 17.125V4H4v12zM4 16V4z"
									/></svg
								></button
							>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="flex items-center justify-center gap-4 mt-7">
			<button title="left-slide" class="bg-gray-200 rounded-full p-4 text-blue-700"
				><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M20 12H4m0 0l6-6m-6 6l6 6"
					/></svg
				></button
			>

			<button title="right-slide" class="bg-blue-700 rounded-full p-4 text-white"
				><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><g fill="none"
						><path
							d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
						/><path
							fill="currentColor"
							d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414"
						/></g
					></svg
				></button
			>
		</div>
	</section>

	<section class="bg-gray-50 p-4 sm:p-12 items-center text-center flex flex-col gap-y-5">
		<h2 class="sm:text-5xl font-bold">News and Notices</h2>
		<p class="text-gray-500 text-lg">
			Stay informed with the latest headlines from around the world
		</p>

		<section
			class="rounded-2xl md:w-[1000px] md:h-[400px] md:flex text-start bg-gray-100 w-screen bg-cover bg-center bg-no-repeat py-12 transition-all duration-500"
			style="background-image: url('{slides[currentSlide].image}');"
		>
			<div class="flex flex-col p-4 gap-4 sm:px-12">
				<h3
					class="font-semibold text-lg md:text-xl text-white bg-orange-500 p-2 w-fit rounded-lg px-4"
				>
					{slides[currentSlide].headline}
				</h3>
				<h1 class="font-semibold text-4xl md:text-5xl text-white">
					{slides[currentSlide].heading}
				</h1>
				<p class="text-gray-200 font-semi bold text-xl text-break-words lg:w-[520px]">
					{slides[currentSlide].text}
				</p>

				<div class="flex justify-between mt-3 text-gray-200">
					<div class="flex gap-2 items-center">
						<span class="text-red-700"
							><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
								/></svg
							></span
						>
						<p class="font-semibold">{slides[currentSlide].location}</p>
					</div>

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
						<p class="flex gap-1 font-semibold">{slides[currentSlide].time}</p>
					</div>
					<div class="flex gap-2 items-center">
						<span class="text-orange-500"
							><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M2 7.75A2.75 2.75 0 0 1 4.75 5h12.5A2.75 2.75 0 0 1 20 7.75v5.5A2.75 2.75 0 0 1 17.25 16H4.75A2.75 2.75 0 0 1 2 13.25zM4.75 6.5c-.69 0-1.25.56-1.25 1.25v5.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-5.5c0-.69-.56-1.25-1.25-1.25zM4.797 17a2.75 2.75 0 0 0 2.45 1.5h10a5.25 5.25 0 0 0 5.25-5.25v-3A2.75 2.75 0 0 0 21 7.8v5.45A3.75 3.75 0 0 1 17.25 17zM7.25 9.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z"
								/></svg
							></span
						>
						<p class="flex gap-1 font-semibold">{slides[currentSlide].author}</p>
					</div>
				</div>
			</div>
		</section>
		<a href={`/info/`} class="flex items-center text-blue-700 sm:text-lg font-bold hover:underline"
			>See all News <span class="p-4 text-blue-700"
				><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><g fill="none"
						><path
							d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
						/><path
							fill="currentColor"
							d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414"
						/></g
					></svg
				></span
			></a
		>
	</section>

	<section class="bg-white py-14 text-center">
		<h2 class="text-2xl sm:text-4xl font-bold mt-2 mb-4">Featured Podcasts</h2>
		<p class="text-gray-500 text-lg mb-3">Listen to our most popular podcast series</p>
		<div class="grid md:grid-cols-3 gap-6 justify-center px-4 lg:px-20">
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
	</section>

	<section class="bg-gray-50 p-4 sm:p-12 items-center text-center flex flex-col gap-y-5">
		<h2 class="sm:text-5xl font-bold">News and Notices</h2>
		<p class="text-gray-500 text-lg">
			Stay informed with the latest headlines from around the world
		</p>

		<section class="flex flex-col sm:grid sm:grid-cols-2 gap-16">
			<div class="flex flex-col gap-6">
				<div class="text-start flex flex-col gap-3">
					<img
						class="sm:h-[600px] sm:w-[550px]"
						src="https://media.istockphoto.com/id/523445951/photo/old-fashion-radio.jpg?s=612x612&w=0&k=20&c=anGY1XmzuxxJ19BHjgEbcBhH4KN-SdfSKgespd8QMVY="
						alt=""
					/>
					<p class="text-gray-500">
						Capturing moments with state-of-the-art digital imaging technology.
					</p>
					<h3 class="font-bold sm:w-[430px]">Advanced Digital photography & videography</h3>
				</div>
				<div class="text-start flex flex-col gap-3">
					<img
						class="sm:h-[350px] sm:w-[550px]"
						src="https://t3.ftcdn.net/jpg/05/10/75/30/360_F_510753092_f4AOmCJAczuGgRLCmHxmowga2tC9VYQP.jpg"
						alt=""
					/>
					<p class="text-gray-500 sm:w-[490px]">
						A dynamic hub for movie, film, and documnetary production, collaborating with BBC
						Studios, Tyler Perry Studios, and other media powerhouses.
					</p>
					<h3 class="font-bold sm:w-[430px]">UNICAL EMNet Studios (UNICAL Cinema)</h3>
				</div>
			</div>

			<div class="flex flex-col gap-6">
				<div class="text-start flex flex-col gap-3">
					<img
						class="sm:h-[400px] sm:w-[550px]"
						src="https://thumbs.dreamstime.com/b/black-white-old-transistor-radio-43739673.jpg"
						alt=""
					/>
					<p class="text-gray-500">
						Revolutionizing education with intelligent digital learning solutions.
					</p>
					<h3 class="font-bold sm:w-[430px]">AcademicIQ Digital Education System</h3>
				</div>

				<div class="text-start flex flex-col gap-3">
					<img
						class="sm:h-[450px] sm:w-[550px]"
						src="https://www.shutterstock.com/image-photo/black-white-condenser-microphone-on-260nw-1039854886.jpg"
						alt=""
					/>
					<p class="text-gray-500 sm:w-[490px]">
						Anext generation music production platform in strategic partnership with global music
						giants, providing an elite space for nurturing adn launching world-class talent.
					</p>
					<h3 class="font-bold sm:w-[430px]">UNICAL SoundByte</h3>
				</div>
			</div>
		</section>

		<a href={`/info/`} class="flex items-center text-blue-700 sm:text-lg font-bold hover:underline"
			>See all Initiative <span class="p-4 text-blue-700"
				><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><g fill="none"
						><path
							d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
						/><path
							fill="currentColor"
							d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414"
						/></g
					></svg
				></span
			></a
		>
	</section>

	<section class="sm:flex gap-12">
		<div class="w-full">
			<img
				class="sm:w-full sm:h-[550px]"
				src="https://static.vecteezy.com/system/resources/thumbnails/046/519/846/small/professional-microphone-studio-podcast-stream-interview-platform-radio-with-micrecording-voice-singing-in-bright-record-studio-audio-quality-equipment-content-music-media-entertainment-photo.jpg"
				alt=""
			/>
		</div>

		<div class="text-center p-4 sm:p-12 space-y-8">
			<h2 class="font-bold text-4xl sm:text-5xl">Citizen Reporter</h2>
			<h3 class="font-semibold text-2xl sm:text-4xl">Be The Voice of Your Community.</h3>
			<p class="text-gray-500 text-2xl">
				See something happening? Report it instantly. Your voice matters, your story counts. Join
				thousands making a difference through citizen journalism.
			</p>

			<div class="sm:flex space-y-5 sm:space-y-0 justify-center gap-12">
				<div>
					<h3 class="font-bold text-4xl sm:text-5xl text-blue-700">5436</h3>
					<p class="text-gray-500 text-xl">Reports Submitted</p>
				</div>

				<div>
					<h3 class="font-bold text-4xl sm:text-5xl text-blue-700">24/7</h3>
					<p class="text-gray-500 text-xl">Active</p>
				</div>
			</div>

			<button class="bg-orange-500 text-white p-4 px-8 font-bold sm:text-2xl"
				>Access iReport Now</button
			>
		</div>
	</section>

	<section
		class="bg-gray-50 text-center items-center justify-center gap-12 flex flex-col p-4 sm:p-12"
	>
		<h2 class="font-semibold text-3xl sm:text-5xl">Join Our Educational Revolution</h2>
		<p class="text-gray-500 text-xl sm:text-2xl sm:w-[1000px]">
			Become part of Nigeria's poineering academic broadcast ecosystem and help us create equitable,
			scalable education access through media innovation.
		</p>

		<div class="sm:flex justify-center items-center flex gap-5">
			<button class="bg-blue-700 p-4 sm:text-2xl text-white font-bold">Partner With Us</button>
			<button class="bg-white p-4 sm:text-2xl text-blue-700 font-bold border-2 border-blue-700"
				>Learn More</button
			>
		</div>
	</section>

	<hr class="border-2 h-[18px] bg-blue-700 border-blue-700" />

	<section class="bg-white py-8 border-y-4 border-purple-600 overflow-hidden">
		<div class="slider-container">
			<div class="slider" style="--width: 120px; --height: 90px; --quantity: 6;">
				<div class="slide-track">
					<!-- Partner Logos -->
					<div class="slide">
						<img
							src="https://news.crossriverstate.gov.ng/content/images/2025/05/image_870x_664c8db32c6fd.jpg"
							alt="University of Calabar"
						/>
					</div>
					<div class="slide">
						<img
							src="data:image/jpeg;base64,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"
							alt="UCTH"
						/>
					</div>
					<div class="slide">
						<img
							src="https://news.crossriverstate.gov.ng/content/images/2025/05/image_870x_664c8db32c6fd.jpg"
							alt="University of Calabar 2"
						/>
					</div>
					<div class="slide">
						<img
							src="data:image/png;base64,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"
							alt="YOUreka"
						/>
					</div>
					<div class="slide">
						<img
							src="data:image/jpeg;base64,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"
							alt="Unical Radio"
						/>
					</div>
					<div class="slide">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9pymHhHSam6TtUZc55O6yI6uKZMuIbCT5w&s"
							alt="University of Ibadan"
						/>
					</div>

					<!-- Duplicate for seamless looping -->
					<div class="slide">
						<img
							src="https://news.crossriverstate.gov.ng/content/images/2025/05/image_870x_664c8db32c6fd.jpg"
							alt="University of Calabar"
						/>
					</div>
					<div class="slide">
						<img
							src="data:image/jpeg;base64,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"
							alt="UCTH"
						/>
					</div>
					<div class="slide">
						<img
							src="https://news.crossriverstate.gov.ng/content/images/2025/05/image_870x_664c8db32c6fd.jpg"
							alt="University of Calabar 2"
						/>
					</div>
					<div class="slide">
						<img
							src="data:image/png;base64,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"
							alt="YOUreka"
						/>
					</div>
					<div class="slide">
						<img
							src="data:image/jpeg;base64,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"
							alt="Unical Radio"
						/>
					</div>
					<div class="slide">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9pymHhHSam6TtUZc55O6yI6uKZMuIbCT5w&s"
							alt="University of Ibadan"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>

	<style>
		.slider {
			width: 100%;
			height: var(--height);
			margin: auto;
			position: relative;
			display: grid;
			place-items: center;
			overflow: hidden;
		}

		.slider::before,
		.slider::after {
			content: '';
			position: absolute;
			width: 200px;
			height: 100%;
			z-index: 2;
		}

		.slider::before {
			left: 0;
			top: 0;
			background: linear-gradient(to right, rgba(255, 255, 255, 200), white);
		}

		.slider::after {
			right: 0;
			top: 0;
			background: linear-gradient(to left, rgba(255, 255, 255, 200), white);
		}

		.slide-track {
			display: flex;
			width: calc(var(--width) * var(--quantity) * 2);
			animation: scroll 20s linear infinite;
		}

		.slide {
			width: var(--width);
			height: var(--height);
			display: flex;
			align-items: center;
			padding: 15px;
			perspective: 100px;
		}

		img {
			width: 100%;
			transition: transform 1s;
		}

		img:hover {
			transform: translateZ(20px);
		}

		@keyframes scroll {
			0% {
				transform: translateX(0);
			}
			100% {
				transform: translateX(calc(var(--width) * var(--quantity) * -1));
			}
		}
	</style>
</main>
