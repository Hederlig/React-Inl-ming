import './App.css';
import { useState } from 'react';
import ReactPost from './components/ReactPost';



function App() {

  const data =[
    {question: "Vad är tre fördelar med att använda React?",
    awnser:"1: Det är enklare att skapa dynamiska webbapplikationer, istället för att använda komplexa koder för att skapa en dynamisk hemsida, namn man istället använda JSX som tillåter HTML-citat med hjälp av syntax. 2: Den har SEO vänliga funktioner, när det är fel på sökmotorn och ReactJS är på servern, så återges samt returnerar en virtuell DOM, React har en förmåga att hantera fel effektivt. Detta gäller inte bara Google utan även Yahoo,Bing etc. 3: En personlig sak jag gillar med React är att om koden inte funkar pga något fel så får du felmeddelande direkt, jag tycker det är väldigt skönt för då kan man åtgärda problemet direkt. Samtidigt som du kan bygga komponenter som är isolerade (Egna JSX filer till exempel) dom övriga komponenter."},
    
    {question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?", 
    awnser: "Singel Page Application (SAP) är en webbapplikation eller webbplats som interagerar med användaren genom att dynamiskt skriva om den aktuella webbsidan med ny data från webbservern, istället för standardmetoden för en webbläsare som laddar hela nya sidor (för kunde man se Redirect nere i vänster hör på webbläsaren när man höll muspekaren över en länk). Målet är snabbare övergångar som gör att webbplatsen känns mer som en inbyggd app. " },

    {question: "Nämn tre skillnader mellan React och Angular", 
    awnser: "1: React är ett JavaScript-bibliotek medans Angular är ett ramverk, 2: React ger dig större frihet medans Angular begränsar din frihet. 3: React är baserad på Virtual DOM och skrivs i JavaScript medans Angular är baserad på MVC (Model View Controller) och skrivs i Typescript" }
  ];

  const [questions, setQuestion] = useState(data);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Inlämingsuppgift #1 Advc JavaScript</h1>
      <div className='zone'>
      {questions.map((question) => {
            return <ReactPost key={data.question} {...question} />;
          })}
      </div>
      </header>

      <strong>&copy; Copyright 2022 Author: Oscar "Buse" Hederlig</strong>
    </div>
  );
}

export default App;
