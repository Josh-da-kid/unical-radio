<script>
	import {
		FileUploaderDropContainer,
		InlineNotification,
		TextArea,
		TextInput,
		Toggle
	} from 'carbon-components-svelte';
</script>

<section
	class="min-h-screen md:flex text-center justify-center items-center bg-gray-100 bg-cover bg-center bg-no-repeat py-12 transition-all duration-500"
	style="background-image: url('https://t4.ftcdn.net/jpg/06/27/45/45/360_F_627454572_sSfrnEK1DYnSJgSHR5dJJ0KrpzOxCJXY.jpg');"
>
	<div class="mt-20 md:mt-0 flex flex-col p-4 md:pl-32 gap-4 justify-center items-center mx-auto">
		<h1 class="font-bold text-4xl md:text-6xl text-white lg:w-[800px]">
			iReport Citizen Reporter Platform
		</h1>
		<p class="text-gray-200 font-semibold text-xl text-break-words lg:w-[620px]">
			Your eyes on the ground. Report news, emergencies, events, or anything noteworthy in your
			community.
		</p>
	</div>
</section>

<section class="py-8 px-8 md:w-[900px] justify-center items-center mx-auto">
	<div class="sm:flex gap-8 px-6 bg-orange-200/40 py-6 border-2 border-orange-500">
		<div class="sm:px-6">
			<Toggle></Toggle>
		</div>
		<div>
			<h3 class="text-2xl">Report Anonymously</h3>
			<p class="text-gray-500 font-semibold">Toggle on to submit without revealing your identity</p>
		</div>
	</div>
</section>

<section>
	<form action="" class="md:w-[800px] gap-5 mx-auto flex flex-col px-6">
		<h3 class="text-2xl text-orange-500">🎯 What are you reporting?</h3>
		<TextInput />
		<h3 class="text-2xl text-orange-500">👤 Your Information (Optional)</h3>
		<div class="md:flex gap-4">
			<TextInput labelText="Name" />
			<TextInput labelText="Phone Number" />
		</div>

		<h3 class="text-2xl text-orange-500">📍 Report Details</h3>
		<TextInput labelText="Report Name" />
		<TextInput labelText="Location" />
		<TextArea labelText="Detailed Description" />

		<h3 class="text-2xl text-orange-500">📸 Add Photos or Videos (Optional)</h3>

		<div class="items-center justify-center flex mx-auto">
			<FileUploaderDropContainer
				multiple
				labelText="Drag and drop files here or click to upload"
				validateFiles={(files) => {
					return files.filter((file) => file.size < 1_024);
				}}
				on:change={(e) => {
					console.log('files', e.detail);
				}}
			/>
		</div>

		<div class="items-center justify-center flex">
			<button class="w-fit bg-blue-700 text-white p-4 px-8 rounded-lg">Submit Report</button>
		</div>
	</form>
</section>

<div class="justify-center items-center flex mx-auto">
	<InlineNotification
		lowContrast
		kind="error"
		title="Important Note:"
		subtitle="All reports are reviewed before publication. False reports may result in legal action. By submitting, you agree that the information provided is accurate to the best of your knowledge. For life-threatening emergencies, please call emergency services immediaitely."
	/>
</div>
