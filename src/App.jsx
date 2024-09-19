import './App.css';
import SocialMediaPostContainer from './components/SocialMediaPostContainer';

function App() {
  return (
    <div className="App">
      <div className="post-wrapper">
        <SocialMediaPostContainer />
      </div>
    </div>
  );
}

// Updated CSS
const styles = `
  .App {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f2f5;
    font-family: Arial, sans-serif;
  }

  .post-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
  }

  .socialMediaReadonlyPost, .editablePostContainer {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    padding: 12px;
    width: 100%;
    max-width: 500px;
    margin-bottom: 28px;
    box-sizing: border-box;
  }

  .socialMediaReadonlyPost h2 {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    color: #050505;
  }

  .socialMediaReadonlyPost h6 {
    margin: 4px 0;
    font-size: 12px;
    color: #65676B;
  }

  .socialMediaReadonlyPost h3 {
    margin: 8px 0;
    font-size: 14px;
    color: #050505;
  }

  .socialMediaReadonlyPost p {
    margin: 8px 0;
    font-size: 14px;
    color: #050505;
  }

  .editablePostContainer label {
    display: block;
    margin-top: 12px;
    font-size: 14px;
    color: #65676B;
  }

  .editablePostContainer input[type="text"] {
    width: 90%;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #ccd0d5;
    border-radius: 4px;
    font-size: 14px;
  }

  button {
    background-color: #1877f2;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 12px;
    margin-bottom: 12px;
    width: 100%;
    max-width: 200px;
  }

  button:hover {
    background-color: #166fe5;
  }

  button.edit-button {
    background-color: #1877f2;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 12px;
    width: 100%;
    max-width: 200px;
    display: block;
  }

  button.edit-button:hover {
    background-color: #166fe5;
  }

  .editing button.edit-button {
    display: none;
  }
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default App;
