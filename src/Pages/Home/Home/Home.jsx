import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Teams from '../Teams/Teams';
import TrackingDeliverySupport from '../TrackingDeliverySupport/TrackingDeliverySupport';
import Merchant from '../Merchant/Merchant';
import CustomersAreSayings from '../customersAreSayings/customersAreSayings.JSX';
import FrequentlyAskedQuestion from '../FrequentlyAskedQuestion/FrequentlyAskedQuestion';

const reviewspromisre=fetch('/reviews.json')
.then(res=>res.json())

const Home = () => {
    return (
      <div>
        <Banner></Banner>

        <HowItWorks></HowItWorks>

        <OurServices></OurServices>

        <Teams></Teams>

        <TrackingDeliverySupport></TrackingDeliverySupport>

        <Merchant></Merchant>

        <CustomersAreSayings
          reviewspromisre={reviewspromisre}
        ></CustomersAreSayings>

        <FrequentlyAskedQuestion></FrequentlyAskedQuestion>
      </div>
    );
};

export default Home;