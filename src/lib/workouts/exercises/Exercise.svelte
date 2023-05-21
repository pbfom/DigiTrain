<script>
    export let exercise;

    import BurpeesVideo from '$lib/workouts/exercises/BurpeesVideo.svelte';
    import PlankVideo from '$lib/workouts/exercises/PlankVideo.svelte';
    import SitUpsVideo from '$lib/workouts/exercises/SitUpsVideo.svelte';

    import { slide } from "svelte/transition";
	let isOpen = false;

    if (exercise.exercise_nr == "1") {
        isOpen = true
    }
	const toggle = () => isOpen = !isOpen;
</script>

    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <a on:click={toggle} aria-expanded={isOpen}>
                <h6 class="m-0 font-weight-bold text-primary"> <svg style="tran"  width="20" height="20" fill="none"   stroke-linejoin="round" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg>Exercise {exercise.exercise_nr}: {exercise.exercise_name}</h6>
        </a>
    </div>
                            
    <!-- Card Body -->
    <div class="card-body" transition:slide={{duration: 300}}>
        {#if isOpen}
        <div class = "col-lg-2 ">
            {exercise.exercise_name}
            <p>
                {exercise.reps} {exercise.reps_type}
            </p>
        </div>
            {#if exercise.exercise_name != "break" }
                {#if exercise.media_type == "video"}
                    {#if exercise.exercise_name == "Burpees"}
                        <BurpeesVideo bind:exercise/>
                    {:else if exercise.exercise_name == "Plank"}
                        <PlankVideo bind:exercise />
                    {:else if exercise.exercise_name == "Sit-Ups"}
                        <SitUpsVideo bind:exercise />
                    {/if}
                {/if}
            {/if}
        {/if}
    </div>


<style>
    svg { transition: transform 0.2s ease-in;
	}
	
	[aria-expanded=true] svg { transform: rotate(0.25turn); }
</style>