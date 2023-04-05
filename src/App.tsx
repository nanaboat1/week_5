import './App.css'
import { useEffect, useState } from 'react'
import  { Card} from '@mui/material';
import DispCard from './components/DispCard';
import { DispCardProps } from './components/DispCard';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement,
  Title,
  Tooltip,
  Legend, 
} from 'chart.js'; 
import { Line ,} from 'react-chartjs-2';

ChartJS.register( 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend
); 



const App = () => {

    const [ error, setError ] = useState(false); 
    const [ data, setData ] = useState({ 
      products : [], 
      total : 2, 
      skip : 0, 
      limit : 30
    });
    const [ cardList, setcardList ] = useState([]);
    const [ renderCard, setrenderCard] = useState({}); 
    const [graphData, setGraphData] = useState([])

    const controller = new AbortController(); // added abort controller.




   // Second Chart 
   const OptionsB= { 
    responsive : true, 
    plugins: { 
      legend: { 
        position: 'top' as const,
      }, 
      title: { 
        display: true, 
        text: 'Product Price vs to Stock'
      },
    },
  };

  const label = [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600,1800]

  const datasets = { 
    label, 
    datasets: [ { 
      label : 'Stock', 
      data : graphData, 
      borderColor : 'rgb(255,90,132)',
      backgroundColor: 'rgba(255,99,132,0.5)',
    }, 
    {
      label : 'Prices', 
      data : graphData,
      borderColor : 'rgb(53,162,235)',
      backgroundColor: 'rgba(53,162,235,0.5)',

    }
   ],

  };
  
  // First Chart
  const Options = { 
    responsive : true, 
    plugins: { 
      legend: { 
        position: 'top' as const,
      }, 
      title: { 
        display: true, 
        text: 'Product Price vs to Ratings*10'
      },
    },
  };
  
  const labels = [ 0, 200, 400, 600, 800, 1000, 1200, 1400, 1600,1800]

  const datasetA = { 
    labels, 
    datasets: [ { 
      label : 'Ratings', 
      data : cardList.map(( rate : any) => rate.rating*100), 
      borderColor : 'rgb(255,90,132)',
      backgroundColor: 'rgba(255,99,132,0.5)',
    }, 
    {
      label : 'Prices', 
      data : cardList.map(( rate : any) => rate.price),
      borderColor : 'rgb(53,162,235)',
      backgroundColor: 'rgba(53,162,235,0.5)',

    }
   ],

  }; 

 
  useEffect(() => { 

    fetchProducts();  
    //console.log( temp );

    setTimeout( ( ) =>  {
      controller.abort();
    },50)

  }, [data, cardList]);

  // fetches data from an API.
  const fetchProducts : any = async () => { 

    await fetch (
      `https://dummyjson.com/products`, {
        signal : controller.signal,
      },
    ).then((response : any) => response.json()
    ).then( json => setData ( json ));

    setcardList( data.products );
    //console.log( data.products );
    const graph : any = data.products.map( (rate : any) => rate.rating );
    setGraphData( graph ); 
  }

  return ( 
    
      <div className='home-screen'> 
        <h1> Products in Store with Details</h1>
        <div className='product-list'>
          
          {cardList.map((item) => <DispCard {...item as DispCardProps} />) /** Array.map renders images to scr */} 
        </div> 
        <div className='chart-graph'> 
        <p> First Chart</p>
          <Line options={Options} data={datasetA} width={600} height={250} />

          <p> Second Chart</p>
          <Line options={OptionsB} data={datasetA} width={300} height={200} />
          
        </div> 
      </div>
   
  ); 

 
};

export default App
