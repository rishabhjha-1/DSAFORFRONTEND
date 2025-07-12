// // A custom hook in React is a JavaScript function that starts with the prefix use and lets you reuse stateful logic across multiple components. Custom hooks allow you to encapsulate logic in a single function, which can then be used across different parts of your app without duplicating code. They can leverage any of the built-in hooks like useState, useEffect, useContext, etc., to manage component logic and state.


// import { useState, useEffect } from 'react';

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(url);
//         if (!response.ok) throw new Error('Failed to fetch');
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetch;








// import { useState, useEffect } from 'react';

// const useDebounce = (value, delay = 500) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };

// export default useDebounce;









// import { useState, useCallback } from 'react';

// const useToggle = (initialValue = false) => {
//   const [value, setValue] = useState(initialValue);

//   const toggle = useCallback(() => {
//     setValue((prev) => !prev);
//   }, []);

//   return [value, toggle];
// };

// export default useToggle;


// import { useState, useEffect } from 'react';

// const useWindowHeight = () => {
//   // Set the initial height to the current window height
//   const [height, setHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     // Handler to call on window resize
//     const handleResize = () => {
//       setHeight(window.innerHeight);
//     };

//     // Add event listener
//     window.addEventListener('resize', handleResize);

//     // Call handler immediately to set initial height
//     handleResize();

//     // Remove event listener on cleanup
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return height;
// };

// export default useWindowHeight;








// function useThrottle<T>(value: T, delay: number): T {
//   const [throttledValue, setThrottledValue] = useState(value);
//   const lastExecuted = useRef<number>(Date.now());

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       const now = Date.now();
//       if (now - lastExecuted.current >= delay) {
//         setThrottledValue(value);
//         lastExecuted.current = now;
//       }
//     }, delay - (Date.now() - lastExecuted.current));

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return throttledValue;
// }

// export default useThrottle;




//theme control machine coding
// src/context/ThemeContext.js
// import React, { createContext, useState, useEffect } from 'react';

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Load the theme from localStorage or default to light mode
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setIsDarkMode(savedTheme === 'dark');
//     }
//   }, []);

//   // Toggle theme and store the preference in localStorage
//   const toggleTheme = () => {
//     setIsDarkMode((prevTheme) => {
//       const newTheme = !prevTheme;
//       localStorage.setItem('theme', newTheme ? 'dark' : 'light');
//       return newTheme;
//     });
//   };

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };


// src/components/ThemeToggle.js
// import React, { useContext } from 'react';
// import { ThemeContext } from '../context/ThemeContext';

// const ThemeToggle = () => {
//   const { isDarkMode, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button onClick={toggleTheme}>
//       {isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
//     </button>
//   );
// };

// export default ThemeToggle;



/* src/index.css */
// :root {
//     --bg-color-light: #ffffff;
//     --bg-color-dark: #121212;
//     --text-color-light: #000000;
//     --text-color-dark: #ffffff;
//   }
  
//   body {
//     background-color: var(--bg-color-light);
//     color: var(--text-color-light);
//     transition: background-color 0.3s ease, color 0.3s ease;
//   }
  
//   /* Dark theme styles */
//   body.dark-mode {
//     background-color: var(--bg-color-dark);
//     color: var(--text-color-dark);
//   }
  

// src/App.js
// import React, { useContext, useEffect } from 'react';
// import { ThemeProvider, ThemeContext } from './context/ThemeContext';
// import ThemeToggle from './components/ThemeToggle';
// import './index.css';

// function App() {
//   const { isDarkMode } = useContext(ThemeContext);

//   // Apply the dark mode class to the body element
//   useEffect(() => {
//     const body = document.body;
//     if (isDarkMode) {
//       body.classList.add('dark-mode');
//     } else {
//       body.classList.remove('dark-mode');
//     }
//   }, [isDarkMode]);

//   return (
//     <div>
//       <h1>Dark/Light Theme Example</h1>
//       <ThemeToggle />
//     </div>
//   );
// }

// export default function AppWrapper() {
//   return (
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   );
// }





//otp 
// import React, { useState, useRef } from "react";

// interface OTPInputProps {
//   length: number; // Number of OTP fields
//   onChange: (otp: string) => void; // Callback with OTP value
// }

// const OTPInput: React.FC<OTPInputProps> = ({ length, onChange }) => {
//   const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
//   const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

//   const handleInputChange = (value: string, index: number) => {
//     const updatedOtp = [...otp];
//     updatedOtp[index] = value;
//     setOtp(updatedOtp);
//     onChange(updatedOtp.join(""));

//     if (value && index < length - 1) {
//       inputsRef.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       const updatedOtp = [...otp];
//       updatedOtp[index - 1] = "";
//       setOtp(updatedOtp);
//       onChange(updatedOtp.join(""));
//       inputsRef.current[index - 1]?.focus();
//     }
//   };

//   const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     const pasteData = e.clipboardData.getData("text").slice(0, length);
//     const updatedOtp = pasteData.split("").concat(Array(length - pasteData.length).fill(""));
//     setOtp(updatedOtp);
//     onChange(updatedOtp.join(""));

//     // Focus the last input with content
//     const lastIndex = pasteData.length - 1;
//     inputsRef.current[lastIndex]?.focus();
//   };

//   return (
//     <div style={{ display: "flex", gap: "8px" }}>
//       {otp.map((value, index) => (
//         <input
//           key={index}
//           type="text"
//           maxLength={1}
//           value={value}
//           onChange={(e) => handleInputChange(e.target.value, index)}
//           onKeyDown={(e) => handleKeyDown(e, index)}
//           onPaste={handlePaste}
//           ref={(el) => (inputsRef.current[index] = el)}
//           style={{
//             width: "40px",
//             height: "40px",
//             textAlign: "center",
//             fontSize: "18px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default OTPInput;




//usePrev
// const usePrev=(value)=>{
//     let prevValueRef=useRef()
//     useEffect(()=>{
//         prevValueRef.current=value
//     },[value])
// return prevValueRef.current;
// }
// export default usePrevious;




//accordian question - dotpe


// import { useEffect, useState } from "react";
// const fetchItemNames = async ():Promise<string[]> => {
//     return ['Item 1', 'Item 2', 'Item 3'];
//   };
  
//   const fetchItemDescription = async (itemName: string):Promise<string> => {
//     console.log("fetching")
//     return `${itemName} description loaded from API`;
//   };


// export default function TestPage() {
//     const [itemNames, setItemNames] = useState<string[]>([]);
//     const [showDescription,setShowDescription]=useState<Record<string,string>>({})
//     const [openItem,setOpenItem]=useState<string | null>('') //caced approach


//     useEffect(()=>{
//         const getItems=async()=>{
//             const res=await fetchItemNames() 
//             setItemNames(res)
//         }
//         getItems()
       

//     },[])

//     const toggleAccordion=async(name:string)=>{
        // if(showDescription.itemName===name){
        //     // If clicking the same item, hide the description
        //     setShowDescription({})
        // } else {
        //     // If clicking a different item, show its description
        //     const description=await fetchItemDescription(name)
        //     setShowDescription({
        //         itemName:name,
        //         description:description
        //     })
        // }


        //cached approach

//         if (openItem === name) {
//             setOpenItem(null); // close if already open
//             return;
//           }
        
//           // Only fetch if not already cached
//           if (!showDescription[name]) {
//             const description = await fetchItemDescription(name);
//             setShowDescription ((prev) => ({
//               ...prev,
//               [name]: description,
//             }));
//           }
        
//           setOpenItem(name);
//     }


// 	return <div>{
//         itemNames.map((item:string,index:number)=>{
//             return(

//                 <div className="flex flex-col gap-5" key={index} onClick={()=>toggleAccordion(item)}>
//                     {item}
//                     {/* {
//                     showDescription.itemName==item && showDescription.description && (
//                         <div>
//                             {showDescription.description}
//                         </div>
//                     )
                        
                    
//                 } */}

//                 {/* cached approach */}
//                 {openItem === item && (
//             <div className="bg-gray-50 p-2">
//               {showDescription[item] || "Loading..."}
//             </div>
//           )}

//                 </div>
               

//             )
//         })
//         }

//     </div>;
// }
