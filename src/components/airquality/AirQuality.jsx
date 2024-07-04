import useApi from '../../services/useApi';


function AirQuality() {
   
    const {data} = useApi('https://api.waqi.info/feed/A463240/?token=b9d964a07c93bfcde8fd48e0271666e6d36193b6') 
        console.log(data)
        if (!data) {
            return <div>Cargando...</div>;
          }
       
    return (
        <div>
        <h2>Calidad del Aire en {data.data.city.name}</h2>
        <p><strong>Índice AQI:</strong> {data.data.aqi}</p>
        <p><strong>Contaminante dominante:</strong> {data.data.dominentpol}</p>
        <h3>Índices IAQI:</h3>
        <ul>
          {Object.entries(data.data.iaqi).map(([key, value]) => (
            <li key={key}><strong>{key.toUpperCase()}:</strong> {value.v}</li>
          ))}
        </ul>
        <p>Datos proporcionados por:</p>
        <ul>
          {data.data.attributions.map((attr, index) => (
            <li key={index}>{attr.name}</li>
          ))}
        </ul>
      </div>

      
    
    )
  }
  
  export default AirQuality
  