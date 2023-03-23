import React from "react";
import footerStyles from "../styles/footer.module.css";
import FooterList from "./FooterList";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.support}>
        <h4>Magdal - Top global online ecommerce platform</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ut tenetur
          minima quis, facere alias aperiam dolor ipsum earum, error esse
          dolorum vero itaque iure. Dicta aspernatur ut voluptates hic.
        </p>
        <span>123 Fake St Barranquilla, Co.</span>
        <span>Support 24/7: 123 456 7890</span>
        <span>fakesupport@magdal.com</span>
      </div>
      <div className={footerStyles.listContainer}>
        <FooterList
          title="Useful links"
          list1="About Us"
          list2="Contact"
          list3="Help Center"
          list4="Carrer"
          list5="Policy"
          list6="Flash Sale"
          list7="Official"
          list8="Sitemap"
        />
        <FooterList
        title="Customer Service"
        list1="Payments"
        list2="Shipping"
        list3="Products Returns"
        list4="FAQ"
        list5="Checkout"
        list6="Other Issues"
      />
      <FooterList
        title="Sell on Magdal"
        list1="Sell With Us"
        list2="Affiliate Program"
        list3="Accessibility"
        list4="Advertise With Us"
      />
      </div>
      <div className={footerStyles.newsletter}>
        <Newsletter title="Newsletter" text="Register to get updates on promotions and coupons." textButton="Subscribe" textPolicy="By subscribing you accepted our policy"/>
      </div>
    </footer>
  );
};

export default Footer;
