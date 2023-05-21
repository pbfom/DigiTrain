<script>
    import { Pie } from 'svelte-chartjs';
  
    import {
      Chart as ChartJS,
      Title,
      Tooltip,
      Legend,
      ArcElement,
      CategoryScale,
    } from 'chart.js';
  
    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

    const data = {
        labels: ['HIIT', 'Core',],
        datasets: [
            {
            data: [2, 1],
            backgroundColor: [
                '#F7464A',
                '#46BFBD'
            ],
            hoverBackgroundColor: [
                '#FF5A5E',
                '#5AD3D1',
            ],
            },
        ],
    };


</script>
  
  <Pie {data} options={{ responsive: true }} width="331" height="245" class="chartjs-render-monitor" style="display: block; width: 331px; height: 245px;" align="center"/>