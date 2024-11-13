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







// const useThrottle = (value, delay) => {
//     const [throttledValue, setThrottledValue] = useState(value);
  
//     useEffect(() => {
//       // Create a timeout reference to handle throttle behavior
//       const handler = setTimeout(() => {
//         setThrottledValue(value);
//       }, delay);
  
//       // Clean up timeout if the component unmounts or if `value` or `delay` changes
//       return () => clearTimeout(handler);
//     }, [value, delay]); // Only update when `value` or `delay` changes
  
//     return throttledValue;
//   };
  
//   export default useThrottle;