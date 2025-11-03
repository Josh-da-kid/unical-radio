<script>
	import { page } from '$app/stores';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="absolute w-full flex justify-between items-center md:px-12 p-3 r text-white">
	<a href="/"
		><div class="flex items-center gap-2">
			<div class="font-bold text-white text-xl sm:text-3xl">
				UNICAL <span class="text-blue-700">EMN</span><span>et</span>
			</div>
		</div></a
	>

	<!-- Desktop navigation -->
	<div class="hidden lg:flex items-center space-x-4">
		<ul class="flex nav-links space-x-8 font-semibold sm:text-lg">
			<li>
				<a
					href="/"
					class="hover:text-blue-500"
					class:text-blue-700={$page.url.pathname === '/'}
					class:text-gray-300={$page.url.pathname !== '/'}>Home</a
				>
			</li>
			<li>
				<a
					href="/features"
					class="hover:text-blue-500"
					class:text-blue-700={$page.url.pathname === '/features'}
					class:text-gray-300={$page.url.pathname !== '/features'}>Features</a
				>
			</li>
			<li>
				<a
					href="/radio"
					class="hover:text-blue-500"
					class:text-blue-700={$page.url.pathname === '/radio'}
					class:text-gray-300={$page.url.pathname !== '/radio'}>Radio</a
				>
			</li>
			<li>
				<a
					href="/podcast"
					class="hover:text-blue-500"
					class:text-blue-700={$page.url.pathname === '/podcast'}
					class:text-gray-300={$page.url.pathname !== '/podcast'}>Podcast</a
				>
			</li>

			<li>
				<a
					href="/programs"
					class="hover:text-blue-500"
					class:text-blue-700={$page.url.pathname === '/programs'}
					class:text-gray-300={$page.url.pathname !== '/programs'}>Programs</a
				>
			</li>
			<li>
				<a
					href="/news"
					class="hover:text-blue-500"
					class:text-blue-700={$page.url.pathname === '/news'}
					class:text-gray-300={$page.url.pathname !== '/news'}>News</a
				>
			</li>
			<li>
				<a
					href="/i-report"
					class="hover:text-blue-500"
					class:text-blue-700={$page.url.pathname === '/i-report'}
					class:text-orange-500={$page.url.pathname !== '/i-report'}>iReport</a
				>
			</li>
			<li>
				<a
					href="/ezibiz"
					class="hover:text-blue-500"
					class:text-blue-700={$page.url.pathname === '/ezibiz'}
					class:text-orange-500={$page.url.pathname !== '/ezibiz'}>EziBiz</a
				>
			</li>
		</ul>
	</div>
	<div class="hidden lg:flex font-semibold text-gray-500 gap-5 items-center sm:text-lg">
		<!-- <button>Log In</button> -->
		<button class="bg-blue-700 p-3 text-white px-10">Log In</button>
	</div>

	<!-- Mobile menu button -->
	<div class="lg:hidden">
		<button on:click={toggleMenu} class="text-gray-500 hover:text-gray-700 focus:outline-none">
			<svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				{#if isMenuOpen}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if isMenuOpen}
		<div class="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-10">
			<ul class="flex flex-col items-center space-y-2 p-4">
				<li>
					<a
						href="/"
						class="hover:text-blue-700"
						class:text-blue-700={$page.url.pathname === '/'}
						class:text-gray-500={$page.url.pathname !== '/'}
						on:click={() => (isMenuOpen = false)}>Home</a
					>
				</li>
				<li>
					<a
						href="/features"
						class="hover:text-blue-700"
						class:text-blue-700={$page.url.pathname === '/features'}
						class:text-gray-500={$page.url.pathname !== '/features'}
						on:click={() => (isMenuOpen = false)}>Features</a
					>
				</li>
				<li>
					<a
						href="/radio"
						class="hover:text-blue-700"
						class:text-blue-700={$page.url.pathname === '/radio'}
						class:text-gray-500={$page.url.pathname !== '/radio'}
						on:click={() => (isMenuOpen = false)}>Radio</a
					>
				</li>
				<li>
					<a
						class="hover:text-blue-700"
						href="/podcast"
						class:text-blue-700={$page.url.pathname === '/podcast'}
						class:text-gray-500={$page.url.pathname !== '/podcast'}
						on:click={() => (isMenuOpen = false)}>Podcast</a
					>
				</li>
				<li>
					<a
						class="hover:text-blue-700"
						href="/programs"
						class:text-blue-700={$page.url.pathname === '/programs'}
						class:text-gray-500={$page.url.pathname !== '/programs'}
						on:click={() => (isMenuOpen = false)}>Programs</a
					>
				</li>
				<li>
					<a
						class="hover:text-blue-700"
						href="/news"
						class:text-blue-700={$page.url.pathname === '/news'}
						class:text-gray-500={$page.url.pathname !== '/news'}
						on:click={() => (isMenuOpen = false)}>News</a
					>
				</li>
				<li>
					<a
						class="hover:text-blue-700"
						href="/i-report"
						class:text-blue-700={$page.url.pathname === '/i-report'}
						class:text-gray-500={$page.url.pathname !== '/i-report'}
						on:click={() => (isMenuOpen = false)}>iReport</a
					>
				</li>
				<li>
					<a
						class="hover:text-blue-700"
						href="/ezibiz"
						class:text-blue-700={$page.url.pathname === '/ezibiz'}
						class:text-gray-500={$page.url.pathname !== '/ezibiz'}
						on:click={() => (isMenuOpen = false)}>EziBiz</a
					>
				</li>
				<li class="w-full">
					<button
						class="w-full text-gray-500 hover:text-blue-700"
						on:click={() => (isMenuOpen = false)}>Log In</button
					>
				</li>
				<!-- <li class="w-full">
					<button
						class="bg-red-700 p-2 text-white w-full rounded"
						on:click={() => (isMenuOpen = false)}>Sign Up</button
					>
				</li> -->
			</ul>
		</div>
	{/if}
</header>
