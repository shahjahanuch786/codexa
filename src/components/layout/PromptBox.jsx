import {
  Plus,
  Paperclip,
  Mic,
  ArrowUp,
} from "lucide-react";


function PromptBox() {

  return (

    <div className="codexa-dashboard-prompt-container">


      <div className="codexa-dashboard-prompt-input">

        <span className="codexa-dashboard-prompt-placeholder">
          Ask me anything...
        </span>


      </div>



      <div className="codexa-dashboard-prompt-footer">


        <div className="codexa-dashboard-prompt-actions">


          <button className="codexa-dashboard-prompt-action-button">

            <Plus size={18} />

          </button>



          <button className="codexa-dashboard-prompt-action-button">

            <Paperclip size={18} />

          </button>



          <button className="codexa-dashboard-prompt-action-button">

            <Mic size={18} />

          </button>


        </div>



        <button className="codexa-dashboard-send-button">

          <ArrowUp size={18} />

        </button>


      </div>


    </div>

  );

}


export default PromptBox;