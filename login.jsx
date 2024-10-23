// import {
//   Box,
//   Button,
//   Divider,
//   Grid,
//   LinearProgress,
//   TextField,
//   Typography,
// } from "@mui/material";
// import Lottie from "lottie-react";
// import React, { useEffect, useState } from "react";
// import login from "../asset/login.json";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const initialState = {
//   email: "",
//   password: "",
// };

// const Login = () => {
//   const navigate = useNavigate();
//   const [inputs, setInputs] = useState(initialState);
//   const [message, setMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//     setMessage(null);
//   };

//   const handleSubmit = async (event) => {
//     setIsLoading(true);
//     event.preventDefault();
//     const url = process.env.REACT_APP_BASE_URL;
//     const localUrl = `http://localhost:5001`;

//     const email = inputs.email;
//     const password = inputs.password;
//     console.log("url", process.env.REACT_APP_BASE_URL);

//     try {
//       const response = await axios.post(`${url}/api/users/login`, inputs);
//       console.log(response);
//       navigate("/home");
//       localStorage.setItem("authToken", response.data.accessToken);
//       localStorage.setItem("id", response.data.id);
//       console.log(response.data.id);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//     setIsLoading(false);
//   };

//   return (
//     <Grid
//       container
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         background: "linear-gradient(to right bottom, #36EAEF, #6B0AC9)",
//         width: "100vw",
//       }}
//     >
//       <Grid>
//         {isLoading ? (
//           <LinearProgress />
//         ) : (
//           <Divider sx={{ color: "blue", mt: "2px", opacity: 0.1 }} />
//         )}
//         <Grid
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//             alignItems: "center",
//             backgroundColor: "#FFFFFF",
//             borderRadius: 5,
//             boxShadow: 10,
//             m: 9.8,
//             mx: 20,
//           }}
//         >
//           <Grid
//             item
//             sx={{
//               m: 10,
//               display: { md: "flex", sm: "none", xs: "none" },
//               flexDirection: "column",
//             }}
//           >
//             <Lottie
//               animationData={login}
//               style={{ height: "40vh", width: "30vw" }}
//             />
//             <Grid sx={{ backgroundColor: "#FFFFFF", mx: 2, my: 3 }}>
//               <Typography
//                 sx={{
//                   fontSize: "30px",
//                   fontWeight: 800,
//                   color: "#0B2536",
//                   textAlign: "center",
//                 }}
//               >
//                 Welcome to ContactBook
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "16px",
//                   fontWeight: 600,
//                   color: "#868686",
//                   textAlign: "center",
//                 }}
//               >
//                 A stylish and secured tool to store your contacts
//               </Typography>
//             </Grid>
//           </Grid>
//           <Grid
//             sx={{
//               mx: 10,
//               my: 5,
//               py: 3,
//               px: 6,
//               lineHeight: 4,
//               border: 5,
//               borderRadius: 10,
//               borderBlockColor: "aqua",
//               textAlign: "center",
//             }}
//           >
//             <Grid item sx={{ display: { md: "none", sm: "flex", xs: "flex" } }}>
//               <Typography
//                 sx={{
//                   fontSize: "30px",
//                   fontWeight: 800,
//                   color: "#0B2536",
//                   textAlign: "center",
//                 }}
//               >
//                 Welcome to ContactBook
//               </Typography>
//             </Grid>
//             <Typography
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: 600,
//                 color: "#19198C",
//                 textAlign: "center",
//                 m: 5,
//               }}
//             >
//               LOGIN TO YOUR ACCOUNT
//             </Typography>
//             <TextField
//               variant="filled"
//               required
//               onChange={handleChange}
//               fullWidth
//               value={inputs.email}
//               label="Email"
//               name="email"
//             />
//             <TextField
//               variant="filled"
//               required
//               onChange={handleChange}
//               fullWidth
//               value={inputs.password}
//               label="Password"
//               name="password"
//             />
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "flex-end",
//                 fontSize: "12px",
//               }}
//             >
//               <a href="/signup">Not an existing user? Click here</a>
//             </Box>
//             {message && (
//               <Typography
//                 display="flex"
//                 justifyContent="center"
//                 sx={{ mb: "30px", color: "#093863", fontWeight: "600" }}
//               >
//                 {message}
//               </Typography>
//             )}
//             <Button fullWidth onClick={handleSubmit} variant="contained">
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default Login;
