<script>
	import { Tile } from 'carbon-components-svelte';

	let programmes = [
		{
			heading: 'The Breakfast Show',
			date: '8:00 - 8:20',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam ipsa magni nihil. Rem alias commodi molestias est laborum. Velit sunt blanditiis omnis praesentium, dolores quisquam ipsum aspernatur, reiciendis ratione tenetur accusamus maiores excepturi nobis quod, dolorum fugit molestiae ullam ad nesciunt. Expedita ipsam mollitia rem nemo provident iure repudiandae.',
			link: ''
		},
		{
			heading: 'Midday Music Mix',
			date: '11:00 - 12:00',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam ipsa magni nihil. Rem alias commodi molestias est laborum. Velit sunt blanditiis omnis praesentium, dolores quisquam ipsum aspernatur, reiciendis ratione tenetur accusamus maiores excepturi nobis quod, dolorum fugit molestiae ullam ad nesciunt. Expedita ipsam mollitia rem nemo provident iure repudiandae.',
			link: ''
		},
		{
			heading: 'Tech Talk',
			date: '15:00 - 16:00',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam ipsa magni nihil. Rem alias commodi molestias est laborum. Velit sunt blanditiis omnis praesentium, dolores quisquam ipsum aspernatur, reiciendis ratione tenetur accusamus maiores excepturi nobis quod, dolorum fugit molestiae ullam ad nesciunt. Expedita ipsam mollitia rem nemo provident iure repudiandae.',
			link: ''
		},
		{
			heading: 'Raw Gist',
			date: '19:00 - 20:00',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam ipsa magni nihil. Rem alias commodi molestias est laborum. Velit sunt blanditiis omnis praesentium, dolores quisquam ipsum aspernatur, reiciendis ratione tenetur accusamus maiores excepturi nobis quod, dolorum fugit molestiae ullam ad nesciunt. Expedita ipsam mollitia rem nemo provident iure repudiandae.',
			link: ''
		}
	];
</script>

<section
	class="min-h-screen md:flex text-center justify-center items-center bg-gray-100 bg-cover bg-center bg-no-repeat py-12 transition-all duration-500"
	style="background-image: url('https://t4.ftcdn.net/jpg/06/27/45/45/360_F_627454572_sSfrnEK1DYnSJgSHR5dJJ0KrpzOxCJXY.jpg');"
>
	<div class="mt-20 md:mt-0 flex flex-col p-4 md:pl-32 gap-4 justify-center items-center mx-auto">
		<h1 class="font-bold text-4xl md:text-6xl text-white lg:w-[800px]">Our Program Lineup</h1>
		<p class="text-gray-200 font-semibold text-xl text-break-words lg:w-[620px]">
			Discover diverse programming that educates, entertains, and enagages the UNICAL communitY With
			news, music, talk shows, and educational content 24/7.
		</p>
		<p class="text-gray-200 font-semibold text-xl text-break-words lg:w-[620px]">
			Broadcasting Live
		</p>
	</div>
</section>

<section
	class="md:flex justify-center items-center bg-gray-100 bg-cover bg-center bg-no-repeat text-center flex flex-col gap-2 py-12"
	style="background-image: url('');"
>
	<h3 class="font-bold text-xl sm:text-3xl text-blue-700">NOW PLAYING</h3>
	<h2 class="font-bold text-4xl sm:text-5xl">Morning News</h2>
	<h4 class="text-xl sm:text-2xl">08:00 - 08:20</h4>
	<p class="text-gray-500 text-xl sm:text-2xl sm:w-[400px] flex text-center mx-auto">
		To broadcast up-to-date, authentic, and verified news within and outside campus environs.
	</p>

	<button
		class="w-fit justify-center items-center mx-auto flex gap-4 bg-blue-700 text-white p-4 px-8 font-bold sm:text-2xl"
		>Listen Now <span>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
				/></svg
			>
		</span></button
	>
	<hr class="border border-gray-500" />
</section>

<section class="py-12 px-8 md:px-14">
	<div class="flex flex-col gap-3">
		<h2 class="font-bold text-3xl sm:text-5xl">Programmes</h2>
		<hr class="border-2 border-blue-700 text-blue-700 bg-blue-700" />
	</div>

	{#each programmes as programme}
		<div class="flex py-5">
			<div class="w-[8px] bg-blue-700"></div>

			<Tile>
				<h1 class="font-semibold text-2xl sm:text-3xl">{programme.heading}</h1>
				<h3 class="text-lg sm:text-xl mt-1">{programme.date}</h3>
				<p class="mt-1">{programme.description}</p>
				<a href={programme.link} class="mt-1 underline text-lg font-semibold">View Details</a>
			</Tile>
		</div>
	{/each}

	<div class="flex justify-center md:justify-end">
		<button class="bg-blue-700 text-white font-semibold text-lg sm:text-xl p-2 rounded-lg px-4"
			>Load More</button
		>
	</div>
</section>

<section class="py-12 px-8 md:px-14">
	<!-- Shared container for consistent width -->
	<div class="max-w-5xl mx-auto">
		<div class="flex flex-col gap-3">
			<h2 class="font-bold text-3xl sm:text-5xl">Today's Schedule</h2>
			<hr class="border-2 border-blue-700 text-blue-700 bg-blue-700" />
		</div>

		{#each programmes as programme}
			<div class="flex py-5">
				<div class="w-[8px] bg-blue-700"></div>

				<Tile class="flex-1 md:px-6">
					<div class="sm:flex gap-6">
						<h3 class="text-lg sm:text-xl mt-1">{programme.date}</h3>
						<h1 class="font-semibold text-2xl sm:text-3xl">{programme.heading}</h1>
					</div>
				</Tile>
			</div>
		{/each}
	</div>
</section>

<hr class="border border-blue-500 bg-blue-800" />

<section class="sm:flex space-y-6 sm:space-y-0 text-center items-center justify-center mt-8 gap-12">
	<div>
		<h3 class="font-bold sm:text-5xl">500+</h3>
		<p class="text-gray-500 sm:text-2xl">Event Covered</p>
	</div>
	<div>
		<h3 class="font-bold sm:text-5xl">1000+</h3>
		<p class="text-gray-500 sm:text-2xl">Photos & Videos</p>
	</div>
	<div>
		<h3 class="font-bold sm:text-5xl">24/7</h3>
		<p class="text-gray-500 sm:text-2xl">Live Broadcasting</p>
	</div>
	<div>
		<h3 class="font-bold sm:text-5xl">45k+</h3>
		<p class="text-gray-500 sm:text-2xl">Listeners Reached</p>
	</div>
</section>

<hr class="border border-blue-500 text-blue-700 h-[50px] bg-blue-700 mt-12" />
