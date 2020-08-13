import React, {useState, useEffect} from "react";
import {URL_PATH, API_KEY} from './constants/constants'
import axios from 'axios';
import Article from './components/Article'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import "./App.css";

// const dummyData = '{
//   "copyright": "Ignacio Llorens",
//   "date": "2020-08-12",
//   "explanation": "Keep your eye on the ion tail of Comet NEOWISE.  A tale of this tail is the trail of the Earth. As with all comets, the blue ion tail always points away from the Sun. But as Comet C/2020 F3 (NEOWISE) rounded our Sun, its ion tail pointed in slightly different directions. This is because between 2020 July 17 and July 25 when the featured images were taken, the Earth moved noticeably in its orbit around the Sun. But the Earth's motion made the Sun appear to shift in the sky. So even though you can't see the Sun directly in the featured image(s), the directions of the ion tails reveal this apparent solar shift."
//   "editor": "ed solar positions -- on a single foreground image of Turó de l'Home Mountain, north of Barcelona, Spain C image composite was meticulously composed to accurately place each comet image -- and the five extrapolated solar positions -- on a singomet NEOWISE is no longer the impressive naked-eye object it was last month, but it can still be found witmpressive naked-eye object it was last month, but it can still be found with a small telescope as it heads back to the outer Solar Systemh a small telescope as it heads back to the outer Solar System.",
//   "hdurl": "https://apod.nasa.gov/apod/image/2008/NeowiseSequence_Llorens_3044_annotated.jpg",
//   "media_type": "image",
//   "service_version": "v1",
//   "title": "The Shifting Tails of Comet NEOWISE",
//   "url": "https://apod.nasa.gov/apod/image/2008/NeowiseSequence_Llorens_960_annotated.jpg"
// }'

function App() {

  let [article, setArticle] = useState([]);

  useEffect(() => {
    axios.get(`${URL_PATH}?api_key=${API_KEY}`)
      .then(response => {
        console.log(response);
        setArticle(response.data);
      })
      .catch(error => {
        console.log("Axios get error!", error)
      })
  }, [])


  return (
    <div className="App">
      <Header />
      <Article article={article}/>
      <Footer />
    </div>
  );
}

export default App;
