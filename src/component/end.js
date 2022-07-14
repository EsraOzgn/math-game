import React from 'react'
import { MainContext,useContext } from '../context/MainContext';
import '../App.css';


function End() {


  const {Data,currentQuestion,setCurrentQuestion,score,setScore,start,setStart,truee,setTruee,final,setFinal, textt,setTextt} = useContext(MainContext)

  

  if(final) {
    document.body.style.background = "#2D2D2D";
  }


  const resartClick = () => {
      setScore(0)
      setCurrentQuestion(0)
      setFinal(false)
      localStorage.removeItem("true")
      localStorage.removeItem("score")
      localStorage.removeItem("currentQ")
      setTextt([])

  }


  console.log(textt)

  return (
    <div className='final-component'>

        <div className='final'>
            <h2 className='final-header'>Final</h2>
            <div className='point'>Point: {score}</div>
            <div className='questions'>Questions: {currentQuestion+1}</div>
            <div className='correct'>Correct Answers: {truee.length}</div>
            <div onClick={resartClick} className='resart'><svg width="447" height="139" viewBox="0 0 447 139" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M131.6 74.712L131.792 84.376C131.792 85.6987 131.493 86.5947 130.896 87.064C130.299 87.5333 129.744 87.768 129.232 87.768C128.72 87.768 128.229 87.704 127.76 87.576C127.205 83.0107 126.928 78.552 126.928 74.2C126.928 69.848 127.056 64.92 127.312 59.416C127.611 53.912 127.781 49.56 127.824 46.36C127.824 42.9467 132.389 41.24 141.52 41.24C146.341 41.24 150.885 42.2427 155.152 44.248C157.371 45.272 159.184 46.7227 160.592 48.6C162 50.4347 162.704 52.504 162.704 54.808C162.704 57.0693 162.192 59.1173 161.168 60.952C160.144 62.7867 158.843 64.3227 157.264 65.56C155.685 66.7547 153.872 67.8 151.824 68.696C148.453 70.232 144.699 71.256 140.56 71.768C142.608 72.92 145.936 75.6933 150.544 80.088C151.909 81.4107 153.637 82.6053 155.728 83.672C157.819 84.696 159.973 85.208 162.192 85.208C162.405 85.208 162.853 85.1653 163.536 85.08C164.219 84.952 164.795 84.8667 165.264 84.824C165.733 84.7813 166.16 84.888 166.544 85.144C166.971 85.3573 167.184 85.7627 167.184 86.36C167.184 87.8107 165.371 88.536 161.744 88.536C157.52 88.536 153.317 86.9147 149.136 83.672C147.301 82.3067 145.509 80.8987 143.76 79.448C139.451 75.8213 135.419 73.5387 131.664 72.6C131.621 72.984 131.6 73.688 131.6 74.712ZM157.904 55.576C157.904 51.992 156.283 49.304 153.04 47.512C149.84 45.6773 145.765 44.76 140.816 44.76C137.701 44.76 134.8 45.1013 132.112 45.784C132.112 49.1547 132.005 52.9093 131.792 57.048C131.579 61.144 131.472 63.96 131.472 65.496C131.472 67.032 131.493 68.1627 131.536 68.888C137.851 68.4187 142.736 67.672 146.192 66.648C149.904 65.5813 152.677 64.2587 154.512 62.68C156.773 60.7173 157.904 58.3493 157.904 55.576ZM173.415 74.008C173.33 74.8613 173.287 75.4373 173.287 75.736C173.287 78.296 174.055 80.28 175.591 81.688C177.17 83.096 179.026 83.8 181.159 83.8C183.292 83.8 185.02 83.5013 186.343 82.904C187.708 82.3067 188.69 81.6667 189.287 80.984C190.823 79.064 192.231 78.104 193.511 78.104C193.98 78.104 194.535 78.232 195.175 78.488C194.748 80.5787 193.127 82.4987 190.311 84.248C187.538 85.9547 184.039 86.808 179.815 86.808C176.828 86.808 174.247 85.8693 172.071 83.992C169.938 82.072 168.871 79.4693 168.871 76.184C168.871 72.8987 169.511 69.72 170.791 66.648C172.114 63.5333 173.991 60.888 176.423 58.712C178.898 56.4933 181.394 55.384 183.911 55.384C186.471 55.384 188.519 55.9173 190.055 56.984C191.634 58.008 192.423 59.5227 192.423 61.528C192.423 65.24 190.759 68.312 187.431 70.744C184.146 73.1333 180.647 74.328 176.935 74.328C175.954 74.328 174.78 74.2213 173.415 74.008ZM178.279 71.896C180.284 71.896 182.076 71.256 183.655 69.976C185.234 68.696 186.343 67.352 186.983 65.944C187.666 64.536 188.007 63.256 188.007 62.104C188.007 60.952 187.559 59.9493 186.663 59.096C185.767 58.2 184.722 57.752 183.527 57.752C181.394 57.752 179.41 59.224 177.575 62.168C175.783 65.112 174.503 68.1627 173.735 71.32C175.612 71.704 177.127 71.896 178.279 71.896ZM216.465 61.4C216.081 60.4187 215.356 59.6507 214.289 59.096C213.222 58.5413 211.9 58.264 210.321 58.264C208.742 58.264 207.249 58.7333 205.841 59.672C204.476 60.6107 203.793 61.8693 203.793 63.448C203.793 65.0267 204.433 66.2853 205.713 67.224C207.036 68.12 208.614 68.8027 210.449 69.272C212.326 69.7413 214.204 70.2533 216.081 70.808C217.958 71.32 219.537 72.1947 220.817 73.432C222.14 74.6267 222.801 76.2053 222.801 78.168C222.801 81.0267 221.606 83.2027 219.217 84.696C216.87 86.1893 214.033 86.936 210.705 86.936C208.742 86.936 206.161 86.4027 202.961 85.336C199.804 84.2693 198.225 82.9893 198.225 81.496C198.225 80.3867 199.164 79.832 201.041 79.832C201.596 79.832 202.321 80.1733 203.217 80.856C205.948 82.8613 208.742 83.864 211.601 83.864C213.137 83.864 214.46 83.608 215.569 83.096C217.617 82.1147 218.641 80.536 218.641 78.36C218.641 77.0373 217.98 75.9707 216.657 75.16C215.377 74.3493 213.798 73.7093 211.921 73.24C210.086 72.7707 208.23 72.2587 206.353 71.704C204.476 71.1493 202.876 70.232 201.553 68.952C200.273 67.6293 199.633 65.9653 199.633 63.96C199.633 61.3573 200.806 59.2453 203.153 57.624C205.5 56.0027 208.401 55.192 211.857 55.192C214.204 55.192 216.316 55.8107 218.193 57.048C220.113 58.2427 221.073 59.992 221.073 62.296C221.073 63.832 220.198 64.6 218.449 64.6C217.724 64.6 217.233 64.472 216.977 64.216C216.764 63.96 216.636 63.512 216.593 62.872C216.593 62.1893 216.55 61.6987 216.465 61.4ZM228.34 60.184C226.42 60.184 225.119 59.7147 224.436 58.776C224.436 58.0933 224.713 57.56 225.268 57.176C225.865 56.792 226.505 56.5573 227.188 56.472C227.871 56.344 228.98 56.2373 230.516 56.152C230.644 55 230.708 53.528 230.708 51.736C230.751 49.9013 230.793 48.344 230.836 47.064C230.964 43.6933 231.476 41.624 232.372 40.856C232.756 40.5147 233.161 40.344 233.588 40.344C234.057 40.344 234.463 40.3867 234.804 40.472C234.932 43.544 234.996 45.4 234.996 46.04L234.612 55.64C234.697 55.6827 234.932 55.704 235.316 55.704L239.924 55.512C243.252 55.512 244.916 56.024 244.916 57.048C244.916 58.4987 244.319 59.352 243.124 59.608C242.569 59.736 241.908 59.8 241.14 59.8C240.415 59.8 239.455 59.7147 238.26 59.544C237.108 59.3307 236.276 59.224 235.764 59.224C235.252 59.224 234.911 59.2453 234.74 59.288C234.612 60.5253 234.548 61.7627 234.548 63C234.548 64.1947 234.569 65.7093 234.612 67.544C234.697 69.336 234.868 71.4907 235.124 74.008C235.423 76.5253 236.041 78.7013 236.98 80.536C237.919 82.328 239.113 83.224 240.564 83.224C241.289 83.224 242.143 82.9467 243.124 82.392C244.105 81.7947 244.852 81.496 245.364 81.496C245.919 81.496 246.388 81.624 246.772 81.88C247.199 82.0933 247.412 82.3493 247.412 82.648C247.412 83.544 246.495 84.4187 244.66 85.272C242.868 86.0827 241.332 86.488 240.052 86.488C235.359 86.488 232.436 82.0507 231.284 73.176C230.943 70.616 230.687 66.2213 230.516 59.992C229.833 60.12 229.108 60.184 228.34 60.184ZM271.438 68.568L271.118 75.928C271.118 79.64 271.544 82.136 272.398 83.416C272.91 84.2693 273.614 84.696 274.51 84.696C274.766 84.696 275.128 84.632 275.598 84.504C276.494 84.248 277.24 84.376 277.838 84.888C277.539 86.3813 276.046 87.128 273.358 87.128C271.523 87.128 270.307 86.36 269.71 84.824C269.24 83.672 268.899 82.2427 268.686 80.536C268.472 78.7867 268.302 77.592 268.174 76.952C265.4 82.2427 262.712 85.464 260.11 86.616C258.787 87.2133 257.251 87.512 255.502 87.512C253.752 87.512 252.387 86.68 251.406 85.016C250.467 83.3093 249.998 80.8347 249.998 77.592C249.998 74.3493 250.531 70.9573 251.598 67.416C252.664 63.832 254.222 60.824 256.27 58.392C258.318 55.9173 260.558 54.68 262.99 54.68C266.488 54.68 268.814 56.1307 269.966 59.032C270.947 61.5067 271.438 64.6853 271.438 68.568ZM255.758 66.52C255.16 68.824 254.712 71.0213 254.414 73.112C254.115 75.16 253.966 76.9947 253.966 78.616C253.966 80.1947 254.286 81.56 254.926 82.712C255.608 83.864 256.483 84.44 257.55 84.44C259.854 84.44 262.072 82.264 264.206 77.912C266.339 73.56 267.406 69.5067 267.406 65.752C267.406 63.32 266.766 61.3147 265.486 59.736C264.632 58.712 263.502 58.2 262.094 58.2C260.728 58.2 259.47 59.0107 258.318 60.632C257.208 62.2107 256.355 64.1733 255.758 66.52ZM286.236 80.728L286.428 84.376C286.428 85.3147 286.15 85.976 285.595 86.36C285.084 86.7013 284.55 86.872 283.996 86.872C283.484 86.872 282.95 86.7867 282.396 86.616C281.457 81.6667 280.732 75.5013 280.22 68.12C279.75 60.7387 279.473 56.5573 279.388 55.576C280.028 54.9787 280.689 54.68 281.372 54.68C282.097 54.68 282.737 54.7653 283.292 54.936C283.462 56.1733 283.59 58.904 283.676 63.128C283.761 67.352 283.868 69.9973 283.996 71.064C284.593 67.48 285.66 64.1307 287.196 61.016C288.049 59.2667 289.158 57.88 290.524 56.856C291.932 55.7893 293.425 55.256 295.003 55.256C296.625 55.256 298.097 55.9813 299.42 57.432C300.785 58.84 301.468 60.12 301.468 61.272C301.468 61.6987 301.212 62.04 300.7 62.296C300.188 62.5093 299.612 62.616 298.972 62.616C298.374 62.616 297.905 62.3813 297.564 61.912C297.222 61.4427 296.988 60.9307 296.86 60.376C296.732 59.7787 296.454 59.2453 296.028 58.776C295.601 58.3067 295.025 58.072 294.3 58.072C292.38 58.072 290.737 59.8 289.372 63.256C287.281 68.4187 286.236 74.2427 286.236 80.728ZM305.528 60.184C303.608 60.184 302.306 59.7147 301.623 58.776C301.623 58.0933 301.901 57.56 302.456 57.176C303.053 56.792 303.693 56.5573 304.376 56.472C305.058 56.344 306.168 56.2373 307.704 56.152C307.832 55 307.896 53.528 307.896 51.736C307.938 49.9013 307.981 48.344 308.024 47.064C308.152 43.6933 308.664 41.624 309.56 40.856C309.944 40.5147 310.349 40.344 310.776 40.344C311.245 40.344 311.65 40.3867 311.992 40.472C312.12 43.544 312.184 45.4 312.184 46.04L311.8 55.64C311.885 55.6827 312.12 55.704 312.504 55.704L317.112 55.512C320.44 55.512 322.104 56.024 322.104 57.048C322.104 58.4987 321.506 59.352 320.312 59.608C319.757 59.736 319.096 59.8 318.328 59.8C317.602 59.8 316.642 59.7147 315.448 59.544C314.296 59.3307 313.464 59.224 312.952 59.224C312.44 59.224 312.098 59.2453 311.928 59.288C311.8 60.5253 311.736 61.7627 311.736 63C311.736 64.1947 311.757 65.7093 311.8 67.544C311.885 69.336 312.056 71.4907 312.312 74.008C312.61 76.5253 313.229 78.7013 314.168 80.536C315.106 82.328 316.301 83.224 317.752 83.224C318.477 83.224 319.33 82.9467 320.312 82.392C321.293 81.7947 322.04 81.496 322.552 81.496C323.106 81.496 323.576 81.624 323.96 81.88C324.386 82.0933 324.6 82.3493 324.6 82.648C324.6 83.544 323.682 84.4187 321.848 85.272C320.056 86.0827 318.52 86.488 317.24 86.488C312.546 86.488 309.624 82.0507 308.472 73.176C308.13 70.616 307.874 66.2213 307.704 59.992C307.021 60.12 306.296 60.184 305.528 60.184Z" fill="white"/>
<path d="M28.965 97.6124C-59.2656 35.2924 132.507 6.33039 232.022 7.29094C241.757 5.44668 225.802 4.40928 216.608 4.1211C138.456 2.19999 0 20.5466 0 64.9243C0 128.609 174.422 137.254 214.986 138.695C289.622 141.346 465.667 127.457 445.385 67.5178C425.103 7.5791 257.171 -1.01049 203.628 0.0867675C169.879 0.778373 177.667 3.06449 185.78 4.1211C362.636 -1.93041 440.737 49.1335 440.737 75.3567C440.737 147.687 99.5451 147.465 28.965 97.6124Z" fill="white"/>
</svg>

</div>
        </div>

        

        <div className='Questions'>
            <h2 className='allQuestion'>All Question</h2>
     
             {textt.map((item,index) => (

              <p key={index}> {index + 1} - {item} </p>

             ))}
           

        </div>

    </div>
  )
}

export default End