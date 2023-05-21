<script>
	import { Line } from 'svelte-chartjs';
  import { getWeightData } from '$lib/classes/health_data';
  import { getLabels } from '$lib/classes/health_data';

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from 'chart.js';



  const data = {
    labels: getLabels(),
    datasets: [
      {
        label: 'Weight',
        fill: true,
        lineTension: 0.3,
        backgroundColor: 'rgba(225, 204,230, .3)',
        borderColor: 'rgb(205, 130, 158)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(205, 130,1 58)',
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(0, 0, 0)',
        pointHoverBorderColor: 'rgba(220, 220, 220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: getWeightData(),
      },
    ]
};

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );

</script>

<Line {data} options={{ responsive: true }} />

