<script>
import Header from "./components/Header.svelte";
export let name;


</script>

<main>
<Header></Header>
	<section class="header">
		<div class="header-elements">
			<div>logo</div>
			<div>menu</div>
		</div>
	</section>
	<section class="background">
		<div class="background-elements">
			<div class="divisor">
				<div>
					<h1>{name}</h1>
					<button>Saber Más</button>
				</div>
			</div>
			<div>
			<img src="./img/sin-amor-no-hay-aprendizaje.jpg" alt="imagen_1">
			</div>
			
		</div>
	</section>
	
</main>

<style>
:global(body){
color:#424242;
}

:global(:root){
	--theme-color-main:#470205;
	--theme-color-secondary:#424242;
}


.divisor{
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.header-elements{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	background-color:#E5FCF5;
	padding: 20px 0px 20px 0px;
}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>