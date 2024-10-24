<script lang="ts">
	export let sidebarHidden: boolean;
	export let activeMenuItem: string;
	export let setActiveMenuItem: (menuItem: string) => void;
</script>

<section id="sidebar" class:hide={sidebarHidden}>
	<a href="/" class="brand" data-sveltekit-preload-data="tap" data-sveltekit-reload>
		<i class="bx bx-run"></i>
		<span class="text">SPORT SCORE</span>
	</a>
	<ul class="side-menu top" data-sveltekit-preload-data="tap" data-sveltekit-reload>
		<li class:active={activeMenuItem === 'panel'}>
			<a href="/empezar" on:click|preventDefault={() => setActiveMenuItem('panel')}>
				<i class="bx bxs-dashboard"></i>
				<span class="text">Panel</span>
			</a>
		</li>
	</ul>
	<ul class="side-menu" data-sveltekit-preload-data="tap" data-sveltekit-reload>
		<li class:active={activeMenuItem === 'buzon'}>
			<a href="/buzon">
				<i class="bx bx-envelope"></i>
				<span class="text">Buzón</span>
			</a>
		</li>
		<li>
			<a href="/Menu" class="logout">
				<i class="bx bxs-log-out-circle"></i>
				<span class="text">Volver</span>
			</a>
		</li>
		<li>
			<a href="/prueba" class="logout">
				<i class="bx bxs-school"></i>
				<span class="text">Registrate como jugador</span>
			</a>
		</li>
	</ul>
</section>

<style>
	/* SIDEBAR STYLING */
	#sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 280px;
		height: 100%;
		z-index: 2000;
		font-family: var(--lato);
		transition: 0.3s ease;
		overflow-x: hidden;
		scrollbar-width: none;
		background-color: rgb(184, 15, 29);
	}

	#sidebar::-webkit-scrollbar {
		display: none;
	}

	#sidebar.hide {
		width: 60px;
	}

	#sidebar .brand {
		font-size: 24px;
		font-weight: 700;
		height: 56px;
		display: flex;
		align-items: center;
		color: white;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 500;
		padding-bottom: 20px;
		box-sizing: content-box;
		background-color: rgb(184, 15, 29);
	}

	#sidebar .brand .bx {
		min-width: 60px;
		display: flex;
		justify-content: center;
		background-color: rgb(184, 15, 29);
	}

	#sidebar .side-menu {
		width: 100%;
		margin-top: 48px;
		background-color: rgb(184, 15, 29);
	}

	#sidebar .side-menu li {
		height: 48px;
		background: transparent;
		margin-left: 6px;
		border-radius: 48px 0 0 48px;
		padding: 4px;
	}

	#sidebar .side-menu li.active {
		background: var(--grey);
		position: relative;
	}

	#sidebar .side-menu li.active::before {
		content: '';
		position: absolute;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		top: -40px;
		right: 0;
		box-shadow: 20px 20px 0 var(--grey);
		z-index: -1;
	}

	#sidebar .side-menu li.active::after {
		content: '';
		position: absolute;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		bottom: -40px;
		right: 0;
		box-shadow: 20px -20px 0 var(--grey);
		z-index: -1;
	}

	#sidebar .side-menu li a {
		width: 100%;
		height: 100%;
		background: var(--light);
		display: flex;
		align-items: center;
		border-radius: 48px;
		font-size: 16px;
		color: var(--dark);
		white-space: nowrap;
		overflow-x: hidden;
	}

	#sidebar .side-menu.top li.active a {
		color: black;
		background-color: rgb(184, 15, 29);
	}

	#sidebar.hide .side-menu li a {
		width: calc(48px - (4px * 2));
		transition: width 0.3s ease;
	}

	#sidebar .side-menu li a.logout {
		color: black;
	}

	#sidebar .side-menu li a .bx {
		min-width: calc(60px - ((4px + 6px) * 2));
		display: flex;
		justify-content: center;
	}

</style>
