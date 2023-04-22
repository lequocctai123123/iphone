// import React from 'react';
// // import CommonSection from "../components/UI/CommonSection";
// import Helmet from '../components/Helmet/Helmet'

// const store = () => {
//   return <Helmet title = 'Shop'>
//     {/* <CommonSection title = 'Products'/> */}
//   </Helmet>
// }

// export default store
import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './slices/cartSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});

export default store;