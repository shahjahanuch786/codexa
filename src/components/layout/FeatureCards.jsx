import {
  PenSquare,
  Image,
  Search,
  FileText,
  BarChart3,
  Code2,
} from "lucide-react";


const cards = [

  {
    icon: <PenSquare size={24} />,
    title: "Write Copy",
    description: "Create compelling marketing copy and content.",
    bg: "#EEF2FF",
    color: "#635BFF",
  },

  {
    icon: <Image size={24} />,
    title: "Image Generation",
    description: "Generate stunning AI images from prompts.",
    bg: "#FFF4E6",
    color: "#F59E0B",
  },

  {
    icon: <Search size={24} />,
    title: "Research",
    description: "Research topics with AI-powered insights.",
    bg: "#E8FFF3",
    color: "#10B981",
  },

  {
    icon: <FileText size={24} />,
    title: "Generate Article",
    description: "Write blogs, articles and documents instantly.",
    bg: "#FCEEFF",
    color: "#C026D3",
  },

  {
    icon: <BarChart3 size={24} />,
    title: "Data Analytics",
    description: "Analyze data and generate reports quickly.",
    bg: "#EAF7FF",
    color: "#0EA5E9",
  },

  {
    icon: <Code2 size={24} />,
    title: "Generate Code",
    description: "Generate clean code in multiple languages.",
    bg: "#FFF1F2",
    color: "#EF4444",
  },

];


function FeatureCards() {

  return (

    <div className="codexa-dashboard-feature-grid">


      {cards.map((card,index)=>(


        <div 
          className="codexa-dashboard-feature-card"
          key={index}
        >


          <div
            className="codexa-dashboard-feature-icon"
            style={{
              background:card.bg,
              color:card.color
            }}
          >

            {card.icon}

          </div>



          <h3 className="codexa-dashboard-feature-title">
            {card.title}
          </h3>



          <p className="codexa-dashboard-feature-description">
            {card.description}
          </p>


        </div>


      ))}


    </div>

  );

}


export default FeatureCards;